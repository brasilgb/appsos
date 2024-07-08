<?php

namespace App\Http\Middleware;

use App\Models\Empresa;
use App\Models\Mensagem;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'flash' => [
                'message' => fn () => $request->session()->get('success')
            ],
            'auth' => [
                'user' => $request->user(),
            ],
            'confemp' => fn () => [
                DB::table('empresa')
                    ->select('logo', 'empresa', 'cnpj')
                    ->first()
            ],
            'confger' => fn () => [
                DB::table('gerais')
                    ->select('bgimage', 'bgcolor')
                    ->first()
            ],
            'userexist' => fn () => [
                DB::table('users')->exists()
            ],
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
                'query'=>$request->query()
            ],
            'messages' => fn () => [
                auth()->check() ? DB::table('mensagens')->where('destinatario', Auth::user()->id)->where('status', 0)->get() : []
            ]
        ];
    }
} 
// 'nummen' => count(Mensagem::where('destinatario', Auth::user()->id)->where('status', 0)->get()),