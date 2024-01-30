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
    messagecli: string,
    messagetec: string
}

const Whats = ({ whats }: any) => {
    const { flash } = usePage().props;
    const { data, setData, patch, progress, processing, errors }: InertiaFormProps<WhatsProps> = useForm({
        messagecli: whats.messagecli,
        messagetec: whats.messagetec
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        router.post(`whatsapp/${whats.id}`, {
            _method: 'put',
            messagecli: data.messagecli,
            messagetec: data.messagetec
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
                                <div className="flex flex-col">
                                    <label className="label-form" htmlFor="messagecli">
                                        Mensagem ao cliente
                                    </label>
                                    <textarea
                                        id="email"
                                        value={data.messagecli}
                                        onChange={(e) => setData('messagecli', e.target.value)}
                                        className="input-form"
                                    />
                                    {errors.messagecli && <div className="text-sm text-red-500">{errors.messagecli}</div>}
                                </div>
                            </div>

                            <div className="px-3 my-4">
                                <div className="flex flex-col">
                                    <label className="label-form" htmlFor="messagetec">
                                        Mensagem ao técnico (agendamentos)
                                    </label>
                                    <textarea
                                        id="email"
                                        value={data.messagetec}
                                        onChange={(e) => setData('messagetec', e.target.value)}
                                        className="input-form"
                                    />
                                    {errors.messagetec && <div className="text-sm text-red-500">{errors.messagetec}</div>}
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