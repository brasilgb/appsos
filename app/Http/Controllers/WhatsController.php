<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Whats;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Redirect;

class WhatsController extends Controller
{

    use HttpResponses;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (Whats::get()->isEmpty()) {
            Whats::create();
        }
        $query = Whats::orderBy("id", "DESC")->first();
        $whats = Whats::where("id", $query->id)->first();

        return Inertia::render('Whats/index', ["whats" => $whats]);
    
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Whats $whats)
    {
        $data = $request->all();
        $whats->update($data);
        Session::flash('success', 'Dados do Whatsapp editado com sucesso!');
        return Redirect::route('whatsapp.index');
    }
}
