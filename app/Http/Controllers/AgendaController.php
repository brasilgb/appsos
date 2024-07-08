<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\AgendaResource;
use App\Models\Agenda;
use App\Models\Cliente;
use App\Models\User;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;

class AgendaController extends Controller
{
    use HttpResponses;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->get('q');
        $ac = $request->get('ac');

        $query = Agenda::with('cliente')->orderBy('id', 'DESC');

        if ($search) {
            $query->whereDate('datahora', $search);
        }

        if ($ac) {
            $query->where('cliente_id', $ac);
        }

        $agendas = $query->paginate(12);
        return Inertia::render('Agendas/index', ['agendas' => $agendas]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $clientes = Cliente::get();
        $tecnicos = User::where('role', 3)->orWhere('role', 1)->where('status', 1)->get();
        return Inertia::render('Agendas/add', ['clientes' => $clientes, 'tecnicos' => $tecnicos]);
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
                'cliente_id' => 'required',
                'datahora' => 'required',
                'servico' => 'required',
                'detalhes' => 'required',
                'tecnico' => 'required',
                'status' => 'required',
            ],
            $messages,
            [
                // 'nome' => 'nome',
                // 'email' => 'e-mail',
            ]
        );
        Agenda::create($data);
        Session::flash('success', 'Agendamento cadastrado com sucesso!');
        return redirect()->route('agendas.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Agenda $agenda)
    {
        $agendas = Agenda::with('cliente')->where('id', $agenda->id)->first();
        $tecnicos = User::where('role', 3)->where('status', 1)->get();
        return Inertia::render('Agendas/edit', ['agendas' => $agendas, 'tecnicos' => $tecnicos]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Agenda $agenda)
    {
        return Redirect::route('agendas.show', ['agenda' => $agenda->id]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Agenda $agenda)
    {
        $data = $request->all();

        $messages = [
            'required' => 'O campo :attribute deve ser preenchido',
            // 'email' => 'Endereço de e-mail válido',
            // 'cpf_ou_cnpj' => 'CPF ou CNPJ inválido',
            // 'unique' => 'CPF ou CNPJ já está em uso',
        ];
        $request->validate(
            [
                'datahora' => 'required',
                'servico' => 'required',
                'detalhes' => 'required',
                'tecnico' => 'required',
                'status' => 'required',
            ],
            $messages,
            [
                // 'nome' => 'nome',
                // 'email' => 'e-mail',
            ]
        );
        $agenda->update($data);
        Session::flash('success', 'Agendamento editado com sucesso!');
        return Redirect::route('agendas.show', ['agenda' => $agenda->id]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Agenda $agenda)
    {
        $agenda->delete();
        Session::flash('success', 'Agendamento deletado com sucesso');
        return Redirect::route('agendas.index');
    }
}
