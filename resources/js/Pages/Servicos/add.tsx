import { BackButton, SaveButton } from "@/Components/Buttons";
import {
    Card,
    CardBody,
    CardContainer,
    CardFooter,
    CardHeader,
    CardHeaderContent,
} from "@/Components/Card";
import { BreadCrumbTop, HeaderContent, TitleTop } from "@/Components/PageTop";
import AuthLayout from "@/Layouts/AuthLayout";
import {
    movimentosProdutos,
    tiposProdutos,
    unidadesProdutos,
} from "@/Utils/dataSelect";
import { maskMoney, maskMoneyDot } from "@/Utils/mask";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import React from "react";
import { FaBasketShopping } from "react-icons/fa6";

const AddServico = ({ marcas, modelos }: any) => {
    const { errors } = usePage().props;
    const { data, setData, post, progress, processing } = useForm({
        servico: "",
        marca: "",
        modelo: "",
        descricao: "",
        valor: ""
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        post(route("servicos.store"));
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
                            { url: null, label: "Adicionar produto" },
                        ]}
                    />
                </HeaderContent>
                <CardContainer>
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
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="descricao"
                                        >
                                            Serviço
                                        </label>
                                        <input
                                            id="descricao"
                                            type="text"
                                            value={data.servico}
                                            onChange={(e) =>
                                                setData(
                                                    "servico",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                        />
                                        {errors.servico && (
                                            <div className="text-sm text-red-500">
                                                {errors.servico}
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="marca"
                                        >
                                            Marca de Produto
                                        </label>
                                        <select
                                            id="marca"
                                            value={data.marca}
                                            onChange={(e) =>
                                                setData("marca", e.target.value)
                                            }
                                            className="input-form"
                                        >
                                            <option value="">
                                                Selecione a marca
                                            </option>
                                            {marcas.map((marca: any) => (
                                                <option
                                                    key={marca.id}
                                                    value={marca.id}
                                                >
                                                    {marca.marca}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.marca && (
                                            <div className="text-sm text-red-500">
                                                {errors.marca}
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="modelo"
                                        >
                                            Modelo Produto
                                        </label>
                                        <select
                                            id="modelo"
                                            value={data.modelo}
                                            onChange={(e) =>
                                                setData("modelo", e.target.value)
                                            }
                                            className="input-form"
                                        >
                                            <option value="">
                                                Selecione o modelo
                                            </option>
                                            {modelos.map((modelo: any) => (
                                                <option
                                                    key={modelo.id}
                                                    id={modelo.id}
                                                >
                                                    {modelo.modelo}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.modelo && (
                                            <div className="text-sm text-red-500">
                                                {errors.modelo}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="descricao"
                                        >
                                            Descrição
                                        </label>
                                        <textarea
                                            id="descricao"
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
                                            htmlFor="valor"
                                        >
                                            Valor do Serviço
                                        </label>
                                        <input
                                            id="valor"
                                            type="text"
                                            value={data.valor}
                                            onChange={(e) =>
                                                setData(
                                                    "valor",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                        />
                                        {errors.valor && (
                                            <div className="text-sm text-red-500">
                                                {errors.valor}
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
export default AddServico;
