<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Empresa;
use App\Models\Ordem;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Schema;
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
        $etiquetas = Ordem::orderBy("id", "DESC")->first();
        if($etiquetas){
            $etiquetas = Ordem::orderBy("id", "DESC")->first();
        }else{
            $etiquetas = ['id' => 0];
        }
        return Inertia::render('Etiquetas/index', ["etiquetas" => $etiquetas]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function printer($inicial, $final)
    {
        // $etiquetas = $request->all();
        // dd($inicial, $final);
        $empresa = Empresa::first();
        for ($i = $inicial; $i <= $final; $i++) {
            $data[] = [
                'ordem' => $i,
                'telefone' => $empresa->telefone,
                'empresa' => $empresa->empresa,
            ];
        }
        return Inertia::render('Etiquetas/printer', ['etiquetas' => $data]);
    }
}
