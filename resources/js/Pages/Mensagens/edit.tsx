import {
    BackButton,
    MessageLidaButton,
    SaveButton,
} from "@/Components/Buttons";
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
import { useForm, usePage } from "@inertiajs/react";
import { InertiaFormProps } from "@inertiajs/react/types/useForm";
import React from "react";
import { IoChatboxEllipses } from "react-icons/io5";

interface ClientesProps {
    remetente: string;
    destinatario: string;
    mensagem: string;
}

const EditMensagem = ({ mensagens, users }: any) => {
    const { flash } = usePage().props;

    const {
        data,
        setData,
        patch,
        progress,
        processing,
        errors,
    }: InertiaFormProps<ClientesProps> = useForm({
        remetente: mensagens.remetente,
        destinatario: mensagens.destinatario,
        mensagem: mensagens.mensagem,
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        patch(route("mensagens.update", mensagens.id));
    }

    return (
        <AuthLayout>
            <Card>
                <HeaderContent>
                    <TitleTop>
                        <IoChatboxEllipses size={30} />
                        <span className="ml-2">Mensagem</span>
                    </TitleTop>
                    <BreadCrumbTop
                        links={[
                            { url: "/mensagens", label: "Mensagem" },
                            { url: null, label: "Editar mensagem" },
                        ]}
                    />
                </HeaderContent>
                <CardContainer>
                    <FlashMessage message={flash} />
                    <CardHeader>
                        <CardHeaderContent>
                            <div className="flex items-center gap-4">
                                <BackButton
                                    url={"/mensagens"}
                                    label={"Voltar"}
                                />
                                <MessageLidaButton
                                    url={"mensagens.update"}
                                    id={`${mensagens.id}`}
                                    sttmessage={mensagens.status}
                                />
                            </div>
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
                                        <label
                                            className="label-form"
                                            htmlFor="remetente"
                                        >
                                            Remetente {mensagens.status}
                                        </label>
                                        <select
                                            id="remetente"
                                            value={data.remetente}
                                            onChange={(e) =>
                                                setData(
                                                    "remetente",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                        >
                                            {users.map((user: any) => (
                                                <option
                                                    key={user.value}
                                                    value={user.id}
                                                >
                                                    {user.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="destinatario"
                                        >
                                            Destinatário
                                        </label>
                                        <select
                                            id="destinatario"
                                            value={data.destinatario}
                                            onChange={(e) =>
                                                setData(
                                                    "destinatario",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                        >
                                            {users.map((user: any) => (
                                                <option
                                                    key={user.value}
                                                    value={user.id}
                                                >
                                                    {user.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col mt-6">
                                    <label
                                        className="label-form"
                                        htmlFor="mensagem"
                                    >
                                        Mensagem
                                    </label>
                                    <textarea
                                        id="mensagem"
                                        value={data.mensagem}
                                        onChange={(e) =>
                                            setData("mensagem", e.target.value)
                                        }
                                        className="input-form"
                                    />
                                    {errors.mensagem && (
                                        <div className="text-sm text-red-500">
                                            {errors.mensagem}
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
export default EditMensagem;
