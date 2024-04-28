<?php

use App\Http\Controllers\ClienteController;
use App\Http\Controllers\ImagemController;
use App\Http\Controllers\OrdemController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/ordercli/{customer}', [OrdemController::class, 'getOrderCli'])->name('ordercli');
Route::get('/clientes', [ClienteController::class, 'getClientes'])->name('clientes');
Route::get('/order/{order}', [OrdemController::class, 'getOrder'])->name('order');
Route::get('/images/{order}', [ImagemController::class, 'getImages'])->name('images');
Route::post('/upload', [ImagemController::class, 'upload'])->name('upload');
Route::post('/loginuser', [UserController::class, 'loginuser'])->name('loginuser');
Route::get('/logoutuser', [UserController::class, 'logoutuser'])->name('logoutuser');
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
