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
        $statusOrder = [
            'gerados'    => Ordem::where('status', 3)->get('id'),
            'aprovados'  => Ordem::where('status', 4)->get('id'),
            'concluidosca' => Ordem::where('status', 6)->get('id'),
            'concluidoscn' => Ordem::where('status', 7)->get('id'),
            'messages' => Mensagem::where('destinatario', $logged)->where('status', 0)->get()
        ];
        $dashData = [
            'numcli' => count(Cliente::get()),
            'numord' => count(Ordem::get()),
            'numpro' => count(Produto::get()),
            'numage' => count(Agenda::get()),
            'nummen' => count(Mensagem::where('destinatario', $logged)->where('status', 0)->get()),
        ];
        return Inertia::render('Home/index', ['dashdata' => $dashData, 'statusorder' => $statusOrder]);
    }
}
