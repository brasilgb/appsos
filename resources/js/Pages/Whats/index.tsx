import { BackButton, SaveButton } from "@/Components/Buttons";
import { Card, CardBody, CardContainer, CardFooter, CardHeader, CardHeaderContent } from "@/Components/Card";
import FlashMessage from "@/Components/FlashMessage";
import { BreadCrumbTop, HeaderContent, TitleTop } from "@/Components/PageTop";
import AuthLayout from "@/Layouts/AuthLayout";
import { router, useForm, usePage } from "@inertiajs/react";
import { InertiaFormProps } from "@inertiajs/react/types/useForm";
import React from "react";
import { maskPhone } from "@/Utils/mask";
import { IoChatboxEllipses, IoLogoWhatsapp } from "react-icons/io5";

interface WhatsProps {
    telefone: string,
    site: string,
    email: string,
}

const Whats = ({ whats }: any) => {
    const { flash } = usePage().props;
    const { data, setData, patch, progress, processing, errors }: InertiaFormProps<WhatsProps> = useForm({
        telefone: whats.telefone,
        site: whats.site,
        email: whats.email,
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        router.post(`whatsapp/${whats.id}`, {
            _method: 'put',
            telefone: data.telefone,
            site: data.site,
            email: data.email,
        });
    }

    return (
        <AuthLayout>
            <Card>
                <HeaderContent>
                    <TitleTop >
                        <IoLogoWhatsapp size={30} />
                        <span className="ml-2">WhatsApp</span>
                    </TitleTop>
                    <BreadCrumbTop
                        links={
                            [
                                { url: null, label: 'WhatsApp' },
                            ]
                        }
                    />
                </HeaderContent>
                <CardContainer>
                    <FlashMessage message={flash} />
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <CardBody className=" border-y border-gray-100">

                            <div className="px-3 my-4">

                                <div className="grid grid-cols-4 gap-4 mt-6">
                                    <div className="flex flex-col">
                                        <label className="label-form" htmlFor="telefone">
                                            Telefone
                                        </label>
                                        <input
                                            id="telefone"
                                            type="text"
                                            value={maskPhone(data.telefone)}
                                            onChange={(e) => setData('telefone', e.target.value)}
                                            className="input-form"
                                            maxLength={15}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="label-form" htmlFor="site">
                                            Site
                                        </label>
                                        <input
                                            id="site"
                                            type="text"
                                            value={data.site}
                                            onChange={(e) => setData('site', e.target.value)}
                                            className="input-form"
                                        />
                                        {errors.site && <div className="text-sm text-red-500">{errors.site}</div>}
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="label-form" htmlFor="email">
                                            E-mail
                                        </label>
                                        <input
                                            id="email"
                                            type="text"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            className="input-form"
                                        />
                                        {errors.email && <div className="text-sm text-red-500">{errors.email}</div>}
                                    </div>
                                </div>
                            </div>

                        </CardBody>
                        <CardFooter>
                            <SaveButton processing={processing} />
                        </CardFooter>
                    </form>
                </CardContainer>
            </Card>
        </AuthLayout >
    );
}
export default Whats;