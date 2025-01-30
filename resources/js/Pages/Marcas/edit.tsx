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

const AddMarca = ({ marcas }: any) => {
    const { flash } = usePage().props as any;

    const { data, setData, patch, progress, processing, errors } = useForm({
        marca: marcas.marca
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        patch(route("marcas.update", marcas.id));
    }

    return (
        <AuthLayout>
            <Head title="Marcas" />
            <Card>
                <HeaderContent>
                    <TitleTop>
                        <AiFillFileMarkdown size={30} />
                        <span className="ml-2">Marcas</span>
                    </TitleTop>
                    <BreadCrumbTop
                        links={[
                            { url: "/marcas", label: "Marcas" },
                            { url: null, label: "Adicionar marca" },
                        ]}
                    />
                </HeaderContent>
                <CardContainer>
                    <FlashMessage message={flash} />
                    <CardHeader>
                        <CardHeaderContent>
                            <BackButton url={"/marcas"} label={"Voltar"} />
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
                                        Marca
                                    </label>
                                    <input
                                        id="marca"
                                        type="text"
                                        value={data.marca}
                                        onChange={(e) =>
                                            setData(
                                                "marca",
                                                e.target.value,
                                            )
                                        }
                                        className="input-form"
                                    />
                                    {errors.marca && (
                                        <div className="text-sm text-red-500">
                                            {errors.marca}
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
export default AddMarca;
