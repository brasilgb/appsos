<?php

namespace App\Http\Controllers;

use App\Models\Marca;
use App\Models\Modelo;
use App\Models\Orcamento;
use App\Models\Servico;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class OrcamentoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->get('q');
        $query = Orcamento::orderBy('id', 'DESC');

        if ($search) {
            $query->where('orcamento', 'like', '%' . $search . '%');
        }
        $servicos   = Servico::get();
        $marcas = Marca::get();
        $modelos = Modelo::get();
        $orcamentos = $query->paginate(12);
        return Inertia::render('Orcamentos/index', ["orcamentos" => $orcamentos, 'marcas' => $marcas, 'modelos' => $modelos, 'servicos' => $servicos]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $servicos   = Servico::get();
        $marcas = Marca::get();
        $modelos = Modelo::get();
        return Inertia::render('Orcamentos/add', ['marcas' => $marcas, 'modelos' => $modelos, 'servicos' => $servicos]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    { 
        $data = $request->all();

        $messages = [
            'required' => 'O campo :attribute deve ser preenchido',
        ];
        $request->validate(
            [
                'servico' => 'required',
                'valor' => 'required'
            ],
            $messages,
            [
                'servico' => 'orçamento',
            ]
        );

        Orcamento::create($data);
        Session::flash('success', 'Orçamento cadastrado com sucesso!');
        return redirect::route('orcamentos.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Orcamento $orcamento)
    {
        $servicos   = Servico::get();
        $marcas   = Marca::get();
        $modelos  = Modelo::get();
        return Inertia::render('Orcamentos/edit', ['orcamento' => $orcamento, 'marcas' => $marcas, 'modelos' => $modelos, 'servicos' => $servicos]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Orcamento $orcamento)
    {
        return Redirect::route('orcamentos.show', ['orcamento' => $orcamento->id]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Orcamento $orcamento)
    {
        
        $data = $request->all();

        $messages = [
            'required' => 'O campo :attribute deve ser preenchido',
        ];
        $request->validate(
            [
                'servico' => 'required',
                'valor' => 'required'
            ],
            $messages,
            [
                'orcamento' => 'orçamento',
            ]
        );

        $orcamento->update($data);
        Session::flash('success', 'Orçamento editado com sucesso!');
        return redirect::route('orcamentos.show', ['orcamento' => $orcamento->id]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Orcamento $orcamento)
    {
        $orcamento->delete();
        Session::flash('success', 'Orçamento deletado com sucesso!');
    }

    public function getServiceQuote(Request $request)
    {
        if ($request->orcamento){
            $orcamento = Orcamento::where('id', $request->orcamento)->get();
        }
        
        return response()->json([
            'status' => true,
            'data' => $orcamento,
        ], 200);
    }
}
