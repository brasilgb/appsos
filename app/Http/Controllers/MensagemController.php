<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\MensagemResource;
use App\Models\Mensagem;
use App\Models\User;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;

class MensagemController extends Controller
{
    use HttpResponses;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->get('q');

        $query = Mensagem::orderBy('id', 'DESC');

        if ($search) {
            $query->where('remetente', 'like', '%' . $search . '%');
        }
        $users = User::where('status', 1)->get();
        $mensagens = $query->paginate(12);
        return Inertia::render('Mensagens/index', ['mensagens' => $mensagens, 'users' => $users]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $users = User::where('status', 1)->get();
        return Inertia::render('Mensagens/add', ['users' => $users]);
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
                'remetente' => 'required',
                'destinatario' => 'required',
                'mensagem' => 'required'
            ],
            $messages,
            [
                'destinatario' => 'destinatário',
            ]
        );
        Mensagem::create($data);
        Session::flash('success', 'Mensagem cadastrada com sucesso!');
        return redirect()->route('mensagens.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Mensagem $mensagem)
    {
        $users = User::where('status', 1)->get();
        return Inertia::render('Mensagens/edit', ['mensagens' => $mensagem, 'users' => $users]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Mensagem $mensagem)
    {
        return Redirect::route('mensagens.show', ['mensagem' => $mensagem->id]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Mensagem $mensagem)
    {
        $data = $request->all();

        $messages = [
            'required' => 'O campo :attribute deve ser preenchido',
        ];
        $request->validate(
            [
                'remetente' => 'required',
                'destinatario' => 'required',
                'mensagem' => 'required'
            ],
            $messages,
            [
                'destinatario' => 'destinatário',
            ]
        );
        $mensagem->update($data);
        Session::flash('success', 'Mensagem Editada com sucesso!');
        return Redirect::route('mensagens.show', ['mensagem' => $mensagem->id]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Mensagem $mensagem)
    {
        $mensagem->delete();
        Session::flash('success', 'Mensagem deletada com sucesso');
        return Redirect::route('mensagens.index');
    }
}
