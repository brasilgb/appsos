import apios from "@/bootstrap";
import { SaveButton } from "@/Components/Buttons";
import { Card, CardBody, CardContainer, CardFooter } from "@/Components/Card";
import FlashMessage from "@/Components/FlashMessage";
import { BreadCrumbTop, HeaderContent, TitleTop } from "@/Components/PageTop";
import AuthLayout from "@/Layouts/AuthLayout";
import { maskMoneyDot } from "@/Utils/mask";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { InertiaFormProps } from "@inertiajs/react/types/useForm";
import moment from "moment";
import React, { useState } from "react";
import { AiFillTags } from "react-icons/ai";
import { IoClose, IoCloudUpload, IoInformationCircleOutline, IoRefresh, IoReload } from "react-icons/io5";
import { RiLoader2Fill, RiLoader3Fill } from "react-icons/ri";

interface GeraisProps {
    bgimage: any;
    bgcolor: string;
    equtipo: string;
    equestado: string;
    servicos: string;
    marcas: string;
    modelos: string;
}

const Gerais = ({ geral, clientes, ordens }: any) => {
    //     const myOrder = ordens.map((val: any) => ({
    //         "id": val.id,
    //         "cliente_id": val.cliente_id,
    //         "detalhes": val.detalhes,
    //         "defeito": val.defeito,
    //         "descorcamento": val.descorcamento,
    //         "valorcamento": val.valorcamento ? val.valorcamento : '0',
    //         "valservico": val.valservico ? val.valservico : '0',
    //         "custo": val.custo ? val.custo : '0',
    //         "valpecas": val.valpecas ? val.valpecas : '0',
    //         "dtentrada": moment(val.created_at).format("YYYY-MM-DD HH:mm:ss"),
    //         "dtentrega": val.status === '8' ? moment().format("YYYY-MM-DD HH:mm:ss") : null,
    //         "status": val.status
    //     }));
    //     console.log(myOrder);

    const { flash } = usePage().props;
    const [loading, setLoading] = useState<boolean>(false);
    const [loading1, setLoading1] = useState<boolean>(false);
    const [messageUploadCustomer, setMessageUploadCustomer] = useState<boolean>(false);
    const [messageUploadOrder, setMessageUploadOrder] = useState<boolean>(false);
    const {
        data,
        setData,
        post,
        delete: destroy,
        progress,
        processing,
        reset,
        errors,
    }: InertiaFormProps<GeraisProps> = useForm({
        bgimage: geral.bgimage,
        bgcolor: geral.bgcolor,
        equtipo: geral.equtipo,
        equestado: geral.equestado,
        servicos: geral.servicos,
        marcas: geral.marcas,
        modelos: geral.modelos,
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        router.post(`gerais/${geral.id}`, {
            _method: "put",
            bgimage: data.bgimage,
            bgcolor: data.bgcolor,
            equtipo: data.equtipo,
            equestado: data.equestado,
            servicos: data.servicos,
            marcas: data.marcas,
            modelos: data.modelos,
        });
        reset;
    }
    const handleDeleteImage = (e: any) => {
        e.preventDefault();
        destroy(route("gerais.destroy", geral.id));
    };

    const pushOrders = async () => {
        setLoading(true);
        await apios.post('insert-order', {
            orders: ordens
        })
            .then((res) => {
                setMessageUploadOrder(res.data.response.message);
            })
            .catch((err) => {
                console.log(err.message);
            }).finally(() => setLoading(false));
    }

    const pushUsers = async () => {
        setLoading1(true);
        await apios.post('insert-user', {
            customers: clientes
        })
            .then((res) => {
                setMessageUploadCustomer(res.data.response.message);
            })
            .catch((err) => {
                console.log(err.message);
            }).finally(() => setLoading1(false));
    }

    return (
        <AuthLayout>
            <Head title="Gerais" />
            <Card>
                <HeaderContent>
                    <TitleTop>
                        <AiFillTags size={30} />
                        <span className="ml-2">Configurações gerais</span>
                    </TitleTop>
                    <BreadCrumbTop
                        links={[{ url: null, label: "Configurações gerais" }]}
                    />
                </HeaderContent>
                <CardContainer className="">
                    <FlashMessage message={flash} />
                    {messageUploadOrder && <FlashMessage message={messageUploadOrder} />}
                    {messageUploadCustomer && <FlashMessage message={messageUploadCustomer} />}
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <CardBody className=" border-y border-gray-100 rounded-t-md">
                            <div className="flex items-center p-4">
                                <button
                                    type="button"
                                    onClick={() => pushOrders()}
                                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-600/90 py-1.5 px-8 text-sm text-white rounded-md border-2 border-blue-200 uppercase shadow-md"
                                >
                                    Push de ordens ao site
                                    {loading && <RiLoader3Fill className="animate-spin" />}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => pushUsers()}
                                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-600/90 py-1.5 px-8 text-sm text-white rounded-md border-2 border-blue-200 uppercase shadow-md"
                                >
                                    Push de clientes ao site
                                    {loading1 && <RiLoader3Fill className="animate-spin" />}
                                </button>
                            </div>
                            {messageUploadCustomer &&
                                <div className="flex items-center bg-green-100 p-4 mb-0 text-sm text-green-700 border border-green-200 gap-1">
                                    <IoInformationCircleOutline size={20} />{messageUploadCustomer}
                                </div>
                            }
                            {messageUploadOrder &&
                                <div className="flex items-center bg-green-100 p-4 mb-0 text-sm text-green-700 border border-green-200 gap-1">
                                    <IoInformationCircleOutline size={20} />{messageUploadOrder}
                                </div>
                            }
                            {geral.bgimage && (
                                <div className="relative w-48">
                                    <div className="absolute rounded-full w-5 h-5 bg-red-500 text-white top-0 right-0">
                                        <button
                                            onClick={(e) =>
                                                handleDeleteImage(e)
                                            }
                                        >
                                            <IoClose size={20} />
                                        </button>
                                    </div>
                                    <div className="w-44 my-10">
                                        <img
                                            src={`/storage/images/${geral.bgimage ? geral.bgimage : ""}`}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="px-3 my-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="bgimage"
                                        >
                                            Imagem de fundo (tela de login)
                                        </label>
                                        <input
                                            id="bgimage"
                                            type="file"
                                            onChange={(e) =>
                                                setData(
                                                    "bgimage",
                                                    e.target.files[0],
                                                )
                                            }
                                            className="block w-full text-base text-gray-600
                                            file:mr-4 file:py-2.5 file:px-4 file:rounded-l-md
                                            file:border-0 file:text-sm file:font-semibold
                                            file:bg-blue-700 file:text-gray-50 file:cursor-pointer
                                            hover:file:bg-blue-600 border border-gray-300 rounded-md bg-transparent"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="bgcolor"
                                        >
                                            Cor de fundo (tela de login)
                                        </label>
                                        <input
                                            id="bgcolor"
                                            type="color"
                                            value={data.bgcolor}
                                            onChange={(e) =>
                                                setData(
                                                    "bgcolor",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form !p-0 !h-10 w-full"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col mt-6">
                                    <label
                                        className="label-form"
                                        htmlFor="equtipo"
                                    >
                                        Tipo de equipamento (separar com ;)
                                    </label>
                                    <textarea
                                        id="equtipo"
                                        value={data.equtipo}
                                        onChange={(e) =>
                                            setData("equtipo", e.target.value)
                                        }
                                        className="input-form"
                                        rows={2}
                                    />
                                </div>

                                <div className="flex flex-col mt-6">
                                    <label
                                        className="label-form"
                                        htmlFor="equestado"
                                    >
                                        Estado do equipamento (separar com ;)
                                    </label>
                                    <textarea
                                        id="equestado"
                                        value={data.equestado}
                                        onChange={(e) =>
                                            setData("equestado", e.target.value)
                                        }
                                        className="input-form"
                                        rows={2}
                                    />
                                </div>

                                {/* <div className="flex flex-col mt-6">
                                    <label
                                        className="label-form"
                                        htmlFor="servicos"
                                    >
                                        Serviços (separar com ;)
                                    </label>
                                    <textarea
                                        id="servicos"
                                        value={data.servicos}
                                        onChange={(e) =>
                                            setData("servicos", e.target.value)
                                        }
                                        className="input-form"
                                        rows={2}
                                    />
                                </div>
                                
                                
                                <div className="flex flex-col mt-6">
                                    <label
                                        className="label-form"
                                        htmlFor="marcas"
                                    >
                                        Marcas de Peças (separar com ;)
                                    </label>
                                    <textarea
                                        id="marcas"
                                        value={data.marcas}
                                        onChange={(e) =>
                                            setData("marcas", e.target.value)
                                        }
                                        className="input-form"
                                        rows={2}
                                    />
                                </div>
                                
                                <div className="flex flex-col mt-6">
                                    <label
                                        className="label-form"
                                        htmlFor="modelos"
                                    >
                                        Modelos de Peças (separar com ;)
                                    </label>
                                    <textarea
                                        id="modelos"
                                        value={data.modelos}
                                        onChange={(e) =>
                                            setData("modelos", e.target.value)
                                        }
                                        className="input-form"
                                        rows={2}
                                    />
                                </div> */}
                            </div>
                        </CardBody>
                        <CardFooter>
                            <SaveButton
                                value="Salvar"
                                processing={processing}
                            />
                        </CardFooter>
                    </form>
                </CardContainer>
            </Card>
        </AuthLayout>
    );
};
export default Gerais;
