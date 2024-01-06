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

                    </CardBody>
                </CardContainer>
            </Card>
        </AuthLayout>
    );
}
export default Home;