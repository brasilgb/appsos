import { useEffect, useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { CgSpinnerTwo } from "react-icons/cg";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import React from "react";
import { IoEyeOffOutline, IoEyeOutline, IoPerson } from "react-icons/io5";
import ClockTime from "@/Utils/ClockTime";

export default function Register() {
    const { confemp, confger, userexist } = usePage().props;
    const [passwordView, setPasswordView] = useState<boolean>(false);
    const [passwordView2, setPasswordView2] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const { data, setData, post, get, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e: any) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 200);
        post(route("register"));
    };

    useEffect(() => {
        const getRedirectLogin = () => {
            if (userexist[0]) {
                get("/");
            }
        };
        getRedirectLogin();
    }, []);

    return (
        <GuestLayout>
            <Head title="Register" />
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
                <div className="w-full sm:max-w-md mx-4 p-4 bg-gradient-to-t from-gray-300 via-white to-gray-200 shadow-md overflow-hidden rounded-md border border-white">
                    <div className=" p-4">
                        <div className="flex flex-col items-center justify-center mb-10">
                            <div className="flex items-start justify-between mb-6 border-b border-gray-200 w-full">
                                <h1 className="text-sm font-medium text-blue-dark">
                                    Registrar administrador
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
                                <label htmlFor="name" className="label-form">
                                    Nome
                                </label>
                                <div className="relative flex items-center justify-between">
                                    <input
                                        id="name"
                                        type="text"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        className="input-form w-full"
                                    />
                                    <div className="absolute right-1">
                                        <IoPerson size={22} color="#4b5563" />
                                    </div>
                                </div>
                                {errors.name && (
                                    <div className="text-red-500 text-sm">
                                        {errors.name}
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col mt-4">
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
                            <div className="mt-4 flex flex-col">
                                <label
                                    htmlFor="password_confirmation"
                                    className="label-form"
                                >
                                    Senha
                                </label>
                                <div className="relative flex items-center justify-between">
                                    <input
                                        id="password_confirmation"
                                        type={
                                            passwordView2 ? "text" : "password"
                                        }
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        className="input-form w-full"
                                        onChange={(e) =>
                                            setData(
                                                "password_confirmation",
                                                e.target.value,
                                            )
                                        }
                                    />
                                    <div
                                        className="absolute right-1 cursor-pointer"
                                        onClick={() =>
                                            setPasswordView2(!passwordView2)
                                        }
                                    >
                                        {passwordView2 ? (
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
                                {errors.password_confirmation && (
                                    <div className="text-red-500 text-sm">
                                        {errors.password_confirmation}
                                    </div>
                                )}
                            </div>

                            <div className="mt-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <Link
                                            href={route("login")}
                                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Retornar ao login
                                        </Link>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <button
                                        className="btn-login"
                                        disabled={processing}
                                    >
                                        {loading ? (
                                            <CgSpinnerTwo size={24} />
                                        ) : (
                                            <span>Registrar</span>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
