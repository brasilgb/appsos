<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Empresa;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Redirect;

class EmpresaController extends Controller
{

    use HttpResponses;
    /**
     * Display a listing of the resource.
     */
    public function index(Empresa $empresa)
    {
        if (Empresa::get()->isEmpty()) {
            Empresa::create();
        }
        $query = Empresa::orderBy("id", "DESC")->first();
        $empresa = Empresa::where("id", $query->id)->first();

        return Inertia::render('Empresa/index', ["empresa" => $empresa]);
    }

    /**
     * Display the specified resource.
     */
    public function update(Request $request, Empresa $empresa)
    {
        $data = $request->all();
        $storePath = public_path('storage/images');
        if ($request->hasfile('logo')) {
            $fileName = time() . '.' . $request->logo->extension();
            $request->logo->move($storePath, $fileName);
            if (file_exists($storePath . DIRECTORY_SEPARATOR . $empresa->logo && $empresa->logo)) {
                unlink($storePath . DIRECTORY_SEPARATOR . $empresa->logo);
            }
        }
        $data['logo'] = $request->hasfile('logo') ? $fileName : $empresa->logo;
        $empresa->update($data);
        Session::flash('success', 'Dados da empresa editado com sucesso!');
        return Redirect::route('empresa.index');
    }

    public function getEmpresaInfo()
    {
        $empresa = Empresa::first();
        return response()->json([
            "success" => true,
            "data" => $empresa
        ]);
    }
}
