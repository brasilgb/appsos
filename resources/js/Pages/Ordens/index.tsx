import {
    AddButton,
    DeleteButton,
    EditButton,
    ImagesAppButton,
    OrderButton,
    PrintButton,
    WhatsAppButton,
} from "@/Components/Buttons";
import {
    Card,
    CardBody,
    CardContainer,
    CardFooter,
    CardHeader,
    CardHeaderContent,
} from "@/Components/Card";
import FlashMessage from "@/Components/FlashMessage";
import InputSearch from "@/Components/InputSearch";
import { BreadCrumbTop, HeaderContent, TitleTop } from "@/Components/PageTop";
import Pagination from "@/Components/Pagination";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/Table";
import AuthLayout from "@/Layouts/AuthLayout";
import { statusOrdemByValue } from "@/Utils/functions";
import { Head, Link, usePage } from "@inertiajs/react";
import moment from "moment";
import React, { Fragment, useEffect, useState } from "react";
import { IoConstruct, IoPrint } from "react-icons/io5";

const Ordens = ({ ordens, whats, printers }: any) => {
    const { flash, ziggy } = usePage().props;
    const { oc } = (ziggy as any).query

    const stylesOrderStatus = (value: any) => {
        switch (value) {
            case 1:
                return "bg-gray-300/50 border border-gray-300 text-gray-500 text-xs uppercase";;
            case 2:
                return "bg-cyan-600/50 border border-cyan-600 text-cyan-800 text-xs uppercase";
            case 3:
                return "bg-orange-600/50 border border-orange-600 text-orange-800 text-xs uppercase";
            case 4:
                return "bg-sky-600/50 border border-sky-600 text-sky-800 text-xs uppercase";
            case 5:
                return "bg-red-600/50 border border-red-600 text-red-800 text-xs uppercase";
            case 6:
                return "bg-green-600/50 border border-green-600 text-green-800 text-xs uppercase";
            case 7:
                return "bg-green-600/50 border border-green-600 text-green-800 text-xs uppercase";
            case 8:
                return "bg-blue-600/50 border border-blue-600 text-blue-800 text-xs uppercase";
        }
    };
//     case 'active':
//         return "bg-green-600/50 border border-green-600 text-green-800 text-xs uppercase";
//     case 'waiting':
//         return "bg-sky-600/50 border border-sky-600 text-sky-800 text-xs uppercase";
//     case 'suspended':
//         return "bg-orange-600/50 border border-orange-600 text-orange-800 text-xs uppercase";
//     case 'canceled':
//         return "bg-red-600/50 border border-red-600 text-red-800 text-xs uppercase";
// }
    return (
        <AuthLayout>
            <Head title="Ordens" />
            <Card>
                <HeaderContent>
                    <TitleTop>
                        <IoConstruct size={30} />
                        <span className="ml-2 text-">Ordens</span>
                    </TitleTop>
                    <BreadCrumbTop links={[{ url: null, label: "Ordens" }]} />
                </HeaderContent>
                <CardContainer>
                    <CardHeader>
                        <CardHeaderContent>
                            <InputSearch
                                placeholder={"Buscar ordem de serviço"}
                                url={"ordens.index"}
                            />
                        </CardHeaderContent>
                        <CardHeaderContent>
                            <AddButton url={route('ordens.create')} label={"Ordem"} />
                        </CardHeaderContent>
                    </CardHeader>
                    <FlashMessage message={flash} />
                    <CardBody>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>#</TableHead>
                                    <TableHead>Nome</TableHead>
                                    <TableHead>Telefone</TableHead>
                                    <TableHead>Recebimento</TableHead>
                                    <TableHead>Equipamento</TableHead>
                                    <TableHead>Modelo</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Entrega</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {ordens.data.map((ordem: any) => (
                                    <Fragment key={ordem.id}>
                                        <TableRow>
                                            <TableCell>
                                                {ordem.id}
                                            </TableCell>
                                            <TableCell>
                                                    {ordem.cliente.nome}
                                            </TableCell>
                                            <TableCell>
                                                {ordem.cliente.telefone}
                                            </TableCell>
                                            <TableCell>
                                                {moment(
                                                    ordem.created_at,
                                                ).format("DD/MM/YYYY")}
                                            </TableCell>
                                            <TableCell>
                                                {ordem.equipamento}
                                            </TableCell>
                                            <TableCell>
                                                {ordem.modelo}
                                            </TableCell>
                                            <TableCell>
                                                <span className={`px-3 py-1  rounded-full font-medium ${stylesOrderStatus(ordem.status)}`}>
                                                {statusOrdemByValue(
                                                    ordem.status,
                                                )}
                                                </span>
                                            </TableCell>
                                            <TableCell>
                                                {ordem.dtentrega !=
                                                    "0000-00-00 00:00:00"
                                                    ? ordem.dtentrega !== null
                                                        ? moment(
                                                            ordem.dtentrega,
                                                        ).format(
                                                            "DD/MM/YYYY HH:mm",
                                                        )
                                                        : "__/__/____"
                                                    : "__/__/____"}
                                            </TableCell>
                                            <TableCell className="flex items-center justify-end gap-2">
                                                <WhatsAppButton
                                                    url={`https://api.whatsapp.com/send?phone=${encodeURIComponent(ordem.cliente.whatsapp)}&text=${encodeURIComponent(ordem.status == 6 || ordem.status == 7 ? whats?.concluido : ordem.status == 3 ? whats?.orcamento : "")}`}
                                                />
                                                <ImagesAppButton
                                                    url={`${ordem.id}`}
                                                />
                                                {printers ? (
                                                    <PrintButton
                                                        url={`${ordem.id}`}
                                                        status={ordem.status}
                                                    />
                                                ) : (
                                                    <div
                                                        title="Preencha os dados de impressão em configurações > impressões"
                                                        className="py-1.5 px-3 rounded-md shadow bg-gray-200"
                                                    >
                                                        <IoPrint size={18} />
                                                    </div>
                                                )}
                                                <EditButton
                                                    url={`/ordens/${ordem.id}`}
                                                    param={ordens.current_page}
                                                />
                                                <DeleteButton
                                                    url="ordens.destroy"
                                                    param={ordem.id}
                                                    identify={`a ordem ${ordem.id}`}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    </Fragment>
                                ))}
                            </TableBody>
                        </Table>
                    </CardBody>
                    <CardFooter>
                        <Pagination data={ordens} oc={oc} />
                    </CardFooter>
                </CardContainer>
            </Card>
        </AuthLayout>
    );
};
export default Ordens;
