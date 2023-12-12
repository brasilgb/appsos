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

class PrinterController extends Controller
{

    use HttpResponses;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $id = $request->get('or');
        $ordem = Ordem::where("id", $id)->first();
        $empresa = Empresa::first();
        return Inertia::render('Printer/index', ["empresa" => $empresa, "ordem" => $ordem]);
    }

}
