import { Card, CardBody, CardContainer, CardFooter, CardHeader, CardHeaderContent } from "@/Components/Card";
import Kpis from "@/Components/Kpis";
import MessageDropDown from "@/Components/MessageDropDown";
import { BreadCrumbTop, HeaderContent, TitleTop } from "@/Components/PageTop";
import Boxorder from "@/Components/boxorder";
import AuthLayout from "@/Layouts/AuthLayout";
import { Head, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBasketShopping, FaCalendarDays } from "react-icons/fa6";
import { IoChatboxEllipses, IoConstruct, IoPeopleSharp } from "react-icons/io5";

const Home = ({ clientes, ordens, produtos, agendas, mensagens }: any) => {
    const { auth } = usePage().props;
    // const read = mensagens.filter

    return (
        <AuthLayout>
            <Head title="Dashboard" />
            <Card className="!p-4">
                <HeaderContent>
                    <TitleTop >
                        <AiOutlineDashboard size={30} />
                        <span className="ml-2">Dashboard</span>
                    </TitleTop>
                    <TitleTop>
                        {mensagens.length > 0
                            ? <MessageDropDown mensagens={mensagens} />
                            : <div className="text-red-300">
                                <IoChatboxEllipses size={22} />
                            </div>
                        }
                    </TitleTop>
                </HeaderContent>
                <CardContainer className="!bg-transparent bg-blue-600 shadow-none grid md:grid-cols-5 gap-6">
                        <Kpis props={{
                            title: "Clientes",
                            value: clientes.length,
                            url: "/ordens",
                            icon: <IoConstruct size={50} color="#2671e2" />
                        }} />
                        <Kpis props={{
                            title: "Ordens",
                            value: "85",
                            url: "/ordens",
                            icon: <IoConstruct size={50} color="" />
                        }} />
                        <Kpis props={{
                            title: "Ordens",
                            value: "85",
                            url: "/ordens",
                            icon: <IoConstruct size={50} color="" />
                        }} />
                        <Kpis props={{
                            title: "Ordens",
                            value: "85",
                            url: "/ordens",
                            icon: <IoConstruct size={50} color="" />
                        }} />
                        <Kpis props={{
                            title: "Ordens",
                            value: "85",
                            url: "/ordens",
                            icon: <IoConstruct size={50} color="" />
                        }} />
                </CardContainer>
            </Card>
        </AuthLayout>
    );
}
export default Home;