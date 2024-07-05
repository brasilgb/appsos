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
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { InertiaFormProps } from "@inertiajs/react/types/useForm";
import React from "react";
import { IoChatboxEllipses } from "react-icons/io5";

interface ClientesProps {
    recebimento: string;
    entrega: string;
    orcamento: string;
    checklist: string;
}

const Impressoes = ({ impressao }: any) => {
    const { flash } = usePage().props;
    const {
        data,
        setData,
        patch,
        progress,
        processing,
        errors,
    }: InertiaFormProps<ClientesProps> = useForm({
        recebimento: impressao.recebimento,
        entrega: impressao.entrega,
        orcamento: impressao.orcamento,
        checklist: impressao.checklist,
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        patch(route("impressoes.update", impressao.id));
    }
    return (
        <AuthLayout>
            <Head title="Impressões" />
            <Card>
                <HeaderContent>
                    <TitleTop>
                        <IoChatboxEllipses size={30} />
                        <span className="ml-2">Impressão</span>
                    </TitleTop>
                    <BreadCrumbTop
                        links={[{ url: null, label: "Impressão" }]}
                    />
                </HeaderContent>
                <CardContainer>
                    <FlashMessage message={flash} />
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <CardBody className=" border-y border-gray-100">
                            <div className="px-3 my-4">
                                <div className="flex flex-col mt-6">
                                    <label
                                        className="label-form"
                                        htmlFor="recebimento"
                                    >
                                        Recibo de recebimento de equipamento
                                    </label>
                                    <textarea
                                        id="recebimento"
                                        value={data.recebimento}
                                        onChange={(e) =>
                                            setData(
                                                "recebimento",
                                                e.target.value,
                                            )
                                        }
                                        className="input-form"
                                    />
                                </div>

                                <div className="flex flex-col mt-6">
                                    <label
                                        className="label-form"
                                        htmlFor="entrega"
                                    >
                                        Recibo de entrega do equipamento
                                    </label>
                                    <textarea
                                        id="entrega"
                                        value={data.entrega}
                                        onChange={(e) =>
                                            setData("entrega", e.target.value)
                                        }
                                        className="input-form"
                                    />
                                </div>

                                <div className="flex flex-col mt-6">
                                    <label
                                        className="label-form"
                                        htmlFor="orcamento"
                                    >
                                        Orçamento de equipamento
                                    </label>
                                    <textarea
                                        id="orcamento"
                                        value={data.orcamento}
                                        onChange={(e) =>
                                            setData("orcamento", e.target.value)
                                        }
                                        className="input-form"
                                    />
                                </div>

                                <div className="flex flex-col mt-6">
                                    <label
                                        className="label-form"
                                        htmlFor="checklist"
                                    >
                                        Checklist (separar com ;)
                                    </label>
                                    <textarea
                                        id="checklist"
                                        value={data.checklist}
                                        onChange={(e) =>
                                            setData("checklist", e.target.value)
                                        }
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
export default Impressoes;
