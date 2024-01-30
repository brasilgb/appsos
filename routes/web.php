<?php

use App\Http\Controllers\AgendaController;
use App\Http\Controllers\ClienteController;
use App\Http\Controllers\EmpresaController;
use App\Http\Controllers\EtiquetaController;
use App\Http\Controllers\GeralController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ImagemController;
use App\Http\Controllers\ImpressaoController;
use App\Http\Controllers\MensagemController;
use App\Http\Controllers\OrdemController;
use App\Http\Controllers\PrinterController;
use App\Http\Controllers\ProdutoController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WhatsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/', function () {
    return Inertia::render('Home/index', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware('auth')->group(function () {
    route::get('/', [HomeController::class, 'index']);
    Route::resource('/usuarios', UserController::class)->parameters([
        'usuarios' => 'user'
    ]);
    Route::resource('/clientes', ClienteController::class);
    Route::resource('/ordens', OrdemController::class)->parameters([
        'ordens' => 'ordem'
    ]);
    Route::resource('/imagens', ImagemController::class)->parameters([
        'imagens' => 'imagem'
    ]);
    Route::resource('/produtos', ProdutoController::class);
    Route::resource('/agendas', AgendaController::class);
    Route::resource('/mensagens', MensagemController::class)->parameters([
        'mensagens' => 'mensagem'
    ]);
    Route::resource('/configuracoes/empresa', EmpresaController::class);
    Route::resource('/configuracoes/gerais', GeralController::class)->parameters([
        'gerais' => 'geral'
    ]);
    Route::resource('/configuracoes/impressoes', ImpressaoController::class)->parameters([
        'impressoes' => 'impressao'
    ]);
    Route::resource('/configuracoes/etiquetas', EtiquetaController::class);
    Route::get('/docs/printer', [PrinterController::class, 'index'])->name('docs.index');
    
    Route::resource('/configuracoes/whatsapp', WhatsController::class)->parameters([
        'whatsapp' => 'whats'
    ]);;

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
