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
import { Head, useForm } from "@inertiajs/react";
import { AiFillFileMarkdown } from "react-icons/ai";

const AddServico = () => {

    const { data, setData, post, progress, processing, errors } = useForm({
        servico: ""
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        post(route("servicos.store"));
    }

    return (
        <AuthLayout>
            <Head title="Servicos" />
            <Card>
                <HeaderContent>
                    <TitleTop>
                        <AiFillFileMarkdown size={30} />
                        <span className="ml-2">Servicos</span>
                    </TitleTop>
                    <BreadCrumbTop
                        links={[
                            { url: "/servicos", label: "Servicos" },
                            { url: null, label: "Adicionar servico" },
                        ]}
                    />
                </HeaderContent>
                <CardContainer>
                    <CardHeader>
                        <CardHeaderContent>
                            <BackButton url={"/servicos"} label={"Voltar"} />
                        </CardHeaderContent>
                        <CardHeaderContent>
                            <></>
                        </CardHeaderContent>
                    </CardHeader>
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <CardBody className=" border-y border-gray-100">
                            <div className="px-3 my-4">
                                <div className="flex flex-col">
                                    <label
                                        className="label-form"
                                        htmlFor="descricao"
                                    >
                                        Servico
                                    </label>
                                    <input
                                        id="servico"
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
export default AddServico;
