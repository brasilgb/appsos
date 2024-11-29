<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Empresa;
use App\Models\Impressao;
use App\Models\Ordem;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;

class PrinterController extends Controller
{

    use HttpResponses;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $tp = $request->get('tp');
        $id = $request->get('or');
        $ordem = Ordem::with('cliente')->where("id", $id)->first();
        $pres = Impressao::first();
        switch ($tp) {
            case 1:
                $printer = $pres->recebimento;
                break;
            case 2:
                $printer = $pres->entrega;
                break;
            case 3:
                $printer = $pres->orcamento;
                break;
            case 4:
                $printer = [
                    "entrega" => $pres->entrega,
                    "checkmobile" => $pres->checkmobile,
                    "checknote" => $pres->checknote,
                    "checkpc" => $pres->checkpc,
                    "checkoutros" => $pres->checkoutros
                ];
                break;
        }


        $empresa = Empresa::first();
        return Inertia::render('Printer/index', ["empresa" => $empresa, "ordem" => $ordem, 'printer' => $printer, 'tipo' => $tp]);
    }
}
