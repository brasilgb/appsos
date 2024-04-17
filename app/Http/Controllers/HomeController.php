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
        // const gerados = ordens.filter((fo: any) => (fo.status === 3));
        // const aprovados = ordens.filter((fo: any) => (fo.status === 4));
        // const concluidos = ordens.filter((fo: any) => (fo.status === 6 || fo.status === 7));
        $statusOrder = [
            'gerados'    => Ordem::where('status', 3)->get('id'),
            'aprovados'  => Ordem::where('status', 4)->get('id'),
            'concluidos' => Ordem::where('status', 6)->orWhere('status', 7)->get('id'),
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
