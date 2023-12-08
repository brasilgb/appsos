<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\ImpressaoResource;
use App\Models\Impressao;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;

class ImpressaoController extends Controller
{

    use HttpResponses;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (Impressao::get()->isEmpty()) {
            Impressao::create();
        }
        $query = Impressao::orderBy("id", "DESC")->first();
        $impressao = Impressao::where("id", $query->id)->first();
        return Inertia::render('Impressoes/index', ["impressao" => $impressao]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Impressao $impressao)
    {
        $data = $request->all();
        $impressao->update($data);
        Session::flash('success', 'Dados de impressão editados com sucesso!');
        return Redirect::route('impressoes.index');
    }
}
