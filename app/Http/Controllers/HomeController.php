<?php

namespace App\Http\Controllers;

use App\Models\Agenda;
use App\Models\Cliente;
use App\Models\Mensagem;
use App\Models\Ordem;
use App\Models\Produto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $logged = Auth::user()->id;
        $clientes = Cliente::get();
        $ordens = Ordem::with('cliente')->get();
        $produtos = Produto::get();
        $agendas = Agenda::get();
        $mensagens = Mensagem::where('destinatario', $logged)->where('status', 0)->get();
        return Inertia::render('Home/index', [
            'clientes'  => $clientes,
            'ordens'    => $ordens,
            'produtos'  => $produtos,
            'agendas'   => $agendas,
            'mensagens' => $mensagens,
        ]);
    }
}
