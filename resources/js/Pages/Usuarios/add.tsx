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
import { roleUser, statusUser } from "@/Utils/dataSelect";
import { maskPhone } from "@/Utils/mask";
import { Head, useForm } from "@inertiajs/react";
import React, { useState } from "react";
import { IoEye, IoEyeOff, IoPerson } from "react-icons/io5";

const AddUsuario = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const { data, setData, post, progress, processing, errors } = useForm({
        name: "",
        email: "",
        telefone: "",
        whatsapp: "",
        role: "",
        status: "1",
        password: "",
        password_confirmation: "",
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        post(route("usuarios.store"));
    }

    return (
        <AuthLayout>            
        <Head title="Usuários" />
            <Card>
                <HeaderContent>
                    <TitleTop>
                        <IoPerson size={30} />
                        <span className="ml-2">Usuários</span>
                    </TitleTop>
                    <BreadCrumbTop
                        links={[
                            { url: "/usuarios", label: "Usuários" },
                            { url: null, label: "Adicionar usuário" },
                        ]}
                    />
                </HeaderContent>
                <CardContainer>
                    <CardHeader>
                        <CardHeaderContent>
                            <BackButton url={"/usuarios"} label={"Voltar"} />
                        </CardHeaderContent>
                        <CardHeaderContent>
                            <></>
                        </CardHeaderContent>
                    </CardHeader>
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <CardBody className=" border-y border-gray-100">
                            <div className="px-3 my-4">
                                <div className="grid grid-cols-6 gap-4">
                                    <div className="flex flex-col col-span-2">
                                        <label
                                            className="label-form"
                                            htmlFor="nome"
                                        >
                                            Nome
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            className="input-form"
                                        />
                                        {errors.name && (
                                            <div className="text-sm text-red-500">
                                                {errors.name}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col col-span-2">
                                        <label
                                            className="label-form"
                                            htmlFor="email"
                                        >
                                            E-mail
                                        </label>
                                        <input
                                            id="email"
                                            type="text"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                            className="input-form"
                                        />
                                        {errors.email && (
                                            <div className="text-red-500">
                                                {errors.email}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="telefone"
                                        >
                                            Celular
                                        </label>
                                        <input
                                            id="telefone"
                                            type="text"
                                            value={maskPhone(data.telefone)}
                                            onChange={(e) =>
                                                setData(
                                                    "telefone",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                            maxLength={15}
                                        />
                                        {errors.telefone && (
                                            <div className="text-sm text-red-500">
                                                {errors.telefone}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="whatsapp"
                                        >
                                            Whatsapp
                                        </label>
                                        <input
                                            id="whatsapp"
                                            type="text"
                                            value={data.whatsapp}
                                            onChange={(e) =>
                                                setData(
                                                    "whatsapp",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                            maxLength={15}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-6">
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="password"
                                        >
                                            Senha
                                        </label>
                                        <div className="flex items-center justify-between relative">
                                            <input
                                                id="password"
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                value={data.password}
                                                onChange={(e) =>
                                                    setData(
                                                        "password",
                                                        e.target.value,
                                                    )
                                                }
                                                className="input-form w-full"
                                            />
                                            <div
                                                className="absolute right-2 cursor-pointer text-gray-500"
                                                onClick={() =>
                                                    setShowPassword(
                                                        (state) => !state,
                                                    )
                                                }
                                            >
                                                {showPassword ? (
                                                    <IoEyeOff size={24} />
                                                ) : (
                                                    <IoEye size={24} />
                                                )}
                                            </div>
                                        </div>
                                        {errors.password && (
                                            <div className="text-sm text-red-500">
                                                {errors.password}
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="password_confirmation"
                                        >
                                            Repita a senha
                                        </label>
                                        <div className="flex items-center justify-between relative">
                                            <input
                                                id="password_confirmation"
                                                type={
                                                    showPassword2
                                                        ? "text"
                                                        : "password"
                                                }
                                                value={
                                                    data.password_confirmation
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "password_confirmation",
                                                        e.target.value,
                                                    )
                                                }
                                                className="input-form w-full"
                                            />
                                            <div
                                                className="absolute right-2 cursor-pointer text-gray-500"
                                                onClick={() =>
                                                    setShowPassword2(
                                                        (state) => !state,
                                                    )
                                                }
                                            >
                                                {showPassword2 ? (
                                                    <IoEyeOff size={24} />
                                                ) : (
                                                    <IoEye size={24} />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-6">
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="role"
                                        >
                                            Função
                                        </label>
                                        <select
                                            id="role"
                                            value={data.role}
                                            onChange={(e) =>
                                                setData("role", e.target.value)
                                            }
                                            className="input-form"
                                        >
                                            <option value="">
                                                Selecione a função
                                            </option>
                                            {roleUser.map((role: any) => (
                                                <option
                                                    key={role?.value}
                                                    value={role?.value}
                                                >
                                                    {role?.label}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.role && (
                                            <div className="text-sm text-red-500">
                                                {errors.role}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="status"
                                        >
                                            Status
                                        </label>
                                        <select
                                            id="status"
                                            value={data.status}
                                            onChange={(e) =>
                                                setData(
                                                    "status",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                        >
                                            {statusUser.map((stat: any) => (
                                                <option
                                                    key={stat?.value}
                                                    value={stat?.value}
                                                >
                                                    {stat?.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
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
export default AddUsuario;
