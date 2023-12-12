<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Empresa;
use App\Models\Ordem;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;

class EtiquetaController extends Controller
{

    use HttpResponses;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Ordem::orderBy("id", "DESC")->first();
        $etiquetas = Ordem::where("id", $query->id)->first();
        return Inertia::render('Etiquetas/index', ["etiquetas" => $etiquetas]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $etiquetas = $request->all();
        $empresa = Empresa::first();
        for($i = $etiquetas['ordeminicial'];  $i <= $etiquetas['ordemfinal']; $i++){
        $data[] = [
            'ordem' => $i,
            'telefone' => $empresa->telefone,
            'empresa' => $empresa->empresa,
        ];
        }
        return Inertia::render('Etiquetas/printer', ['etiquetas' => $data]);
    }

}
