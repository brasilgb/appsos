<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProdutoResource;
use App\Models\Estoque;
use App\Models\Produto;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;

class ProdutoController extends Controller
{
    use HttpResponses;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->get('q');
        $estoque = Estoque::get();
        $query = Produto::orderBy('id', 'DESC');

        if ($search) {
            $query->where('descricao', 'like', '%' . $search . '%');
        }

        $produtos = $query->paginate(12);
        return Inertia::render('Produtos/index', ["produtos" => $produtos, 'estoque' => $estoque]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Produtos/add');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $messages = [
            'required' => 'O campo :attribute deve ser preenchido',
            'numeric' => 'Digite somente números e decimais com ponto(10.21)',
        ];
        $request->validate(
            [
                'descricao' => 'required',
                'valcompra' => 'required',
                'valvenda' => 'required',
                'unidade' => 'required',
                'estmaximo' => 'required|numeric',
                'estminimo' => 'required|numeric',
                'tipo' => 'required',
            ],
            $messages,
            [
                'descricao' => 'descrição',
                'valcompra' => 'valor da compra',
                'valvenda' => 'valor da venda',
                'estmaximo' => 'estoque máximo',
                'estminimo' => 'estoque mínimo',
            ]
        );
        $id = Produto::orderBy('id', 'desc')->first();

        $data['id'] = $id ? $id->id + 1 : 1;
        Produto::create($data);
        Session::flash('success', 'Produto cadastrado com sucesso!');
        return redirect()->route('produtos.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Produto $produto)
    {
        return Inertia::render('Produtos/edit', ['produtos' => $produto]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Produto $produto)
    {
        return Redirect::route('produtos.show', ['produto' => $produto->id]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Produto $produto)
    {
        $data = $request->all();

        $messages = [
            'required' => 'O campo :attribute deve ser preenchido',
            'numeric' => 'Digite somente números e decimais com ponto(10.21)',
        ];
        $request->validate(
            [
                'descricao' => 'required',
                'valcompra' => 'required',
                'valvenda' => 'required',
                'unidade' => 'required',
                'estmaximo' => 'required|numeric',
                'estminimo' => 'required|numeric',
                'tipo' => 'required',
            ],
            $messages,
            [
                'descricao' => 'descrição',
                'valcompra' => 'valor da compra',
                'valvenda' => 'valor da venda',
                'estmaximo' => 'estoque máximo',
                'estminimo' => 'estoque mínimo',
            ]
        );

        $produto->update($data);
        Session::flash('success', 'Produto editado com sucesso!');
        return Redirect::route('produtos.show', ['produto' => $produto->id]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Produto $produto)
    {
        $produto->delete();
        Session::flash('success', 'Produto deletado com sucesso');
        return Redirect::route('produtos.index');
    }
}
