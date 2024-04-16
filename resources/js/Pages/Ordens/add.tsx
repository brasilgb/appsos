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
import Select from "react-select";

const AddOrdem = ({ clientes, ordem }) => {
    const [filterSeacrh, setFilterSeacrh] = useState<any>([]);
    const { data, setData, post, progress, processing, errors } = useForm({
        cliente_id: "",
        cliente: "",
        equipamento: "",
        modelo: "",
        senha: "",
        defeito: "",
        estado: "",
        acessorios: "",
        preorcamento: "",
        previsao: "",
        obs: "",
    });


    useEffect(() => {
        const client = data.cliente.toLowerCase();
        if (client.length > 3) {
            const result = clientes.filter((cl: any) => (cl.nome.toLowerCase().includes(client)));
            setFilterSeacrh(result);
        } else {
            setFilterSeacrh([]);
        }
    }, [data])

    function handleSubmit(e: any) {
        e.preventDefault();
        post(route("ordens.store"));
    }

    const handleChangeCustomer = (id: any, nome: any) => {
        setFilterSeacrh([]);
        setData((data) => ({ ...data, cliente_id: id }));
        setData((data) => ({ ...data, cliente: nome }));
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
                                            value={
                                                ordem > 0
                                                    ? ("00000000" + (ordem + 1)).slice(-8)
                                                    : ("00000000" + (1)).slice(-8)
                                            }
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
                                            className="input-form"
                                        />
                                        <input
                                            id="cliente"
                                            type="text"
                                            value={data.cliente}
                                            onChange={(e) =>
                                                setData(
                                                    "cliente",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                        />
                                        {filterSeacrh &&
                                            <div className="absolute bg-gray-50 border-2 border-white shadow-md w-full rounded-sm top-16">
                                                {filterSeacrh.map((cliente: any, idx: number) => (
                                                    <div key={idx} className="flex items-center justify-normal">
                                                        <div
                                                            onClick={() => handleChangeCustomer(cliente.id, cliente.nome)}
                                                            className="">{cliente.nome}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        }
                                        {/* <Select
                                            id="cliente_id"
                                            options={options}
                                            placeholder="Selecione o cliente"
                                            onChange={handleChange}
                                            styles={{
                                                control: (provided) => ({
                                                    ...provided,
                                                    padding: 2,
                                                    borderRadius: 6,
                                                }),
                                            }}
                                        /> */}
                                        {errors.cliente_id && (
                                            <div className="text-sm text-red-500">
                                                {errors.cliente}
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
                                        <input
                                            id="equipamento"
                                            type="text"
                                            value={data.equipamento}
                                            onChange={(e) =>
                                                setData(
                                                    "equipamento",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                        />
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
                                        <textarea
                                            id="estado"
                                            value={data.estado}
                                            onChange={(e) =>
                                                setData(
                                                    "estado",
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
                                    <div className="flex flex-col">
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
