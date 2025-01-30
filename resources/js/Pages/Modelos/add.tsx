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
import { Head, useForm, usePage } from "@inertiajs/react";
import { IoChatboxEllipses } from "react-icons/io5";
import { AiFillFileMarkdown } from "react-icons/ai";

const AddModelo = ({ marcas }: any) => {

    const { data, setData, post, progress, processing, errors } = useForm({
        modelo: "",
        marca_id: ""
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        post(route("modelos.store"));
    }

    return (
        <AuthLayout>
            <Head title="Modelos" />
            <Card>
                <HeaderContent>
                    <TitleTop>
                        <AiFillFileMarkdown size={30} />
                        <span className="ml-2">Modelos</span>
                    </TitleTop>
                    <BreadCrumbTop
                        links={[
                            { url: "/modelos", label: "Modelos" },
                            { url: null, label: "Adicionar modelo" },
                        ]}
                    />
                </HeaderContent>
                <CardContainer>
                    <CardHeader>
                        <CardHeaderContent>
                            <BackButton url={"/modelos"} label={"Voltar"} />
                        </CardHeaderContent>
                        <CardHeaderContent>
                            <></>
                        </CardHeaderContent>
                    </CardHeader>
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <CardBody className=" border-y border-gray-100">
                            <div className="grid grid-cols-2 gap-4 px-3 my-4">
                                <div className="flex flex-col">
                                    <label
                                        className="label-form"
                                        htmlFor="descricao"
                                    >
                                        Modelo
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
                                    {errors.modelo && (
                                        <div className="text-sm text-red-500">
                                            {errors.modelo}
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-col">
                                    <label
                                        className="label-form"
                                        htmlFor="marca_id"
                                    >
                                        Tipo do produto
                                    </label>
                                    <select
                                        id="marca_id"
                                        value={data.marca_id}
                                        onChange={(e) =>
                                            setData("marca_id", e.target.value)
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
                                    {errors.marca_id && (
                                        <div className="text-sm text-red-500">
                                            {errors.marca_id}
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
export default AddModelo;
