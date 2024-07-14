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
import { Head, useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { IoPeopleSharp } from "react-icons/io5";

const AddOrdem = ({ clientes, ordem, gerais }) => {
    const [filterSearch, setFilterSearch] = useState<any>([]);
    const equtipo = gerais?.equtipo ? gerais?.equtipo?.split(";") : [];
    const equestado = gerais?.equestado ? gerais?.equestado?.split(";") : [];

    const { data, setData, post, errors } = useForm({
        id: ordem > 0 ? ordem + 1 : 1,
        cliente_id: "",
        cliente: "",
        equipamento: "",
        modelo: "",
        senha: "",
        defeito: "",
        estado: "",
        acessorios: "",
        preorcamento: "",
        status: false,
        previsao: "",
        obs: "",
    });
    function handleSubmit(e: any) {
        e.preventDefault();
        post(route("ordens.store"));
    }

    const handleSearch = (value: any) => {
        const client = value.toLowerCase();
        const result = clientes.filter((cl: any) => (cl.nome.toLowerCase().includes(client)));
        setFilterSearch(result);
    };
    useEffect(() => {
        const filter = data.cliente;
        if (filter === "") {
            setFilterSearch([]);
        }
    }, [data]);
    const handleChangeCustomer = (id: any, nome: any) => {
        setData((data) => ({ ...data, cliente_id: id }));
        setData((data) => ({ ...data, cliente: nome }));
        setFilterSearch([]);

    };

    return (
        <AuthLayout>
            <Head title="Ordens" />
            <Card>
                <HeaderContent>
                    <TitleTop>
                        <IoPeopleSharp size={30} />
                        <span className="ml-2">Ordens</span>
                    </TitleTop>
                    <BreadCrumbTop
                        links={[
                            { url: "/ordens", label: "Ordens" },
                            { url: null, label: "Adicionar ordem" },
                        ]}
                    />
                </HeaderContent>
                <CardContainer>
                    <CardHeader>
                        <CardHeaderContent>
                            <BackButton url={"/ordens"} label={"Voltar"} />
                        </CardHeaderContent>
                        <CardHeaderContent>
                            <></>
                        </CardHeaderContent>
                    </CardHeader>
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <CardBody className=" border-y border-gray-100">
                            <div className="px-3 my-4">
                                <div className="grid grid-cols-5 gap-4">
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="ordem"
                                        >
                                            Ordem
                                        </label>
                                        <input
                                            id="ordem"
                                            type="text"
                                            value={data.id}
                                            className="input-form"
                                            disabled
                                        />
                                    </div>
                                    <div className="flex flex-col col-span-2 relative">
                                        <label
                                            className="label-form"
                                            htmlFor="cliente"
                                        >
                                            Nome do cliente
                                        </label>
                                        <input
                                            type="text"
                                            value={data.cliente_id}
                                            onChange={(e) =>
                                                setData(
                                                    "cliente_id",
                                                    e.target.value,
                                                )
                                            }
                                            className="hidden"
                                        />
                                        <input
                                            id="cliente"
                                            type="text"
                                            value={data.cliente}
                                            onChange={(e) => {
                                                setData(
                                                    "cliente",
                                                    e.target.value,
                                                )
                                                handleSearch(e.target.value)
                                            }
                                            }
                                            className="input-form"
                                        />
                                        {filterSearch.length > 0 &&
                                            <div className="absolute bg-gray-50 border-2 border-white shadow-md w-full rounded-sm top-16 max-h-52 overflow-y-auto">
                                                <ul className="p-1">
                                                    {filterSearch.map((cliente: any, idx: number) => (
                                                        <li key={idx} className={`flex items-center justify-normal ${idx < (filterSearch.length - 1) ? 'border-b border-gray-200' : ''}`}>
                                                            <div
                                                                className="text-sm text-gray-600 p-1 cursor-pointer inline-block w-full"
                                                                onClick={() => handleChangeCustomer(cliente.id, cliente.nome)}
                                                            >
                                                                {cliente.nome}
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        }
                                        {errors.cliente_id && (
                                            <div className="text-sm text-red-500">
                                                {errors.cliente_id}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col col-span-2">
                                        <label
                                            className="label-form"
                                            htmlFor="equipamento"
                                        >
                                            Tipo de equipamento
                                        </label>
                                        <select
                                            id="equipamento"
                                            value={data.equipamento}
                                            onChange={(e) =>
                                                setData(
                                                    "equipamento",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                        >
                                            <option value="">Selecione o tipo de equipamento</option>
                                            {equtipo.map((tipo: any, idx: number) => (
                                                <option value={tipo}>{tipo}</option>
                                            ))}
                                        </select>
                                        {errors.equipamento && (
                                            <div className="text-red-500">
                                                {errors.equipamento}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-4 gap-4 mt-6">
                                    <div className="flex flex-col col-span-2">
                                        <label
                                            className="label-form"
                                            htmlFor="modelo"
                                        >
                                            Modelo do equipamento
                                        </label>
                                        <input
                                            id="modelo"
                                            type="text"
                                            value={data.modelo}
                                            onChange={(e) =>
                                                setData(
                                                    "modelo",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="senha"
                                        >
                                            Senha do equipamento
                                        </label>
                                        <input
                                            id="senha"
                                            type="text"
                                            value={data.senha}
                                            onChange={(e) =>
                                                setData("senha", e.target.value)
                                            }
                                            className="input-form"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="previsao"
                                        >
                                            Previsão de entrega
                                        </label>
                                        <input
                                            id="previsao"
                                            type="date"
                                            value={data.previsao}
                                            onChange={(e) =>
                                                setData(
                                                    "previsao",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-6">
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="defeito"
                                        >
                                            Defeito relatado/Serviço solicitado
                                        </label>
                                        <textarea
                                            id="defeito"
                                            value={data.defeito}
                                            onChange={(e) =>
                                                setData(
                                                    "defeito",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                        />
                                        {errors.defeito && (
                                            <div className="text-red-500">
                                                {errors.defeito}
                                            </div>
                                        )}
                                    </div>
                                    
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="estado"
                                        >
                                            Estado do equipamento
                                        </label>
                                        <select
                                            id="estado"
                                            value={data.estado}
                                            onChange={(e) =>
                                                setData(
                                                    "estado",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                            >
                                            <option value="">Selecione o estado equipamento</option>
                                            {equestado.map((estado: any, idx: number) => (
                                                <option value={estado}>{estado}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-4 mt-6">
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="acessorios"
                                        >
                                            Acessórios
                                        </label>
                                        <textarea
                                            id="acessorios"
                                            value={data.acessorios}
                                            onChange={(e) =>
                                                setData(
                                                    "acessorios",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="preorcamento"
                                        >
                                            Pré-orçamento
                                        </label>
                                        <textarea
                                            id="preorcamento"
                                            value={data.preorcamento}
                                            onChange={(e) =>
                                                setData("preorcamento", e.target.value)
                                            }
                                            className="input-form"
                                        />
                                    </div>
                                    <div className="h-full flex items-center justify-center">
                                        <label
                                            className="label-form mr-2"
                                            htmlFor="status"
                                        >
                                            Orçamento aprovado
                                        </label>
                                        <input
                                            id="status"
                                            type="checkbox"
                                            checked={data.status}
                                            onChange={(e) =>
                                                setData("status", e.target.checked)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col mt-6">
                                    <label
                                        className="label-form"
                                        htmlFor="obs"
                                    >
                                        Observações
                                    </label>
                                    <textarea
                                        id="obs"
                                        value={data.obs}
                                        onChange={(e) =>
                                            setData("obs", e.target.value)
                                        }
                                        className="input-form"
                                    />
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
export default AddOrdem;