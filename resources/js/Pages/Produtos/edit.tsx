import { BackButton, SaveButton } from "@/Components/Buttons";
import {
    Card,
    CardBody,
    CardContainer,
    CardFooter,
    CardHeader,
    CardHeaderContent,
} from "@/Components/Card";
import FlashMessage from "@/Components/FlashMessage";
import { BreadCrumbTop, HeaderContent, TitleTop } from "@/Components/PageTop";
import AuthLayout from "@/Layouts/AuthLayout";
import {
    movimentosProdutos,
    tiposProdutos,
    unidadesProdutos,
} from "@/Utils/dataSelect";
import { maskCep, maskCpfCnpj, maskMoney, maskMoneyDot, maskPhone, unMask } from "@/Utils/mask";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { InertiaFormProps } from "@inertiajs/react/types/useForm";
import React, { useCallback, useEffect } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";

interface ClientesProps {
    codbarra: string;
    descricao: string;
    partnumber: string;
    valcompra: string;
    valvenda: string;
    quantidade: string;
    unidade: string;
    estmaximo: string;
    estminimo: string;
    tipo: string;
}

const EditProduto = ({ produtos }: any) => {
    const { flash, errors } = usePage().props;

    const {
        data,
        setData,
        patch,
        progress,
        processing,
    }: InertiaFormProps<ClientesProps> = useForm({
        codbarra: produtos.codbarra,
        descricao: produtos.descricao,
        partnumber: produtos.partnumber,
        valcompra: produtos.valcompra,
        valvenda: produtos.valvenda,
        quantidade: produtos.quantidade,
        unidade: produtos.unidade,
        estmaximo: produtos.estmaximo,
        estminimo: produtos.estminimo,
        tipo: produtos.tipo,
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        router.post(`/produtos/${produtos.id}`, {
            _method: "patch",
            codbarra: data.codbarra,
            descricao: data.descricao,
            partnumber: data.partnumber,
            valcompra: maskMoneyDot(data.valcompra.toString()),
            valvenda: maskMoneyDot(data.valvenda.toString()),
            quantidade: data.quantidade,
            unidade: data.unidade,
            estmaximo: data.estmaximo,
            estminimo: data.estminimo,
            tipo: data.tipo,
        });
    }

    return (
        <AuthLayout>
            <Head title="Produtos" />
            <Card>
                <HeaderContent>
                    <TitleTop>
                        <FaBasketShopping size={30} />
                        <span className="ml-2">Produtos</span>
                    </TitleTop>
                    <BreadCrumbTop
                        links={[
                            { url: "/produtos", label: "Produtos" },
                            { url: null, label: "Editar produto" },
                        ]}
                    />
                </HeaderContent>
                <CardContainer>
                    <FlashMessage message={flash} />
                    <CardHeader>
                        <CardHeaderContent>
                            <BackButton url={"/produtos"} label={"Voltar"} />
                        </CardHeaderContent>
                        <CardHeaderContent>
                            <></>
                        </CardHeaderContent>
                    </CardHeader>
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <CardBody className=" border-y border-gray-100">
                            <div className="px-3 my-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="descricao"
                                        >
                                            Descrição
                                        </label>
                                        <input
                                            id="descricao"
                                            type="text"
                                            value={data.descricao}
                                            onChange={(e) =>
                                                setData(
                                                    "descricao",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                        />
                                        {errors.descricao && (
                                            <div className="text-sm text-red-500">
                                                {errors.descricao}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="partnumber"
                                        >
                                            Part Number
                                        </label>
                                        <input
                                            id="partnumber"
                                            type="text"
                                            value={data.partnumber}
                                            onChange={(e) =>
                                                setData(
                                                    "partnumber",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-4 mt-6">
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="valcompra"
                                        >
                                            Valor da compra
                                        </label>
                                        <input
                                            id="valcompra"
                                            type="text"
                                            value={maskMoney(data.valcompra.toString())}
                                            onChange={(e) =>
                                                setData(
                                                    "valcompra",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                        />
                                        {errors.valcompra && (
                                            <div className="text-sm text-red-500">
                                                {errors.valcompra}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="valvenda"
                                        >
                                            Valor venda
                                        </label>
                                        <input
                                            id="valvenda"
                                            type="text"
                                            value={maskMoney(data.valvenda.toString())}
                                            onChange={(e) =>
                                                setData(
                                                    "valvenda",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                        />
                                        {errors.valvenda && (
                                            <div className="text-sm text-red-500">
                                                {errors.valvenda}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="valvenda"
                                        >
                                            Quantidade
                                        </label>
                                        <input
                                            id="quantidade"
                                            type="text"
                                            value={maskMoney(data.quantidade.toString())}
                                            onChange={(e) =>
                                                setData(
                                                    "quantidade",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                        />
                                        {errors.quantidade && (
                                            <div className="text-sm text-red-500">
                                                {errors.quantidade}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-4 gap-4 mt-6">
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="unidade"
                                        >
                                            Unidade de medida
                                        </label>
                                        <select
                                            id="unidade"
                                            value={data.unidade}
                                            onChange={(e) =>
                                                setData(
                                                    "unidade",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                        >
                                            <option value="">
                                                Selecione a medida
                                            </option>
                                            {unidadesProdutos.map(
                                                (unidade: any) => (
                                                    <option
                                                        key={unidade.value}
                                                        value={unidade.value}
                                                    >
                                                        {unidade.label}
                                                    </option>
                                                ),
                                            )}
                                        </select>
                                        {errors.unidade && (
                                            <div className="text-sm text-red-500">
                                                {errors.unidade}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="estmaximo"
                                        >
                                            Estoque máximo
                                        </label>
                                        <input
                                            id="estmaximo"
                                            type="text"
                                            value={data.estmaximo}
                                            onChange={(e) =>
                                                setData(
                                                    "estmaximo",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                        />
                                        {errors.estmaximo && (
                                            <div className="text-sm text-red-500">
                                                {errors.estmaximo}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="estminimo"
                                        >
                                            Estoque mínimo
                                        </label>
                                        <input
                                            id="estminimo"
                                            type="text"
                                            value={data.estminimo}
                                            onChange={(e) =>
                                                setData(
                                                    "estminimo",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                            maxLength={15}
                                        />
                                        {errors.estminimo && (
                                            <div className="text-sm text-red-500">
                                                {errors.estminimo}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="tipo"
                                        >
                                            Tipo do produto
                                        </label>
                                        <select
                                            id="tipo"
                                            value={data.tipo}
                                            onChange={(e) =>
                                                setData("tipo", e.target.value)
                                            }
                                            className="input-form"
                                        >
                                            <option value="">
                                                Selecione o tipo
                                            </option>
                                            {tiposProdutos.map((tipo: any) => (
                                                <option
                                                    key={tipo.value}
                                                    value={tipo.value}
                                                >
                                                    {tipo.label}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.tipo && (
                                            <div className="text-sm text-red-500">
                                                {errors.tipo}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                        <CardFooter>
                            <SaveButton />
                        </CardFooter>
                    </form>
                </CardContainer>
            </Card>
        </AuthLayout>
    );
};
export default EditProduto;
