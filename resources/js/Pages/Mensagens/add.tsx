import React from "react";
import { BackButton, SaveButton } from "@/Components/Buttons";
import { Card, CardBody, CardContainer, CardFooter, CardHeader, CardHeaderContent } from "@/Components/Card";
import { BreadCrumbTop, HeaderContent, TitleTop } from "@/Components/PageTop";
import AuthLayout from "@/Layouts/AuthLayout";
import { useForm } from "@inertiajs/react";
import Select from 'react-select';
import { IoChatboxEllipses } from "react-icons/io5";

const AddMensagem = ({ users }) => {
    const { data, setData, post, progress, processing, errors } = useForm({
        remetente: "",
        destinatario: "",
        mensagem: "",
        status: "1",
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        post(route('mensagens.store'));
    }

    return (
        <AuthLayout>
            <Card>
                <HeaderContent>
                    <TitleTop >
                        <IoChatboxEllipses size={30} />
                        <span className="ml-2">Mensagem</span>
                    </TitleTop>
                    <BreadCrumbTop
                        links={
                            [
                                { url: '/mensagens', label: 'Mensagem' },
                                { url: null, label: 'Adicionar mensagem' },
                            ]
                        }
                    />
                </HeaderContent>
                <CardContainer>
                    <CardHeader>
                        <CardHeaderContent>
                            <BackButton url={"/mensagens"} label={"Voltar"} />
                        </CardHeaderContent>
                        <CardHeaderContent>
                            <></>
                        </CardHeaderContent>
                    </CardHeader>
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <CardBody className=" border-y border-gray-100">
                            <div className="px-3 my-4">

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col">
                                        <label className="label-form" htmlFor="remetente">
                                            Remetente
                                        </label>
                                        <select
                                            id="remetente"
                                            value={data.remetente}
                                            onChange={(e) => setData('remetente', e.target.value)}
                                            className="input-form"
                                        >
                                            <option value="">Selecione o remetente</option>
                                            {users.map((user: any) => (
                                                <option key={user.value} value={user.id}>{user.name}</option>
                                            ))}
                                        </select>
                                        {errors.remetente && <div className="text-sm text-red-500">{errors.remetente}</div>}
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="label-form" htmlFor="destinatario">
                                            Destinatário
                                        </label>
                                        <select
                                            id="destinatario"
                                            value={data.destinatario}
                                            onChange={(e) => setData('destinatario', e.target.value)}
                                            className="input-form"
                                        >
                                            <option value="">Selecione o destinatário</option>
                                            {users.map((user: any) => (
                                                <option key={user.value} value={user.id}>{user.name}</option>
                                            ))}
                                        </select>
                                        {errors.destinatario && <div className="text-sm text-red-500">{errors.destinatario}</div>}
                                    </div>
                                </div>

                                <div className="flex flex-col mt-6">
                                    <label className="label-form" htmlFor="mensagem">
                                        Mensagem
                                    </label>
                                    <textarea
                                        id="mensagem"
                                        value={data.mensagem}
                                        onChange={(e) => setData('mensagem', e.target.value)}
                                        className="input-form"
                                    />
                                    {errors.mensagem && <div className="text-sm text-red-500">{errors.mensagem}</div>}
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
export default AddMensagem;