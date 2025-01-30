<?php

namespace App\Http\Controllers;

use App\Models\Marca;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class MarcaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->get('q');
        $query = Marca::orderBy('id', 'DESC');

        if ($search) {
            $query->where('marca', 'like', '%' . $search . '%');
        }

        $marcas = $query->paginate(12);
        return Inertia::render('Marcas/index', ["marcas" => $marcas]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Marcas/add');
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
                'marca' => 'required'
            ],
            $messages,
            [
                'marca' => 'marca',
            ]
        );

        Marca::create($data);
        Session::flash('success', 'Marca cadastrada com sucesso!');
        return redirect()->route('marcas.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Marca $marca)
    {
        return Inertia::render('Marcas/edit', ['marcas' => $marca]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Marca $marca)
    {
        return Redirect::route('marcas.show', ['marca' => $marca->id]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Marca $marca)
    {
        $data = $request->all();

        $messages = [
            'required' => 'O campo :attribute deve ser preenchido',
        ];
        $request->validate(
            [
                'marca' => 'required'
            ],
            $messages,
            [
                'marca' => 'marca',
            ]
        );

        $marca->update($data);
        Session::flash('success', 'Marca editado com sucesso!');
        return Redirect::route('marcas.show', ['marca' => $marca->id]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Marca $marca)
    {
        $marca->delete();
        Session::flash('success', 'Marca deletado com sucesso');
        return Redirect::route('marcas.index');
    }
}
