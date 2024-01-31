import { SaveButton } from "@/Components/Buttons";
import { Card, CardBody, CardContainer, CardFooter } from "@/Components/Card";
import FlashMessage from "@/Components/FlashMessage";
import { BreadCrumbTop, HeaderContent, TitleTop } from "@/Components/PageTop";
import AuthLayout from "@/Layouts/AuthLayout";
import { router, useForm, usePage } from "@inertiajs/react";
import { InertiaFormProps } from "@inertiajs/react/types/useForm";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io5";

interface WhatsProps {
    orcamento: string;
    concluido: string;
}

const Whats = ({ whats }: any) => {
    const { flash } = usePage().props;
    const {
        data,
        setData,
        patch,
        progress,
        processing,
        errors,
    }: InertiaFormProps<WhatsProps> = useForm({
        orcamento: whats.orcamento,
        concluido: whats.concluido,
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        router.post(`whatsapp/${whats.id}`, {
            _method: "put",
            orcamento: data.orcamento,
            concluido: data.concluido,
        });
    }

    return (
        <AuthLayout>
            <Card>
                <HeaderContent>
                    <TitleTop>
                        <IoLogoWhatsapp size={30} />
                        <span className="ml-2">WhatsApp</span>
                    </TitleTop>
                    <BreadCrumbTop links={[{ url: null, label: "WhatsApp" }]} />
                </HeaderContent>
                <CardContainer>
                    <FlashMessage message={flash} />
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <CardBody className=" border-y border-gray-100">
                            <div className="px-3 my-4">
                                <div className="flex flex-col">
                                    <label
                                        className="label-form"
                                        htmlFor="orcamento"
                                    >
                                        Orçamento gerado
                                    </label>
                                    <textarea
                                        id="email"
                                        value={data.orcamento}
                                        onChange={(e) =>
                                            setData(
                                                "orcamento",
                                                e.target.value,
                                            )
                                        }
                                        className="input-form"
                                    />
                                    {errors.orcamento && (
                                        <div className="text-sm text-red-500">
                                            {errors.orcamento}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="px-3 my-4">
                                <div className="flex flex-col">
                                    <label
                                        className="label-form"
                                        htmlFor="concluido"
                                    >
                                        Serviço concluído
                                    </label>
                                    <textarea
                                        id="email"
                                        value={data.concluido}
                                        onChange={(e) =>
                                            setData(
                                                "concluido",
                                                e.target.value,
                                            )
                                        }
                                        className="input-form"
                                    />
                                    {errors.concluido && (
                                        <div className="text-sm text-red-500">
                                            {errors.concluido}
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
export default Whats;
