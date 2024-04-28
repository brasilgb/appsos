import HomeInfo from "@/Components/HomeInfo";
import Kpis from "@/Components/Kpis";
import MessageDropDown from "@/Components/MessageDropDown";
import { HeaderContent, TitleTop } from "@/Components/PageTop";
import AuthLayout from "@/Layouts/AuthLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import {
    IoBasket,
    IoCalendar,
    IoChatboxEllipses,
    IoConstruct,
    IoPeople,
} from "react-icons/io5";

const Home = ({ dashdata, statusorder }: any) => {

console.log(statusorder?.messages);

    return (
        <AuthLayout>
            <Head title="Dashboard" />
            <div className="flex-col w-full md:p-4">
                <HeaderContent>
                    <TitleTop>
                        <AiOutlineDashboard size={30} />
                        <span className="ml-2">Dashboard</span>
                    </TitleTop>
                    <TitleTop>
                        {dashdata.nummen ? (
                            <MessageDropDown mensagens={statusorder?.messages} />
                        ) : (
                            <div className="text-red-300">
                                <IoChatboxEllipses size={34} />
                            </div>
                        )}
                    </TitleTop>
                </HeaderContent>
                <div className="grid md:md:grid-cols-5 sm:grid-cols-2 gap-6">
                    <Kpis
                        props={{
                            title: "Clientes",
                            value: dashdata.numcli,
                            url: "/clientes",
                            icon: <IoPeople size={50} color="#2671e2" />,
                        }}
                    />
                    <Kpis
                        props={{
                            title: "Ordens",
                            value: dashdata.numord,
                            url: "/ordens",
                            icon: <IoConstruct size={50} color="#CA0156" />,
                        }}
                    />
                    <Kpis
                        props={{
                            title: "Produtos",
                            value: dashdata.numpro,
                            url: "/produtos",
                            icon: <IoBasket size={50} color="#EEA917" />,
                        }}
                    />
                    <Kpis
                        props={{
                            title: "Agendamentos",
                            value: dashdata.numage,
                            url: "/agendas",
                            icon: <IoCalendar size={50} color="#0D9488" />,
                        }}
                    />
                    <Kpis
                        props={{
                            title: "Mensagens",
                            value: dashdata.nummen,
                            url: "/mensagens",
                            icon: (
                                <IoChatboxEllipses size={50} color="#3FA1D4" />
                            ),
                        }}
                    />
                </div>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-4">
                    <div className="bg-gray-50 rounded shadow-sm p-2">
                        <div className="border-b mb-2">
                            <h1 className="text-sm text-gray-500 uppercase font-medium">Orçamentos gerados</h1>
                        </div>
                        <div className="grid md:grid-cols-5 gap-2 text-center">
                            {statusorder?.gerados?.map((gerado: any, idx: number) => (
                                <Link
                                    href={`ordens/${gerado.id}`}
                                    key={idx}
                                    className="bg-rose-600 text-sm font-medium text-gray-50 rounded shadow-sm border border-white py-1">
                                    {("000000" + gerado.id).slice(-6)}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="bg-gray-50 rounded shadow-sm p-2">
                        <div className="border-b mb-2">
                            <h1 className="text-sm text-gray-500 uppercase font-medium">Orçamentos aprovados</h1>
                        </div>
                        <div className="grid md:grid-cols-5 gap-2 text-center">
                            {statusorder?.aprovados?.map((gerado: any, idx: number) => (
                                <Link
                                    href={`ordens/${gerado.id}`}
                                    key={idx}
                                    className="bg-blue-500 text-sm font-medium text-gray-50 rounded shadow-sm border border-white py-1">
                                    {("000000" + gerado.id).slice(-6)}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="bg-gray-50 rounded shadow-sm p-2">
                        <div className="border-b mb-2">
                            <h1 className="text-sm text-gray-500 uppercase font-medium">Serviços concluídos <span className="text-cyan-600">(CA)</span> <span className="text-amber-500">(CN)</span></h1>
                        </div>
                        <div className="grid md:grid-cols-5 gap-2 text-center">
                            {statusorder?.concluidosca?.map((gerado: any, idx: number) => (
                                <Link
                                    href={`ordens/${gerado.id}`}
                                    key={idx} className="bg-cyan-600 text-sm font-medium text-gray-50 rounded shadow-sm border border-white py-1">
                                    {("000000" + gerado.id).slice(-6)}
                                </Link>
                            ))}
                            {statusorder?.concluidoscn?.map((gerado: any, idx: number) => (
                                <Link
                                    href={`ordens/${gerado.id}`}
                                    key={idx} className="bg-amber-500 text-sm font-medium text-gray-50 rounded shadow-sm border border-white py-1">
                                    {("000000" + gerado.id).slice(-6)}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
};
export default Home;
