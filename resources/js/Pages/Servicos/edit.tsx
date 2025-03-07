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
import FlashMessage from "@/Components/FlashMessage";
import { split } from "postcss/lib/list";

const AddServico = ({ servicos, gerais }: any) => {
    const { flash } = usePage().props as any;
    const equtipo = gerais?.equtipo ? gerais?.equtipo?.split(";") : [];

    const { data, setData, patch, progress, processing, errors } = useForm({
        equipamento: servicos.equipamento,
        servico: servicos.servico,
        simples: servicos.simples,
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        patch(route("servicos.update", servicos.id));
    }

    return (
        <AuthLayout>
            <Head title="Serviços" />
            <Card>
                <HeaderContent>
                    <TitleTop>
                        <AiFillFileMarkdown size={30} />
                        <span className="ml-2">Serviços</span>
                    </TitleTop>
                    <BreadCrumbTop
                        links={[
                            { url: "/servicos", label: "Serviços" },
                            { url: null, label: "Adicionar serviço" },
                        ]}
                    />
                </HeaderContent>
                <CardContainer>
                    <FlashMessage message={flash} />
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
                            <div className="grid grid-cols-5 gap-4 px-3 my-4">
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
                                            <option key={idx} value={tipo.trim()}>{tipo}</option>
                                        ))}
                                    </select>
                                    {errors.equipamento && (
                                        <div className="text-red-500">
                                            {errors.equipamento}
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-col col-span-2">
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
                                <div className="flex items-center gap-2">
                                    <label
                                        className="label-form"
                                        htmlFor="simples"
                                    >
                                        Serviço simples
                                    </label>
                                    <input
                                        id="simples"
                                        type="checkbox"
                                        checked={data.simples}
                                        onChange={(e) => setData('simples', e.target.checked)}
                                        className="input-form"
                                    />
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
