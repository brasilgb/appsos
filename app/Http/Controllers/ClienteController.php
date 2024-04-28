<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Cliente;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;

class ClienteController extends Controller
{
    use HttpResponses;

    public function getClientes()
    {
        $clientes = Cliente::get();
        return [
            "success" => true,
            "result" => $clientes
        ];
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->get('q');

        $query = Cliente::with('ordens')->orderBy('id', 'DESC');

        if ($search) {
            $query->where('nome', 'like', '%' . $search . '%')
                ->orWhere('cpf', 'like', '%' . $search . '%');
        }

        $clientes = $query->paginate(12);

        return Inertia::render('Clientes/index', ["clientes" => $clientes]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $cliente = Cliente::exists() ? Cliente::orderBy('id', 'desc')->first()->id : [];

        return Inertia::render('Clientes/add', ['cliente' => $cliente]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $messages = [
            'required' => 'O campo :attribute deve ser preenchido',
            'email' => 'Endereço de e-mail válido',
            'cpf_ou_cnpj' => 'CPF ou CNPJ inválido',
            'unique' => 'CPF ou CNPJ já está em uso',
        ];
        $request->validate(
            [
                'nome' => 'required',
                'cpf' => 'nullable|cpf_ou_cnpj|unique:clientes',
                'email' => 'nullable|email|unique:clientes',
                'telefone' => 'required'
            ],
            $messages,
            [
                'nome' => 'nome',
                'email' => 'e-mail',
            ]
        );

        Cliente::create($data);
        Session::flash('success', 'Cliente cadastrado com sucesso!');
        return redirect()->route('clientes.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Cliente $cliente)
    {
        return Inertia::render('Clientes/edit', ['clientes' => $cliente]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cliente $cliente)
    {
        return Redirect::route('clientes.show', ['cliente' => $cliente->id]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cliente $cliente)
    {
        $data = $request->all();

        $messages = [
            'required' => 'O campo :attribute deve ser preenchido',
            'email' => 'Endereço de e-mail inválido',
            'cpf_ou_cnpj' => 'CPF ou CNPJ inválido',
            'unique' => 'CPF ou CNPJ já está em uso',
        ];
        $request->validate(
            [
                'nome' => 'required',
                'cpf' => 'nullable|cpf_ou_cnpj|unique:clientes,cpf,' . $cliente->id,
                'email' => 'nullable|email',
                'telefone' => 'required'
            ],
            $messages,
            [
                'nome' => 'nome',
                'email' => 'e-mail',
            ]
        );

        $cliente->update($data);
        Session::flash('success', 'Cliente editado com sucesso!');
        return Redirect::route('clientes.show', ['cliente' => $cliente->id]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cliente $cliente)
    {
        $cliente->delete();
        Session::flash('success', 'Cliente deletado com sucesso');
        return Redirect::route('clientes.index');
    }
}
