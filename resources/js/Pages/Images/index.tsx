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
import { Head, useForm } from "@inertiajs/react";
import React, { useState } from "react";
import {
    IoClose,
    IoImageSharp,
    IoSearchCircle,
    IoTrash,
} from "react-icons/io5";

type Props = {};

const Images = ({ imagens, ordem }: any) => {
    const [showZoomImage, setShowZoomImage] = useState(null);

    const {
        data,
        setData,
        post,
        delete: destroy,
        errors,
    } = useForm({
        ordem_id: ordem,
        imagem: null,
    });
    function handleSubmit(e: any) {
        e.preventDefault();
        post(route("imagens.store"));
    }

    function handleDeleteImage(e: any, id: any) {
        e.preventDefault();
        destroy(route("imagens.destroy", id));
    }

    const handleShowImage = (image: any) => {
        setShowZoomImage(image);
    };

    const ImageSelected = () => {
        return (
            <div
                onClick={() => setShowZoomImage(false)}
                className="fixed z-50 top-0 right-0 bottom-0 left-0 bg-gray-700 bg-opacity-20 flex items-center justify-center"
            >
                <div className="w-auto bg-gray-50 border border-white rounded-md shadow-md p-2">
                    <div className="flex items-center justify-end mb-1">
                        <div className="text-gray-600 cursor-pointer">
                            <IoClose size={24} />
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <figure className="max-w-lg">
                            <img
                                className="object-cover"
                                src={`/storage/ordens/${ordem}/${showZoomImage}`}
                                alt=""
                            />
                        </figure>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <AuthLayout>
            <Head title="Imagens" />
            {showZoomImage && <ImageSelected />}
            <Card>
                <HeaderContent>
                    <TitleTop>
                        <IoImageSharp size={30} />
                        <span className="ml-2">Imagens</span>
                    </TitleTop>
                    <BreadCrumbTop links={[{ url: null, label: "Imagens" }]} />
                </HeaderContent>
                <CardContainer>
                    <CardHeader>
                        <CardHeaderContent>
                            <BackButton url={"/ordens"} label={"Voltar"} />
                        </CardHeaderContent>
                        <CardHeaderContent>
                            <h1 className="text-xl text-sky-700 font-bold">
                                Ordem N° #{("00000000" + (ordem)).slice(-8)}
                            </h1>
                        </CardHeaderContent>
                    </CardHeader>
                    <form onSubmit={handleSubmit}>
                        <CardBody className="border-y border-gray-100">
                            <div className="p-3">
                                <input
                                    id="ordem_id"
                                    type="text"
                                    value={data.ordem_id}
                                    onChange={(e) =>
                                        setData("ordem_id", e.target.value)
                                    }
                                    className="hidden"
                                />
                                <div className="flex items-center justify-center">
                                    <label
                                        htmlFor="dropzone-file"
                                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                                    >
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg
                                                className="w-8 h-8 mb-4 text-gray-500"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 20 16"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500">
                                                <span className="font-semibold">
                                                    Clique para fazer upload
                                                </span>
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                PNG ou JPG
                                            </p>

                                            <h1 className="text-lg mt-2 text-gray-500">
                                                Arquivos selecionados{" "}
                                                {data?.imagem
                                                    ? data?.imagem?.length
                                                    : "0"}
                                            </h1>
                                        </div>
                                        <input
                                            id="dropzone-file"
                                            type="file"
                                            onChange={(e) =>
                                                setData(
                                                    "imagem",
                                                    e.target.files,
                                                )
                                            }
                                            className="hidden"
                                            multiple
                                            draggable
                                        />
                                    </label>
                                </div>
                                <div className="mt-4">
                                    {errors.imagem && (
                                        <div className="text-sm text-red-500">
                                            {errors.imagem}
                                        </div>
                                    )}
                                </div>
                                <div className="grid grid-cols-8 gap-4 mt-8 md:container mx-auto">
                                    {imagens.map((image: any) => (
                                        <div className="relative bg-gray-50 border border-gray-200 hover:opacity-70 shadow rounded-md">
                                            <div className="absolute flex items-center justify-between left-0.5 right-1 top-0.2">
                                                <div className="text-blue-600 cursor-pointer">
                                                    <IoSearchCircle
                                                        size={20}
                                                        onClick={() =>
                                                            handleShowImage(
                                                                image.imagem,
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div className="text-red-600">
                                                    <IoTrash
                                                        size={20}
                                                        className="cursor-pointer"
                                                        onClick={(e) =>
                                                            handleDeleteImage(
                                                                e,
                                                                image.id,
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className="p-2">
                                                <figure className="max-w-lg">
                                                    <img
                                                        className="object-fill h-48 w-96"
                                                        src={`/storage/ordens/${image.ordem_id}/${image.imagem}`}
                                                        alt={`Imagem ordem ${image.ordem_id}`}
                                                    />
                                                </figure>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardBody>
                        <CardFooter>
                            <SaveButton />
                        </CardFooter>
                    </form>
                </CardContainer>
            </Card>
        </AuthLayout>
    );
};

export default Images;
