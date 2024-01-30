import React from "react";
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
import { statusAgenda } from "@/Utils/dataSelect";
import { useForm } from "@inertiajs/react";
import { FaCalendarDays } from "react-icons/fa6";
import Select from "react-select";

const AddAgenda = ({ clientes, tecnicos }) => {
    const options = clientes.map((cliente: any) => ({
        value: cliente.id,
        label: cliente.nome,
    }));

    const { data, setData, post, progress, processing, errors } = useForm({
        cliente_id: "",
        datahora: "",
        servico: "",
        detalhes: "",
        tecnico: "",
        status: "1",
        obs: "",
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        post(route("agendas.store"));
    }

    const handleChange = (selected: any) => {
        setData("cliente_id", selected.value);
    };

    return (
        <AuthLayout>
            <Card>
                <HeaderContent>
                    <TitleTop>
                        <FaCalendarDays size={30} />
                        <span className="ml-2">Agenda</span>
                    </TitleTop>
                    <BreadCrumbTop
                        links={[
                            { url: "/agendas", label: "Agenda" },
                            { url: null, label: "Adicionar agendamento" },
                        ]}
                    />
                </HeaderContent>
                <CardContainer>
                    <CardHeader>
                        <CardHeaderContent>
                            <BackButton url={"/agendas"} label={"Voltar"} />
                        </CardHeaderContent>
                        <CardHeaderContent>
                            <></>
                        </CardHeaderContent>
                    </CardHeader>
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <CardBody className=" border-y border-gray-100">
                            <div className="px-3 my-4">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="flex flex-col col-span-2">
                                        <label
                                            className="label-form"
                                            htmlFor="cliente_id"
                                        >
                                            Nome do cliente
                                        </label>
                                        <Select
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
                                        />
                                        {errors.cliente_id && (
                                            <div className="text-sm text-red-500">
                                                {errors.cliente_id}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="datahora"
                                        >
                                            Horário da visita
                                        </label>
                                        <input
                                            id="datahora"
                                            type="datetime-local"
                                            value={data.datahora}
                                            onChange={(e) =>
                                                setData(
                                                    "datahora",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                        />
                                        {errors.datahora && (
                                            <div className="text-red-500">
                                                {errors.datahora}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-col mt-6">
                                    <label
                                        className="label-form"
                                        htmlFor="servico"
                                    >
                                        Serviço requisitado
                                    </label>
                                    <input
                                        id="servico"
                                        type="text"
                                        value={data.servico}
                                        onChange={(e) =>
                                            setData("servico", e.target.value)
                                        }
                                        className="input-form"
                                    />
                                    {errors.servico && (
                                        <div className="text-red-500">
                                            {errors.servico}
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col mt-6">
                                    <label
                                        className="label-form"
                                        htmlFor="detalhes"
                                    >
                                        Detalhes do serviço
                                    </label>
                                    <textarea
                                        id="detalhes"
                                        value={data.detalhes}
                                        onChange={(e) =>
                                            setData("detalhes", e.target.value)
                                        }
                                        className="input-form"
                                    />
                                    {errors.detalhes && (
                                        <div className="text-red-500">
                                            {errors.detalhes}
                                        </div>
                                    )}
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-6">
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="tecnico"
                                        >
                                            Técnico
                                        </label>
                                        <select
                                            id="tecnico"
                                            value={data.tecnico}
                                            onChange={(e) =>
                                                setData(
                                                    "tecnico",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                        >
                                            <option value="">
                                                Selecione o técnico
                                            </option>
                                            {tecnicos.map((tecnico: any) => (
                                                <option
                                                    key={tecnico.id}
                                                    value={tecnico.name}
                                                >
                                                    {tecnico.name}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.tecnico && (
                                            <div className="text-sm text-red-500">
                                                {errors.tecnico}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="status"
                                        >
                                            Status da visita
                                        </label>
                                        <select
                                            id="status"
                                            name={data.status}
                                            onChange={(e) =>
                                                setData(
                                                    "status",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                        >
                                            {statusAgenda.map((status: any) => (
                                                <option
                                                    key={status.value}
                                                    value={status.value}
                                                >
                                                    {status.label}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.status && (
                                            <div className="text-sm text-red-500">
                                                {errors.status}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-col mt-6">
                                    <label className="label-form" htmlFor="obs">
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
                                    {errors.obs && (
                                        <div className="text-sm text-red-500">
                                            {errors.obs}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </CardBody>
                        <CardFooter>
                            <SaveButton processing={processing} />
                        </CardFooter>
                    </form>
                </CardContainer>
            </Card>
        </AuthLayout>
    );
};
export default AddAgenda;
