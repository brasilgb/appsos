<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\OrdemResource;
use App\Models\Cliente;
use App\Models\Impressao;
use App\Models\Ordem;
use App\Models\Produto;
use App\Models\User;
use App\Models\Whats;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Carbon\Carbon;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class OrdemController extends Controller
{
    use HttpResponses;

    // Display and linting order for id
    public function getOrder($order) 
    {
        $query = Ordem::where('id', $order)->with('cliente')->get();
        return [
            'success' => true,
            'result' => $query
        ];
    }
    
    // Display and listing customers for id order
    public function getOrderCli($customer) 
    {
        $query = Ordem::where('cliente_id', $customer)->with('cliente')->get();
        return [
            'success' => true,
            'result' => $query
        ];
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->get('q');
        $oc = $request->get('oc');

        $query = Ordem::with('cliente')->orderBy('id', 'DESC');

        if ($search) {
            $query->where('id', 'like', '%' . $search . '%');
        }

        if ($oc) {
            $query->where('cliente_id', $oc);
        }

        $ordens = $query->paginate(12);
        $whats = Whats::orderBy('id', 'DESC')->first();
        $printers = Impressao::orderBy('id', 'DESC')->first();
        return Inertia::render('Ordens/index', ["ordens" => $ordens, 'whats' => $whats, 'printers' => $printers]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $clientes = Cliente::get();
        $ordem = Ordem::exists() ? Ordem::orderBy('id', 'desc')->first()->id : [];

        return Inertia::render('Ordens/add', ['clientes' => $clientes, 'ordem' => $ordem]);
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $messages = [
            'required' => 'O campo :attribute deve ser preenchido'
        ];
        $request->validate(
            [
                'cliente_id' => 'required',
                'equipamento' => 'required',
                'defeito' => 'required',
            ],
            $messages,
            [
                'equipamento' => 'equipamento',
                'senha' => 'senha',
                'cliente_id' => 'cliente',
            ]
        );
        Ordem::create($data);
        Session::flash('success', 'Ordem de serviço cadastrada com sucesso!');
        return redirect()->route('ordens.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, Ordem $ordem)
    {
        $page = $request->page;
        $ordens = Ordem::with('cliente')->where('id', $ordem->id)->first();
        $tecnicos = User::where('role', 3)->where('status', 1)->get();
        $produtos = Produto::get();
        return Inertia::render('Ordens/edit', [
            'ordens' => $ordens, 
            'tecnicos' => $tecnicos, 
            'produtos' => $produtos, 
            'ordemProduto' => $ordem->produtos, 
            'currentPage' => $page
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ordem $ordem)
    {
        return Redirect::route('ordens.show', ['ordem' => [$ordem->id]]);
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Ordem $ordem)
    {
        $data = $request->all();
        $messages = [
            'required' => 'O campo :attribute deve ser preenchido'
        ];
        $request->validate(
            [
                'equipamento' => 'required',
                'defeito' => 'required',
                'tecnico' => 'required',
            ],
            $messages,
            [
                'equipamento' => 'equipamento',
                'senha' => 'senha',
            ]
        );
        $dtformat = Carbon::now();
        $data['dtentrega'] = $request->status === '8' ? $dtformat->toDateTimeString() : null;
        $ordem->update($data);

        if ($request->pecas != null) {
            $ord = Ordem::find($ordem->id);
            $ord->produtos()->sync($request->pecas);
        }

        Session::flash('success', 'Ordem de serviço editada com sucesso!');
        return redirect()->route('ordens.show', ['ordem' => $ordem->id, 'page' => $request->page]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ordem $ordem)
    {
        $ordem->delete();

        $ordem->produtos()->detach();
        $ordem->delete($ordem);

        Session::flash('success', 'Ordem deletada com sucesso');
        return Redirect::route('ordens.index');
    }
}
