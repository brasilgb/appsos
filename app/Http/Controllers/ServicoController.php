<?php

namespace App\Http\Controllers;

use App\Models\Geral;
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
        $query = Servico::orderBy('id', 'DESC');

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
        $gerais = Geral::first();
        return Inertia::render('Servicos/add', ['gerais' => $gerais]);
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
                'equipamento' => 'required',
                'servico' => 'required',
            ],
            $messages,
            [
                'servico' => 'serviço',
            ]
        );

        Servico::create($data);
        Session::flash('success', 'Serviço cadastrado com sucesso!');
        return redirect()->route('servicos.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Servico $servico)
    {
        $gerais = Geral::first();
        return Inertia::render('Servicos/edit', ['servicos' => $servico, 'gerais' => $gerais]);
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
                'equipamento' => 'required',
                'servico' => 'required'
            ],
            $messages,
            [
                'servico' => 'serviço',
            ]
        );

        $servico->update($data);
        Session::flash('success', 'Serviço editado com sucesso!');
        return Redirect::route('servicos.show', ['servico' => $servico->id]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Servico $servico)
    {
        $servico->delete();
        Session::flash('success', 'Serviço deletado com sucesso!');
        return Redirect::route('servicos.index');
    }
    
    public function getServicos()
    {
        $servicos = Servico::get();
        return response()->json([
            "success" => true,
            "data" => $servicos
        ]);
    }
}
