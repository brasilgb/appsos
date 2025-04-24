<?php

namespace App\Http\Controllers;

use App\Models\Agenda;
use App\Models\Cliente;
use App\Models\Mensagem;
use App\Models\Ordem;
use App\Models\Produto;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Carbon\Carbon;

class HomeController extends Controller
{
    public function index()
    {
        $date = Carbon::now();

        // dd($date->toDateString());
        $statusOrder = [
            'gerados'    => Ordem::where('status', 3)->get('id'),
            'aprovados'  => Ordem::where('status', 4)->get('id'),
            'concluidosca' => Ordem::where('status', 6)->get('id'),
            'concluidoscn' => Ordem::where('status', 7)->get('id'),
            'agendados' => Agenda::where('status', 1)->get('id'),
        ];
        $dashData = [
            'numcli' => count(Cliente::get()),
            'numord' => count(Ordem::get()),
            'numpro' => count(Produto::get()),
            'numage' => count(Agenda::get()),
            'nummen' => count(Mensagem::get()),
            'trintadias' => Ordem::with('cliente')->whereDate('dtentrega', '>=', '2025-03-01')->whereDate("dtfeedback", '>=', $date->toDateString())
                ->where('status', 8)
                ->where('feedback', 0)
                ->orderBy('dtentrega', 'DESC')
                ->get(),
        ];
        // dd($dashData);
        return Inertia::render('Home/index', ['dashdata' => $dashData, 'statusorder' => $statusOrder]);
    }
}
