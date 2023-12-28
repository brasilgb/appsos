<?php

namespace App\Http\Controllers;

use App\Models\Mensagem;
use Illuminate\Http\Request;

class WAMessagesController extends Controller
{
    public function index(Request $request)
    {
        //Token facebook
        $token = 'EAAEwRvIBBs4BO475By3Nk8r9uHe7BPuBaNlYOrZA2O3MZA6jKm7iLzJLq76I1LmjBmwY3N5yWd4uaMzQaU1jKqtCJVhc9OxTLQQgYx9IEOxvGuTzTV3EEvJqpACZCZByU5h2qdY7ZBpUzZBYDPGB5DF8kZAu96476uTxXh6agh1vPfaTzJGxunIOK6rQFyYmbNR7Tjqh1i7vTLVSGYxRdgy';
        //Telefone cliente
        $telefone = '5551995179173';
        //URL api de mensagem
        $url = 'https://graph.facebook.com/v17.0/207525809099686/messages';

        //Configurações de mensagem
        $mensagem = ''
            . '{'
            . '"messaging_product": "whatsapp",'
            . '"to": "' . $telefone . '",'
            . '"type": "template",'
            . '"template":'
            . '{'
            . '      "name": "hello_world",'
            . '      "language": { "code": "en_US" }'
            . '}'
            . '}';

        // Declarar cabeçalho
        $header = array("Authorization: Bearer " . $token, "Content-Type: application/json");
        //Iniciar CURL
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $mensagem);
        curl_setopt($curl, CURLOPT_HTTPHEADER, $header);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        //Resposta de envio
        $response = json_decode(curl_exec($curl), true);
        //Imprime a resposta
        print_r($response);
        //Código da resposta
        $status_code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        //Fecha CURL
        curl_close($curl);
    }
}
