<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\ClienteResource;
use App\Models\Cliente;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;

class ClienteController extends Controller
{
    use HttpResponses;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $search = $request->get('q');

        $query = Cliente::with('ordens')->orderBy('id', 'DESC');

        if ($search) {
            $query->where('nome', 'like', '%' . $search . '%');
        }

        $clientes = $query->paginate(15);

        return Inertia::render('Clientes/index', ["clientes" => $clientes]);
    }

    public function allclientes()
    {
        $clientes = Cliente::all();
        return ClienteResource::collection($clientes);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Clientes/add');
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
        ];
        $request->validate(
            [
                'nome' => 'required',
                'cpf' => 'nullable|cpf_ou_cnpj',
                'email' => 'nullable|email',
                'telefone' => 'required'
            ],
            $messages,
            [
                'nome' => 'nome',
                'email' => 'e-mail',
            ]
        );

        Cliente::create($data);
        Session::flash('success', 'Usuário criado com sucesso!');
        return redirect()->route('clientes.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Cliente $cliente)
    {
        return new ClienteResource($cliente);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cliente $cliente)
    {
        // if(!auth()->user()->tokenCan('user-store')) {
        //     return $this->error('Unauthorized', 403);
        // }
        // dd($request->all());
        $validator = Validator::make($request->all(), [
            'cpf' => 'required',
            'nome' => 'required',
            'email' => "unique:users,email,$cliente->id",
            'cep' => 'required',
            'uf' => 'required',
            'cidade' => 'required',
            'bairro' => 'required',
            'endereco' => 'required',
            'telefone' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->error('Dados inválidos!', 422, $validator->errors());
        }

        $updated = $cliente->update($request->all());

        if ($updated) {
            return $this->response('Cliente alterado com sucesso!', 200, new ClienteResource($cliente));
        }
        return $this->error('Cliente não alterado', 400);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cliente $cliente)
    {
        $deleted = $cliente->delete();

        if ($deleted) {
            return $this->response('Cliente deletado com sucesso!', 200);
        }
        return $this->response('Cliente não deletado!', 400);
    }
}
