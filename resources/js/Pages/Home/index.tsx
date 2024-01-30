import {
    Card,
    CardBody,
    CardContainer,
    CardFooter,
    CardHeader,
    CardHeaderContent,
} from "@/Components/Card";
import HomeInfo from "@/Components/HomeInfo";
import Kpis from "@/Components/Kpis";
import MessageDropDown from "@/Components/MessageDropDown";
import { BreadCrumbTop, HeaderContent, TitleTop } from "@/Components/PageTop";
import Boxorder from "@/Components/boxorder";
import AuthLayout from "@/Layouts/AuthLayout";
import { Head, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBasketShopping, FaCalendarDays } from "react-icons/fa6";
import {
    IoBasket,
    IoCalendar,
    IoChatboxEllipses,
    IoConstruct,
    IoPeople,
    IoPeopleSharp,
    IoPerson,
} from "react-icons/io5";

const Home = ({ clientes, ordens, produtos, agendas, mensagens }: any) => {
    const { auth } = usePage().props;
    // const read = mensagens.filter

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
                        {mensagens.length > 0 ? (
                            <MessageDropDown mensagens={mensagens} />
                        ) : (
                            <div className="text-red-300">
                                <IoChatboxEllipses size={22} />
                            </div>
                        )}
                    </TitleTop>
                </HeaderContent>
                <div className="grid md:grid-cols-5 gap-6">
                    <Kpis
                        props={{
                            title: "Clientes",
                            value: clientes.length,
                            url: "/clientes",
                            icon: <IoPeople size={50} color="#2671e2" />,
                        }}
                    />
                    <Kpis
                        props={{
                            title: "Ordens",
                            value: ordens.length,
                            url: "/ordens",
                            icon: <IoConstruct size={50} color="#CA0156" />,
                        }}
                    />
                    <Kpis
                        props={{
                            title: "Produtos",
                            value: produtos.length,
                            url: "/produtos",
                            icon: <IoBasket size={50} color="#EEA917" />,
                        }}
                    />
                    <Kpis
                        props={{
                            title: "Agendamentos",
                            value: agendas.length,
                            url: "/agendas",
                            icon: <IoCalendar size={50} color="#0D9488" />,
                        }}
                    />
                    <Kpis
                        props={{
                            title: "Mensagens",
                            value: agendas.length,
                            url: "/mensagens",
                            icon: (
                                <IoChatboxEllipses size={50} color="#3FA1D4" />
                            ),
                        }}
                    />
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <HomeInfo
                        icon={<IoConstruct color="#CA0156" />}
                        title="Orçamentos gerados"
                    >
                        <div>content</div>
                    </HomeInfo>
                    <HomeInfo
                        icon={<IoConstruct color="#0D9488" />}
                        title="Orçamentos aprovados"
                    >
                        <div>content</div>
                    </HomeInfo>
                    <HomeInfo
                        icon={<IoConstruct color="#3fa1d4" />}
                        title="Serviços concluídos"
                    >
                        <div>content</div>
                    </HomeInfo>
                </div>
            </div>
        </AuthLayout>
    );
};
export default Home;
