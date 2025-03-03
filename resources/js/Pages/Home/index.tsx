import HomeInfo from "@/Components/HomeInfo";
import Kpis from "@/Components/Kpis";
import MessageDropDown from "@/Components/MessageDropDown";
import { HeaderContent, TitleTop } from "@/Components/PageTop";
import PDV from "@/Components/PDV";
import { useAppContext } from "@/Contexts/appContext";
import AuthLayout from "@/Layouts/AuthLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import {
    IoBaseballOutline,
    IoBasket,
    IoCalendar,
    IoChatboxEllipses,
    IoConstruct,
    IoList,
    IoPeople,
} from "react-icons/io5";

const Home = ({ dashdata, statusorder }: any) => {
    const { setShowModalPDV, showModalPDV } = useAppContext();
    return (
        <>
            <PDV produtos={showModalPDV} />
            <AuthLayout>
                <Head title="Dashboard" />
                <div className="flex-col w-full md:p-4">
                    <HeaderContent>
                        <TitleTop>
                            <AiOutlineDashboard size={30} />
                            <span className="ml-2">Dashboard</span>
                        </TitleTop>
                        {/* <TitleTop>
                            <button
                                onClick={() => setShowModalPDV(true)}
                                className="px-6 bg-gradient-to-t from-gray-100 via-gray-50 to-gray-100 text-green-600 shadow-md rounded-md"
                            >
                                <IoBasket size={40} />
                            </button>
                        </TitleTop> */}
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
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mt-4">
                        <div className="bg-gray-50 rounded shadow-sm p-2">
                            <div className="border-b mb-2 text-gray-500 flex items-center justify-start gap-1">
                                <IoList size={20} />
                                <h1 className="text-sm uppercase font-medium">Orçamentos gerados</h1>
                            </div>
                            <div className="grid md:grid-cols-5 gap-2 text-center max-h-96 overflow-y-auto">
                                {statusorder?.gerados?.map((gerado: any, idx: number) => (
                                    <Link
                                        href={`ordens/${gerado.id}`}
                                        key={idx}
                                        className="bg-rose-600 hover:bg-rose-600/90 text-sm font-medium text-gray-50 rounded shadow border-2 border-gray-50 py-1">
                                        {gerado.id}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded shadow-sm p-2">
                            <div className="border-b mb-2 text-gray-500 flex items-center justify-start gap-1">
                                <IoList size={20} />
                                <h1 className="text-sm uppercase font-medium">Orçamentos aprovados</h1>
                            </div>
                            <div className="grid md:grid-cols-5 gap-2 text-center max-h-96 overflow-y-auto">
                                {statusorder?.aprovados?.map((gerado: any, idx: number) => (
                                    <Link
                                        href={`ordens/${gerado.id}`}
                                        key={idx}
                                        className="bg-blue-500 hover:bg-blue-500/90 text-sm font-medium text-gray-50 rounded shadow border-2 border-gray-50 py-1">
                                        {gerado.id}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded shadow-sm p-2">
                            <div className="border-b mb-2 text-gray-500 flex items-center justify-start gap-1">
                                <IoList size={20} />
                                <h1 className="text-sm uppercase font-medium">Serviços concluídos <span className="text-cyan-600">(CA)</span> <span className="text-amber-500">(CN)</span></h1>
                            </div>
                            <div className="grid md:grid-cols-5 gap-2 text-center max-h-96 overflow-y-auto">
                                {statusorder?.concluidosca?.map((gerado: any, idx: number) => (
                                    <Link
                                        href={`ordens/${gerado.id}`}
                                        key={idx} className="bg-cyan-600 hover:bg-cyan-600/90 text-sm font-medium text-gray-50 rounded shadow border-2 border-gray-50 py-1">
                                        {gerado.id}
                                    </Link>
                                ))}
                                {statusorder?.concluidoscn?.map((gerado: any, idx: number) => (
                                    <Link
                                        href={`ordens/${gerado.id}`}
                                        key={idx} className="bg-amber-500 hover:bg-amber-500/90 text-sm font-medium text-gray-50 rounded shadow border-2 border-gray-50 py-1">
                                        {gerado.id}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded shadow-sm p-2">
                            <div className="border-b mb-2 text-gray-500 flex items-center justify-start gap-1">
                                <IoList size={20} />
                                <h1 className="text-sm uppercase font-medium">Equipamento Entregue ({'<='}30 dias)</h1>
                            </div>
                            <div className="grid md:grid-cols-5 gap-2 text-center max-h-96 overflow-y-auto">
                                {dashdata?.trintadias?.map((gerado: any, idx: number) => (
                                    <Link
                                        href={`ordens?q=${gerado.id}&f=1`}
                                        key={idx} className="bg-amber-600 hover:bg-amber-600/90 text-sm font-medium text-gray-50 rounded shadow border-2 border-gray-50 py-1">
                                        {gerado.id}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mt-4">
                        <div className="bg-gray-50 rounded shadow-sm p-2">
                            <div className="border-b mb-2 text-gray-500 flex items-center justify-start gap-1">
                                <IoList size={20} />
                                <h1 className="text-sm uppercase font-medium">Visitas agendadas</h1>
                            </div>
                            <div className="grid md:grid-cols-5 gap-2 text-center max-h-96 overflow-y-auto">
                                {statusorder?.agendados?.map((agenda: any, idx: number) => (
                                    <Link
                                        href={`agendas/${agenda.id}`}
                                        key={idx} className="bg-rose-600 hover:bg-rose-600/90 text-sm font-medium text-gray-50 rounded shadow border-2 border-gray-50 py-1">
                                        {agenda.id}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </AuthLayout>
        </>
    );
};
export default Home;
