import {
    Card,
    CardBody,
    CardContainer,
    CardFooter,
} from "@/Components/Card";
import FlashMessage from "@/Components/FlashMessage";
import { BreadCrumbTop, HeaderContent, TitleTop } from "@/Components/PageTop";
import AuthLayout from "@/Layouts/AuthLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import { InertiaFormProps } from "@inertiajs/react/types/useForm";
import React from "react";
import { AiFillTags } from "react-icons/ai";
import { IoPricetagsSharp } from "react-icons/io5";

interface ClientesProps {
    ordeminicial: number;
    paginas: number;
    ordemfinal: number;
}

const Etiquetas = ({ etiquetas }: any) => {
    const { flash } = usePage().props;
    const {
        data,
        setData,
    }: InertiaFormProps<ClientesProps> = useForm({
        ordeminicial: etiquetas.id + 1,
        paginas: 1,
        ordemfinal: etiquetas.id + 96,
    });

    const handlerOrdemFinal = (e: any) => {
        const paginas = parseInt(e.target.value);
        if (paginas) {
            setData((data) => ({ ...data, paginas: paginas }));
            setData((data) => ({
                ...data,
                ordemfinal: data.ordeminicial - 1 + 96 * paginas,
            }));
        }
    };

    return (
        <AuthLayout>
            <Head title="Etiquetas" />
            <Card>
                <HeaderContent>
                    <TitleTop>
                        <AiFillTags size={30} />
                        <span className="ml-2">Etiquetas</span>
                    </TitleTop>
                    <BreadCrumbTop
                        links={[{ url: null, label: "Etiquetas" }]}
                    />
                </HeaderContent>
                <CardContainer>
                    <FlashMessage message={flash} />
                    <form autoComplete="off">
                        <CardBody className=" border-y border-gray-100">
                            <div className="px-3 my-4">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="flex flex-col mt-6">
                                        <label
                                            className="label-form"
                                            htmlFor="ordeminicial"
                                        >
                                            Ordem inicial
                                        </label>
                                        <input
                                            id="ordeminicial"
                                            value={data.ordeminicial}
                                            type="text"
                                            onChange={(e) =>
                                                setData(
                                                    "ordeminicial",
                                                    parseInt(e.target.value),
                                                )
                                            }
                                            className="input-form"
                                        />
                                    </div>

                                    <div className="flex flex-col mt-6">
                                        <label
                                            className="label-form"
                                            htmlFor="paginas"
                                        >
                                            Páginas
                                        </label>
                                        <input
                                            id="paginas"
                                            value={data.paginas}
                                            type="number"
                                            onChange={handlerOrdemFinal}
                                            className="input-form"
                                        />
                                    </div>

                                    <div className="flex flex-col mt-6">
                                        <label
                                            className="label-form"
                                            htmlFor="ordemfinal"
                                        >
                                            Ordem final
                                        </label>
                                        <input
                                            id="ordemfinal"
                                            value={data.ordemfinal}
                                            type="text"
                                            onChange={(e) =>
                                                setData(
                                                    "ordemfinal",
                                                    parseInt(e.target.value),
                                                )
                                            }
                                            className="input-form"
                                        />
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                        <CardFooter>
                        <div className="flex justify-end">
                            <a
                                className="flex items-center justify-center bg-blue-700 hover:bg-blue-600 py-1.5 px-4 rounded-md shadow text-gray-50 self-end"
                                target="_blank"
                                href={`/configuracoes/etiquetas/printer/${data.ordeminicial}/${data.ordemfinal}`}
                            >
                                <IoPricetagsSharp size={18} />
                                <span className="ml-2">Gerar etiquetas</span>
                            </a>
                            </div>
                        </CardFooter>
                    </form>
                </CardContainer>
            </Card>
        </AuthLayout>
    );
};
export default Etiquetas;
