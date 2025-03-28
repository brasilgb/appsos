<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use App\Models\Geral;
use App\Models\Ordem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class GeralController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Geral $geral)
    {
        if (Geral::get()->isEmpty()) {
            Geral::create();
        }
        $query = Geral::orderBy("id", "DESC")->first();
        $geral = Geral::where("id", $query->id)->first();
        $clientes = Cliente::get(["id", "nome", "cpf", "email"]);
        $ordens = Ordem::get();
        dd($ordens);
        return Inertia::render('Gerais/index', ["geral" => $geral, 'clientes' => $clientes, 'ordens' => $ordens]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Geral $geral)
    {
        $data = $request->all();
        $storePath = public_path('storage/images');
        if ($request->hasfile('bgimage')) {
            $fileName = time() . '.' . $request->bgimage->extension();

            $request->bgimage->move($storePath, $fileName);
        }
        $data['bgimage'] = $request->hasfile('bgimage') ? $fileName : $geral->bgimage;
        if (file_exists($storePath . DIRECTORY_SEPARATOR . $geral->bgimage && $geral->bgimage)) {
            unlink($storePath . DIRECTORY_SEPARATOR . $geral->bgimage);
        }
        $geral->update($data);
        Session::flash('success', 'Dados das configurações gerais editados com sucesso!');
        return Redirect::route('gerais.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Geral $geral)
    {

        $storePath = public_path('storage/images');
        if (file_exists($storePath . DIRECTORY_SEPARATOR . $geral->bgimage)) {
            unlink($storePath . DIRECTORY_SEPARATOR . $geral->bgimage);
        }
        $geral->delete();
        Session::flash('success', 'Imagem deletada com sucesso');
        return redirect()->route('gerais.index');
    }
}
