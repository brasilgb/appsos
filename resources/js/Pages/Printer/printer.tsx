import { maskCpfCnpj } from "@/Utils/mask";
import moment from "moment";
import React from "react";

interface PrintProps {
    empresa: any;
    ordem: any;
    printer: any;
    tipo: any;
}

const PrinterData = ({ empresa, ordem, printer, tipo }: PrintProps) => {
    return (
        <div className="text-[10px] text-gray-600">
            <div className="flex items-start justify-start py-1 px-2 border-b border-gray-200 font-semibold">
                <div className="flex items-center justify-start w-8 mr-4">
                    <img
                        src={`/storage/images/${empresa.logo ? empresa.logo : "logo.png"}`}
                        alt=""
                    />
                </div>
                <div className="flex-1 flex-col items-start justify-start">
                    <h1>{empresa.razao}</h1>
                    <h1>CNPJ: {empresa.cnpj}</h1>
                </div>
                <div className="flex-1 flex-col items-start justify-start">
                    <h1>
                        {empresa.endereco} - {empresa.bairro}
                    </h1>
                    <h1>
                        {empresa.cidade} - {empresa.telefone}
                    </h1>
                </div>
            </div>
            <div className="flex items-center justify-between px-2 py-0.5 bg-gray-200">
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

            <div className="flex flex-col items-start justify-start pb-1 border border-gray-200 px-2 py-0.5">
                <div className="mb-1 flex items-center justify-center w-full">
                    <h1 className="border-b w-full border-gray-100 uppercase font-semibold text-center">
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
                            {ordem.cliente.bairro}
                            {ordem.cliente.cidade}
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
                            <span className="font-semibold mr-1">Contato:</span>
                            {ordem.cliente.telefone}
                            {ordem.cliente.email}
                        </h1>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-start justify-start pb-2 border border-gray-200 mt-2 p-2">
                <div className="mb-1 flex items-center justify-center w-full">
                    <h1 className="border-b w-full border-gray-100 uppercase font-semibold text-center">
                        Informações sobre o produto
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
                <div className="flex items-start justify-start w-full">
                    <div className="flex-1">
                        <h1>
                            <span className="font-semibold mr-1">
                                Defeito relatado:
                            </span>
                            {ordem.defeito}
                        </h1>
                    </div>
                    <div className="flex-1">
                        <h1>
                            <span className="font-semibold mr-1">
                                Pré-orçamento:
                            </span>
                            {ordem.preorcamento}
                        </h1>
                    </div>
                </div>
                <div className="flex items-start justify-start w-full">
                    <h1>
                        <span className="font-semibold mr-1">
                            Estado do equipamento:
                        </span>
                        {ordem.estado}
                    </h1>
                </div>
            </div>
            <div className="flex flex-col items-start justify-start pb-2 border border-gray-200 mt-4 p-2">
                <div className="mb-1 flex items-center justify-center w-full">
                    <h1 className="border-b w-full border-gray-100 uppercase font-semibold text-center">
                        Garantias e/ou observações
                    </h1>
                </div>
                <div className="flex items-start justify-start w-full">
                    <div className="flex-1">
                        <div className="mb-1">
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
                <div className="flex flex-col items-start justify-start border border-gray-200 mt-4 py-0.5 px-0.5">
                    <div className="mb-1 flex items-center justify-center w-full">
                        <h1 className="font-semibold">
                            {ordem.status == 3
                                ? "Orçamento"
                                : "Serviços prestados"}
                        </h1>
                    </div>
                    <div
                        className={`${ordem.status == 3 ? "" : "border-b"} w-full`}
                    >
                        {ordem.status == 3
                            ? ordem.descorcamento
                            : ordem.detalhes}
                    </div>
                    {ordem.status != 3 && (
                        <div className="flex items-start justify-between w-full bg-gray-200 px-2">
                            <div>
                                <span className="mr-2">
                                    Valor dos serviços:
                                </span>
                                <span className="font-semibold">
                                    {(ordem.valservico
                                        ? Number(ordem.valservico)
                                        : 0
                                    ).toLocaleString("pt-br", {
                                        style: "currency",
                                        currency: "BRL",
                                    })}
                                </span>
                            </div>

                            <div>
                                <span className="mr-2">
                                    Valor de peças/produtos:
                                </span>
                                <span className="font-semibold">
                                    {(ordem.valpecas
                                        ? Number(ordem.valpecas)
                                        : 0
                                    ).toLocaleString("pt-br", {
                                        style: "currency",
                                        currency: "BRL",
                                    })}
                                </span>
                            </div>
                            <div>
                                <span className="mr-2">Valor total:</span>
                                <span className="font-semibold">
                                    {(
                                        Number(ordem.valservico) +
                                        Number(ordem.valpecas)
                                    ).toLocaleString("pt-br", {
                                        style: "currency",
                                        currency: "BRL",
                                    })}
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            )}

            <div className="flex items-center justify-around mt-8">
                <div className="w-80 border-t border-gray-400 text-center">
                    Assinatura Cliente
                </div>
                {tipo !== "1" ? (
                    <div className="w-80 border-t border-gray-400 text-center">
                        Assinatura Responsável Técnico
                    </div>
                ) : (
                    <div className="w-80"></div>
                )}
            </div>

            <div className="mt-4 mb-2 ml-8">
                <p className="">
                    {empresa.cidade}, {moment().locale("pt").format("LL")}.
                </p>
            </div>
        </div>
    );
};

export default PrinterData;
