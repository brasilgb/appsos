<?php

namespace App\Http\Controllers;

use App\Models\Marca;
use App\Models\Modelo;
use App\Models\Servico;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class ServicoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->get('q');
        $query = Servico::with('marcas')->with('modelos')->orderBy('id', 'DESC');

        if ($search) {
            $query->where('servico', 'like', '%' . $search . '%');
        }

        $servicos = $query->paginate(12);
        return Inertia::render('Servicos/index', ["servicos" => $servicos]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $marcas = Marca::get();
        $modelos = Modelo::get();
        return Inertia::render('Servicos/add', ['marcas' => $marcas, 'modelos' => $modelos]);
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
                'servico' => 'serviço',
            ]
        );

        Servico::create($data);
        Session::flash('success', 'Servico cadastrada com sucesso!');
        return redirect::route('servicos.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Servico $servico)
    {
        $marcas   = Marca::get();
        $modelos  = Modelo::get();
        return Inertia::render('Servicos/edit', ['servico' => $servico, 'marcas' => $marcas, 'modelos' => $modelos]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Servico $servico)
    {
        return Redirect::route('servicos.show', ['servico' => $servico->id]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Servico $servico)
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
                'servico' => 'serviço',
            ]
        );

        $servico->update($data);
        Session::flash('success', 'Servico editado com sucesso!');
        return redirect::route('servicos.show', ['servico' => $servico->id]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Servico $servico)
    {
        $servico->delete();
        Session::flash('success', 'Serviço deletado com sucesso!');
    }

    public function getServiceQuote(Request $request)
    {
        $servico = Servico::where('id', $request->servico)->first();
        
        return response()->json([
            'status' => true,
            'data' => $servico,
        ], 200);
    }
}
