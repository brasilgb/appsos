import { useEffect, useState } from "react";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import ClockTime from "@/Utils/ClockTime";
import { IoEyeOffOutline, IoEyeOutline, IoPerson } from "react-icons/io5";
import { CgSpinnerTwo } from "react-icons/cg";

export default function Login({ status, canResetPassword }) {
    const { confemp, confger, userexist } = usePage().props;

    const [passwordView, setPasswordView] = useState<boolean>(false);
    const [passwordForgout, setPasswordForgout] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e: any) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 200);
        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Acesso ao Sistema" />
            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <div
                className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center"
                style={{
                    backgroundColor: confger[0]?.bgcolor
                        ? confger[0]?.bgcolor
                        : "#0161a0",
                    backgroundImage: `url("/storage/images/${confger[0]?.bgimage ? confger[0]?.bgimage : ""}")`,
                    backgroundSize: "cover",
                }}
            >
                <div className="md:w-1/4 w-full mx-4 bg-gray-50 shadow-md shadow-gray-800 rounded-md p-2 bg-opacity-80">
                    <div className="bg-gray-50 rounded-md p-4">
                        <div className="flex flex-col items-center justify-center mb-20">
                            <div className="flex items-start justify-between mb-6 border-b border-gray-200 w-full">
                                <h1 className="text-sm font-medium text-blue-dark">
                                    Faça login em sua conta
                                </h1>
                                <span className="text-sm font-medium text-blue-dark">
                                    <ClockTime />
                                </span>
                            </div>
                            <div className="w-32 flex items-center justify-center">
                                <img
                                    src={`/storage/images/${confemp[0]?.logo ? confemp[0]?.logo : "default.png"}`}
                                    alt={`${confemp[0]?.empresa}`}
                                    className=""
                                />
                            </div>
                        </div>
                        <form onSubmit={submit}>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="label-form">
                                    E-mail
                                </label>
                                <div className="relative flex items-center justify-between">
                                    <input
                                        id="email"
                                        type="text"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        className="input-form w-full"
                                    />
                                    <div className="absolute right-1">
                                        <IoPerson size={22} color="#4b5563" />
                                    </div>
                                </div>
                                {errors.email && (
                                    <div className="text-red-500 text-sm">
                                        {errors.email}
                                    </div>
                                )}
                            </div>

                            <div className="mt-4 flex flex-col">
                                <label
                                    htmlFor="password"
                                    className="label-form"
                                >
                                    Senha
                                </label>
                                <div className="relative flex items-center justify-between">
                                    <input
                                        id="password"
                                        type={
                                            passwordView ? "text" : "password"
                                        }
                                        name="password"
                                        value={data.password}
                                        className="input-form w-full"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                    />
                                    <div
                                        className="absolute right-1 cursor-pointer"
                                        onClick={() =>
                                            setPasswordView(!passwordView)
                                        }
                                    >
                                        {passwordView ? (
                                            <IoEyeOffOutline
                                                size={22}
                                                color="#4b5563"
                                            />
                                        ) : (
                                            <IoEyeOutline
                                                size={22}
                                                color="#4b5563"
                                            />
                                        )}
                                    </div>
                                </div>
                                {errors.password && (
                                    <div className="text-red-500 text-sm">
                                        {errors.password}
                                    </div>
                                )}
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <div>
                                    {!userexist[0] && (
                                        <Link
                                            href={route("register")}
                                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Registrar administrador
                                        </Link>
                                    )}
                                </div>
                                <div>
                                    {canResetPassword && (
                                        <span
                                            onClick={() =>
                                                setPasswordForgout(
                                                    !passwordForgout,
                                                )
                                            }
                                            className="cursor-pointer underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Esqueceu sua senha?
                                        </span>
                                    )}
                                </div>
                            </div>
                            {passwordForgout && (
                                <div className="bg-yellow-100 border border-red-200 rounded p-2 mt-4">
                                    <p className="text-xs text-center text-red-500">
                                        Solicite uma nova senha ao administrador
                                        do sistema
                                    </p>
                                </div>
                            )}
                            <div className="flex items-center justify-between mt-8">
                                <button
                                    className="btn-login"
                                    disabled={processing}
                                >
                                    {loading ? (
                                        <CgSpinnerTwo size={24} />
                                    ) : (
                                        <span>Entrar</span>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
