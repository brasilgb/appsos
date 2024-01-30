import PrinterLayout from "@/Layouts/PrinterLayout";
import "moment/dist/locale/pt-br";
import moment from "moment";

import React from "react";
import { maskCpfCnpj } from "@/Utils/mask";

const Printer = ({ empresa, ordem, printer, tipo }: any) => {
    return (
        <PrinterLayout backlink="/ordens">
            <div className="flex items-start justify-start pb-2 border-b border-gray-200 text-xs">
                <div className="flex flex-col items-start justify-start w-full">
                    <h1>{empresa.razao}</h1>
                    <h1>{empresa.cnpj}</h1>
                    <h1>
                        {empresa.endereco} - {empresa.bairro}
                    </h1>
                    <h1>
                        {empresa.cidade} - {empresa.telefone}
                    </h1>
                </div>
                <div className="flex items-center justify-start w-44">
                    <img
                        src={`/storage/images/${empresa.logo ? empresa.logo : "logo.png"}`}
                        alt=""
                    />
                </div>
            </div>
            <div className="flex items-center justify-between p-2 bg-gray-200 text-sm">
                <div>
                    <span className="font-semibold mr-2">O.S. N°:</span>
                    <span>{("000000" + ordem.id).slice(-6)}</span>
                </div>
                <div>
                    <span className="font-semibold mr-2">
                        Data de abertura:
                    </span>
                    <span>{moment(ordem.created_at).format("DD/MM/YYYY")}</span>
                </div>
            </div>

            <div className="flex flex-col items-start justify-start pb-2 border border-gray-200 mt-2 p-2 text-xs">
                <div className="mb-2 flex items-center justify-center w-full">
                    <h1 className="text-base font-semibold text-center">
                        Dados do cliente
                    </h1>
                </div>

                <div className="flex items-start justify-start w-full">
                    <div className="flex-1">
                        <h1>
                            <span className="font-semibold mr-1">Nome:</span>
                            {ordem.cliente.nome}
                        </h1>
                        <h1>
                            <span className="font-semibold mr-1">
                                Endereço:
                            </span>
                            {ordem.cliente.endereco}
                        </h1>
                        <h1>
                            <span className="font-semibold mr-1">Cidade:</span>
                            {ordem.cliente.cidade}
                        </h1>
                        <h1>
                            <span className="font-semibold mr-1">
                                Telefone:
                            </span>
                            {ordem.cliente.telefone}
                        </h1>
                    </div>
                    <div className="flex-1">
                        <h1>
                            <span className="font-semibold mr-1">
                                CPF/CNPJ:
                            </span>
                            {maskCpfCnpj(ordem.cliente.cpf)}
                        </h1>
                        <h1>
                            <span className="font-semibold mr-1">Bairro:</span>
                            {ordem.cliente.bairro}
                        </h1>
                        <h1>
                            <span className="font-semibold mr-1">Cep:</span>
                            {ordem.cliente.cep}
                        </h1>
                        <h1>
                            <span className="font-semibold mr-1">E-mail:</span>
                            {ordem.cliente.email}
                        </h1>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-start justify-start pb-2 border border-gray-200 mt-2 p-2 text-xs">
                <div className="mb-2 flex items-center justify-center w-full">
                    <h1 className="text-base font-semibold text-center">
                        Informações do produto
                    </h1>
                </div>

                <div className="flex items-start justify-start w-full">
                    <div className="flex-1">
                        <h1>
                            <span className="font-semibold mr-1">
                                Equipamento:
                            </span>
                            {ordem.equipamento}
                        </h1>
                    </div>
                    <div className="flex-1">
                        <h1>
                            <span className="font-semibold mr-1">Modelo:</span>
                            {ordem.modelo}
                        </h1>
                    </div>
                </div>
                <div>
                    <h1>
                        <span className="font-semibold mr-1">
                            Estado do equipamento:
                        </span>
                        {ordem.estado}
                    </h1>
                </div>
            </div>

            <div className="flex flex-col items-start justify-start pb-2 border border-gray-200 mt-4 p-2 text-xs">
                <div className="mb-2 flex items-center justify-center w-full">
                    <h1 className="text-base font-semibold text-center">
                        Defeito relatado
                    </h1>
                </div>

                <div className="flex items-start justify-start w-full">
                    <div className="flex-1">
                        <h1>{ordem.defeito}</h1>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-start justify-start pb-2 border border-gray-200 mt-4 p-2 text-xs">
                <div className="mb-2 flex items-center justify-center w-full">
                    <h1 className="text-base font-semibold">
                        Garantias e/ou observações
                    </h1>
                </div>
                <div className="flex items-start justify-start w-full">
                    <div className="flex-1">
                        <div>{printer}</div>
                        <div>{ordem.obs}</div>
                    </div>
                </div>
            </div>

            {tipo !== "1" && (
                <div className="flex flex-col items-start justify-start pb-2 border border-gray-200 mt-4 p-2 text-sm">
                    <div className="mb-2 flex items-center justify-center w-full">
                        <h1 className="text-base font-semibold">
                            {ordem.status == 3
                                ? "Orçamento"
                                : "Serviços prestados"}
                        </h1>
                    </div>
                    <div className="text-sm border-b mb-2 w-full">
                        {ordem.detalhes}
                    </div>
                    <div className="flex items-start justify-start w-full">
                        <div className="flex-1">
                            <div>Valor dos serviços:</div>
                            <div>Valor de peças/produtos:</div>
                            <div className="font-semibold">Valor total:</div>
                        </div>
                        <div className="flex-1">
                            <div>
                                {ordem.valservico ? ordem.valservico : "0"}
                            </div>
                            <div>{ordem.valpecas ? ordem.valpecas : "0"}</div>
                            <div className="font-semibold">
                                {ordem.custo ? ordem.custo : "0"}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex items-center justify-around mt-16">
                <div className="w-80 border-t border-gray-500 text-center text-sm">
                    Assinatura Cliente
                </div>
                <div className="w-80 border-t border-gray-500 text-center text-sm">
                    Assinatura Responsável Técnico
                </div>
            </div>

            <div className="mt-8">
                <p className="text-sm">
                    {empresa.cidade}, {moment().locale("pt").format("LL")}.
                </p>
            </div>
        </PrinterLayout>
    );
};

export default Printer;
