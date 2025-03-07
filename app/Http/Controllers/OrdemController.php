<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\OrdemResource;
use App\Models\Cliente;
use App\Models\Geral;
use App\Models\Imagem;
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
    public function allOrder()
    {
        $dashData = [
            'numorder' => count(Ordem::get()),
            'numabertas' => count(Ordem::where('status', 1)->get()), // aberta
            'numgerados' => count(Ordem::where('status', 3)->get()), // orc. gerado
            'numaprovados' => count(Ordem::where('status', 4)->get()), // orc. aprovado
            'numconcluidosca' => count(Ordem::where('status', 6)->get()), // concluido cli nao avisado
            'numconcluidoscn' => count(Ordem::where('status', 7)->get()), // concluido cli avisado
        ];
        return [
            'success' => true,
            'result' => $dashData
        ];
    }

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
        $feedback = $request->get('f');

       if ($search && $feedback) {
        Ordem::where('id', $search)->update(['feedback' => $feedback]);
       }

        $query = Ordem::with('cliente')->orderBy('id', 'DESC');

        if ($search) {
            $query->where('id', 'like', '%' . $search . '%');
        }

        if ($oc) {
            $query->where('cliente_id', $oc);
        }

        $ordens = $query->paginate(12)->withQueryString();
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
        $gerais = Geral::first();
        $ordem = Ordem::exists() ? Ordem::orderBy('id', 'desc')->first()->id : [];

        return Inertia::render('Ordens/add', ['clientes' => $clientes, 'ordem' => $ordem, 'gerais' => $gerais]);
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
        $data['status'] = $request->status ? '4' : '1';
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
        $tecnicos = User::where('role', 3)->orWhere('role', 1)->where('status', 1)->get();
        $produtos = Produto::get();
        $gerais = Geral::first();
        return Inertia::render(
            'Ordens/edit',
            [
                'ordens' => $ordens,
                'tecnicos' => $tecnicos,
                'produtos' => $produtos,
                'ordemProduto' => $ordem->produtos,
                'currentPage' => $page,
                'ocli' => $request->oc,
                'gerais' => $gerais,
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ordem $ordem)
    {
        return Redirect::route('ordens.show', ['ordem' => $ordem->id]);
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
                'tecnico' => 'required'
            ],
            $messages,
            [
                'equipamento' => 'equipamento',
                'senha' => 'senha',
            ]
        );
        $dtformat = Carbon::now();
        $data['dtentrega'] = $request->status == '8' ? $dtformat->toDateTimeString() : null;

        if (!empty($request->produtos)) {
            foreach ($request->produtos as $peca) {
                $pec[] = [
                    'ordem_id' => $ordem->id,
                    'produto_id' => $peca,
                    'quantidade' => 1
                ];
            }
            $ord = Ordem::find($ordem->id);
            $ord->produtos()->sync($pec);
        } else {
            $ord = Ordem::find($ordem->id);
            $ord->produtos()->sync([]);
        }

        $ordem->update($data);
        Session::flash('success', 'Ordem de serviço editada com sucesso!');
        return Redirect::route('ordens.show', ['ordem' => $ordem->id, 'page' => $request->page, 'oc' => $request->get('oc')]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function delPecaOrdem(Ordem $ordem)
    {
        // dd($ordem);
        $ordem->where('id', $ordem->id)->update(['valpecas' => '0']);
        $ordem->produtos()->detach();
        return Redirect::route('ordens.show', ['ordem' => $ordem->id]);
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
