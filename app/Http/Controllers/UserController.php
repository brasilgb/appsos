<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;

class UserController extends Controller
{
    use HttpResponses;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $search = $request->get('q');

        $query = User::orderBy('id', 'DESC');

        if ($search) {
            $query->where('name', 'like', '%' . $search . '%');
        }

        $usuarios = $query->paginate(12);

        return Inertia::render('Usuarios/index', ["usuarios" => $usuarios]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Usuarios/add');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $messages = [
            'required' => 'O campo :attribute deve ser preenchido',
            'email' => 'Endereço de e-mail inválido',
            "unique" => 'E-mail já cadastrado',
            'confirmed' => 'As senhas não correspondem',
            'min' => 'As senha deve ter no mínimo :min caracteres',
        ];
        $request->validate(
            [
                'name' => 'required',
                'email' => 'nullable|email|unique:users',
                'role' => 'required',
                'password' => ['required', 'min:6', 'confirmed', Rules\Password::defaults()],
                'password_confirmation' => ['required', 'min:6'],
            ],
            $messages,
            [
                'name' => 'nome',
                'password' => 'senha',
                'email' => 'e-mail',
                'role' => 'função',
            ]
        );

        User::create($data);
        Session::flash('success', 'Usuário cadastrado com sucesso!');
        return redirect()->route('usuarios.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return Inertia::render('Usuarios/edit', ['usuarios' => $user]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        return Redirect::route('usuarios.show', ['user' => $user->id]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $data = $request->all();

        $messages = [
            'required' => 'O campo :attribute deve ser preenchido',
            'email' => 'Endereço de e-mail válido',
        ];
        $request->validate(
            [
                'nome' => 'required',
                'email' => 'nullable|email',
                'password' => 'required',
                'role' => 'required',
            ],
            $messages,
            [
                'name' => 'nome',
                'password' => 'senha',
                'email' => 'e-mail',
                'role' => 'função',
            ]
        );

        $data['password'] = Hash::make($request->password);
        $user->update($data);
        Session::flash('success', 'Usuário cadastrado com sucesso!');
        return Redirect::route('usuarios.show', ['user' => $user->id]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();
        Session::flash('success', 'Usuário deletado com sucesso');
        return Redirect::route('usuarios.index');
    }
}
