<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\ImagemResource;
use App\Models\Imagem;
use App\Models\Ordem;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;

class ImagemController extends Controller
{

    use HttpResponses;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = $request->get('or');

        $imagens = Imagem::where("ordem_id", $query)->get();

        return Inertia::render('Images/index', ['imagens' => $imagens, 'ordem' => $query]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $messages = [
            'required' => 'As :attribute devem ser selecionadas',
        ];
        $request->validate(
            [
                'imagem' => 'required',
            ],
            $messages,
            [
                'imagem' => 'imagens',
            ]
        );
        $storePath = public_path('storage/ordens/' . $request->ordem_id);
        if (!file_exists($storePath)) {
            mkdir($storePath, 0777, true);
        };
        if ($request->imagem) {
            foreach ($request->imagem as $file) {
                $filename = time() . rand(1, 50) . '.' . $file->extension();
                $file->move($storePath, $filename);

                Imagem::create([
                    'ordem_id' => $request->ordem_id,
                    'imagem' => $filename
                ]);
            }
        }
        return redirect()->route('imagens.index', ['or' => $request->ordem_id]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Imagem $imagem)
    {

        $storePath = public_path('storage/ordens/' . $imagem->ordem_id);
        if (file_exists($storePath . DIRECTORY_SEPARATOR . $imagem->imagem)) {
            unlink($storePath . DIRECTORY_SEPARATOR . $imagem->imagem);
        }
        $imagem->delete();
        Session::flash('success', 'Agendamento deletado com sucesso');
        return redirect()->route('imagens.index', ['or' => $imagem->ordem_id]);
    }
}