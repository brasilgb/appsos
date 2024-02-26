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
                <div className="flex items-center justify-start w-20">
                    <img
                        src={`/storage/images/${empresa.logo ? empresa.logo : "logo.png"}`}
                        alt=""
                    />
                </div>
            </div>
            <div className="flex items-center justify-between p-2 bg-gray-200 text-xs">
                <div>
                    <span className="font-semibold mr-2">O.S. N°:</span>
                    <span>{("00000000" + ordem.id).slice(-8)}</span>
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
                    <h1 className="text-sm border-b w-full border-gray-100 uppercase font-semibold text-center">
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
                    <h1 className="text-sm border-b w-full border-gray-100 uppercase font-semibold text-center">
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
                    <h1 className="text-sm border-b w-full border-gray-100 uppercase font-semibold text-center">
                        Defeito relatado
                    </h1>
                    <h1 className="text-sm border-b w-full border-gray-100 uppercase font-semibold text-center">
                        Pré-orçamento
                    </h1>
                </div>

                <div className="flex items-start justify-start w-full">
                    <div className="flex-1">
                        <h1>{ordem.defeito}</h1>
                    </div>
                    <div className="flex-1">
                        <h1>{ordem.preorcamento}</h1>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-start justify-start pb-2 border border-gray-200 mt-4 p-2 text-xs">
                <div className="mb-2 flex items-center justify-center w-full">
                    <h1 className="text-sm border-b w-full border-gray-100 uppercase font-semibold text-center">
                        Garantias e/ou observações
                    </h1>
                </div>
                <div className="flex items-start justify-start w-full">
                    <div className="flex-1">
                        <div className="mb-2">
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: `${printer ? printer : ""}`,
                                }}
                            />
                        </div>
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
                    <div className={`text-sm ${ordem.status == 3 ? '' : 'border-b'} mb-2 w-full`}>
                        {ordem.status == 3
                            ? ordem.descorcamento
                            : ordem.detalhes}
                    </div>
                    {ordem.status != 3 && (
                        <div className="flex items-start justify-start w-full">
                            <div className="flex-1">
                                <div>Valor dos serviços:</div>
                                <div>Valor de peças/produtos:</div>
                                <div className="font-semibold">
                                    Valor total:
                                </div>
                            </div>
                            <div className="flex-1">
                                <div>
                                    {(ordem.valservico
                                        ? Number(ordem.valservico)
                                        : 0
                                    ).toLocaleString("pt-br", {
                                        style: "currency",
                                        currency: "BRL",
                                    })}
                                </div>
                                <div>
                                    {(ordem.valpecas
                                        ? Number(ordem.valpecas)
                                        : 0
                                    ).toLocaleString("pt-br", {
                                        style: "currency",
                                        currency: "BRL",
                                    })}
                                </div>
                                <div className="font-semibold">
                                    {(
                                        Number(ordem.valservico) +
                                        Number(ordem.valpecas)
                                    ).toLocaleString("pt-br", {
                                        style: "currency",
                                        currency: "BRL",
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}

            <div className="flex items-center justify-around mt-16">
                <div className="w-80 border-t border-gray-400 text-center text-sm">
                    Assinatura Cliente
                </div>
                {tipo !== "1" ? (
                    <div className="w-80 border-t border-gray-400 text-center text-sm">
                        Assinatura Responsável Técnico
                    </div>
                ) : (
                    <div className="w-80"></div>
                )}
            </div>

            <div className="mt-8 ml-8">
                <p className="text-sm">
                    {empresa.cidade}, {moment().locale("pt").format("LL")}.
                </p>
            </div>
        </PrinterLayout>
    );
};

export default Printer;
