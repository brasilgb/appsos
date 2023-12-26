import { Card, CardBody, CardContainer, CardFooter, CardHeader, CardHeaderContent } from "@/Components/Card";
import Kpis from "@/Components/Kpis";
import MessageDropDown from "@/Components/MessageDropDown";
import { BreadCrumbTop, HeaderContent, TitleTop } from "@/Components/PageTop";
import Boxorder from "@/Components/boxorder";
import AuthLayout from "@/Layouts/AuthLayout";
import { usePage } from "@inertiajs/react";
import React, { useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBasketShopping, FaCalendarDays } from "react-icons/fa6";
import { IoChatboxEllipses, IoConstruct, IoPeopleSharp } from "react-icons/io5";

const Home = ({ clientes, ordens, produtos, agendas, mensagens }: any) => {
    const { auth } = usePage().props;
    // const read = mensagens.filter

    return (
        <AuthLayout>
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
                <CardContainer className="!bg-transparent shadow-none">
                    <CardBody className="!bg-transparent">
                        <div className="grid md:grid-cols-4 gap-4 w-full">
                            <Kpis props={{
                                title: "Clientes",
                                value: clientes?.length,
                                url: "/clientes",
                                icon: <IoPeopleSharp size={45} color={"#57ac75"} />
                            }} />
                            <Kpis props={{
                                title: "Ordens",
                                value: ordens?.length,
                                url: "/ordens",
                                icon: <IoConstruct size={45} color={"#e67676"} />
                            }} />
                            <Kpis props={{
                                title: "Produtos/Peças",
                                value: produtos?.length,
                                url: "/produtos",
                                icon: <FaBasketShopping size={45} color={"#5b8bbb"} />
                            }} />
                            <Kpis props={{
                                title: "Agendamentos",
                                value: agendas?.length,
                                url: "/agendas",
                                icon: <FaCalendarDays size={45} color={"#ccac53"} />
                            }} />

                        </div>

                        <div className="grid md:grid-cols-3 gap-4 mt-3">
                            <Boxorder
                                ordens={ordens}
                                query={(fo: any) => fo.orcamento == 1}
                                title="Orçamentos gerados"
                                iconColor="#be427c"
                                titleColor="text-gray-600"
                            />
                            <Boxorder
                                ordens={ordens}
                                query={(fo: any) => fo.orcamento == 2}
                                title="Orçamentos aprovados"
                                iconColor="#57ac75"
                                titleColor="text-gray-600"
                            />
                            <Boxorder
                                ordens={ordens}
                                query={(fo: any) => fo.status == 5 || fo.status == 6}
                                title="Serviços concluídos"
                                iconColor="#5b8bbb"
                                titleColor="text-gray-600"
                            />
                        </div>
                    </CardBody>
                </CardContainer>
            </Card>
        </AuthLayout>
    );
}
export default Home;