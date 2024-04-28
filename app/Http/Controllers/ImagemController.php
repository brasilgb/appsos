<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\ImagemResource;
use App\Models\Imagem;
use App\Models\Ordem;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;

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

    public function upload(Request $request)
    {
        $image = base64_decode($request->imagem);
        //  dd($image);   
        // $image = $request->file('imagem');
        $storePath = public_path('storage/ordens/' . $request->ordem_id);
        if (!file_exists($storePath)) {
            mkdir($storePath, 0777, true);
        };
        $filename = time() . rand(1, 50) . '.' . 'png';
        File::put('storage/ordens/' . $request->ordem_id . '/' . $filename,  $image);
        Imagem::create([
            'ordem_id' => $request->ordem_id,
            'imagem' => $filename
        ]);
        return [
            "success" => true,
            "message" => "Imagem salva com sucesso"
        ];
    }

    public function getImages(Request $request)
    {
        $images = Imagem::where("ordem_id", $request->order)->get();
        return [
            "success" => true,
            "result" => $images
        ];
    }
}
