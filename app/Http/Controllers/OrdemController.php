<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\OrdemResource;
use App\Models\Cliente;
use App\Models\Ordem;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class OrdemController extends Controller
{
    use HttpResponses;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->get('q');

        $query = Ordem::with('cliente')->orderBy('id', 'DESC');

        if ($search) {
            $query->where('id', 'like', '%' . $search . '%');
        }

        $ordens = $query->paginate(12);
       
        return Inertia::render('Ordens/index', ["ordens" => $ordens]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $clientes = Cliente::get();
        $ordem = Ordem::exists() ? Ordem::orderBy('id', 'desc')->first()->id : [];
        
        return Inertia::render('Ordens/add', ['clientes' => $clientes, 'ordem' => $ordem]);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    { 
        $data = $request->all();

        $messages = [
            'required' => 'O campo :attribute deve ser preenchido'
        ];
        $request->validate([
                'cliente_id' => 'required',
                'equipamento' => 'required',
                'defeito' => 'required',
            ],
            $messages,
            [
                'equipamento' => 'equipamento',
                'senha' => 'senha',
            ]
        );
            Ordem::create($data);
            Session::flash('success', 'Ordem de serviço cadastrada com sucesso!');
            return redirect()->route('ordens.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Ordem $ordem)
    {
        $ordens = Ordem::with('cliente')->where('id', $ordem->id)->first();
        return Inertia::render('Ordens/edit', ['ordens' => $ordens]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ordem $ordem)
    {
        return Redirect::route('ordens.show', ['ordem' => $ordem->id]);
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Ordem $ordem)
    {
        $data = $request->all();

        $messages = [
            'required' => 'O campo :attribute deve ser preenchido'
        ];
        $request->validate([
            'equipamento' => 'required',
            'defeito' => 'required',
            'detalhes' => 'required',
            'tecnico' => 'required',
            ],
            $messages,
            [
                'equipamento' => 'equipamento',
                'senha' => 'senha',
            ]
        );
            $ordem->update($data);
            Session::flash('success', 'Ordem de serviço editada com sucesso!');
            return redirect()->route('ordens.show', ['ordem' => $ordem->id]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ordem $ordem)
    {
        $deleted = $ordem->delete();

        if ($deleted) {
            return $this->response('Ordem deletada com sucesso!', 200);
        }
        return $this->response('Ordem não deletada!', 400);
    }

    // public function printTermo($id)
    // {

    //     $storePath = public_path('storage/ordens/pdf');
    //     if (!file_exists($storePath)) {
    //         mkdir($storePath, 0755, true);
    //     };
    //     $empresas = Empresa::get();
    //     $ordens = Ordem::where('id', $id)->with('cliente')->get();
    //     $data = [
    //         'title' => 'Welcome to ItSolutionStuff.com',
    //         'date' => date('m/d/Y'),
    //         'ordens' => $ordens,
    //         'empresas' => $empresas,
    //     ];

    //     // return view('termo', $data);
    //     $pdf = Pdf::loadView('termo', $data);
    //     $pdf->setPaper('A4', 'landscape');
    //     $pdf->setOption([
    //         'isRemoteEnabled' => true,
    //         'dpi' => 150,
    //         'isHtml5ParserEnabled' => true,
    //         'defaultFont' => 'sans-serif'
    //     ]);
    //     $fileName = 'termo.pdf';
    //     $pdf->save($storePath . DIRECTORY_SEPARATOR . $fileName);
    //     return "storage/ordens/pdf/$fileName";
    // }
}
