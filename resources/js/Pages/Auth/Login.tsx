import { useEffect, useState } from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import ClockTime from "@/Utils/ClockTime";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

export default function Login({ status, canResetPassword }) {
    const { logemp } = usePage().props;

    const [passwordView, setPasswordView] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e: any) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Acesso ao Sistema" />
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            <div className="w-1/4 bg-gray-50 border border-white shadow-md rounded-md p-4">
                <div className="flex flex-col items-center justify-center mb-20">
                    <div className="flex items-start justify-between mb-6 border-b border-gray-200 w-full">
                        <h1 className="text-sm font-medium text-blue-dark">
                            Faça login em sua conta
                        </h1>
                        <span className="text-sm font-medium text-blue-dark">
                            <ClockTime />
                        </span>
                    </div>
                    <div className="w-44 flex items-center justify-center">
                        <img src={`/storage/images/${logemp[0].logo}`} alt={`${logemp[0].empresa}`} className="" />
                    </div>
                </div>
                <form onSubmit={submit}>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="label-form">E-mail</label>
                        <input
                            id="email"
                            type="text"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="input-form"
                        />
                        {errors.email && <div className="text-red-500">{errors.email}</div>}
                    </div>

                    <div className="mt-4 flex flex-col">
                        <label htmlFor="password" className="label-form">Senha</label>
                        <div className="relative flex items-center justify-between">
                            <input
                                id="password"
                                type={passwordView ? 'text' : 'password'}
                                name="password"
                                value={data.password}
                                className="input-form w-full"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <div
                                className="absolute right-1 cursor-pointer"
                                onClick={() => setPasswordView(!passwordView)}
                            >
                                {passwordView ? (
                                    <IoEyeOffOutline size={22} color="#4b5563" />
                                ) : (
                                    <IoEyeOutline size={22} color="#4b5563" />
                                )}
                            </div>
                        </div>
                        {errors.password && <div className="text-red-500">{errors.password}</div>}

                    </div>

                    <div className="flex items-center justify-between mt-8">
                        <button
                            className="btn-login"
                            disabled={processing}>
                            Entrar
                        </button>
                    </div>

                </form>
            </div>

        </GuestLayout>
    );
}
