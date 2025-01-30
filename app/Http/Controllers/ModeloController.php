<?php

namespace App\Http\Controllers;

use App\Models\Marca;
use App\Models\Modelo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class ModeloController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->get('q');
        $query = Modelo::with('marca')->orderBy('id', 'DESC');

        if ($search) {
            $query->where('modelo', 'like', '%' . $search . '%');
        }

        $modelos = $query->paginate(12);
        return Inertia::render('Modelos/index', ["modelos" => $modelos]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $marcas = Marca::get();
        return Inertia::render('Modelos/add', ['marcas' => $marcas]);
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
                'modelo' => 'required',
                'marca_id' => 'required'
            ],
            $messages,
            [
                'modelo' => 'modelo',
                'marca_id' => 'marca',
            ]
        );

        Modelo::create($data);
        Session::flash('success', 'Modelo cadastrado com sucesso!');
        return redirect()->route('modelos.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Modelo $modelo)
    {
        $marcas = Marca::get();
        return Inertia::render('Modelos/edit', ['modelo' => $modelo, 'marcas' => $marcas]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Modelo $modelo)
    {
        return Redirect::route('modelos.show', ['modelo' => $modelo->id]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Modelo $modelo)
    {
        $data = $request->all();

        $messages = [
            'required' => 'O campo :attribute deve ser preenchido',
        ];
        $request->validate(
            [
                'modelo' => 'required',
                'marca_id' => 'required'
            ],
            $messages,
            [
                'modelo' => 'modelo',
                'marca_id' => 'marca',
            ]
        );

        $modelo->update($data);
        Session::flash('success', 'Marca editado com sucesso!');
        return Redirect::route('modelos.show', ['modelo' => $modelo->id]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Modelo $modelo)
    {
        $modelo->delete();
        Session::flash('success', 'Modelo deletado com sucesso');
        return Redirect::route('modelos.index');
    }
}
