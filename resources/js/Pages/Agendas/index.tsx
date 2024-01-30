import {
    AddButton,
    DeleteButton,
    EditButton,
    OrderButton,
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
import { statusAgendaByValue } from "@/Utils/functions";
import { usePage } from "@inertiajs/react";
import moment from "moment";
import React, { Fragment } from "react";
import { FaCalendarDays } from "react-icons/fa6";

const Agendas = ({ agendas }: any) => {
    const { flash } = usePage().props;

    return (
        <AuthLayout>
            <Card>
                <HeaderContent>
                    <TitleTop>
                        <FaCalendarDays size={30} />
                        <span className="ml-2">Agenda</span>
                    </TitleTop>
                    <BreadCrumbTop
                        links={[{ url: null, label: "Agendamentos" }]}
                    />
                </HeaderContent>
                <CardContainer>
                    <CardHeader>
                        <CardHeaderContent>
                            <InputSearch
                                placeholder={"Buscar por cliente"}
                                url={"agendas.index"}
                                date
                            />
                        </CardHeaderContent>
                        <CardHeaderContent>
                            <AddButton
                                url={"/agendas/create"}
                                label={"Agendamento"}
                            />
                        </CardHeaderContent>
                    </CardHeader>
                    <FlashMessage message={flash} />
                    <CardBody>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>#</TableHead>
                                    <TableHead>Cliente</TableHead>
                                    <TableHead>Período</TableHead>
                                    <TableHead>Técnico</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {agendas.data.map((agenda: any) => (
                                    <Fragment key={agenda.id}>
                                        <TableRow>
                                            <TableCell>{agenda.id}</TableCell>
                                            <TableCell>
                                                {agenda.cliente.nome}
                                            </TableCell>
                                            <TableCell>
                                                {moment(agenda.datahora).format(
                                                    "DD/MM/YYYY HH:mm:ss",
                                                )}
                                            </TableCell>
                                            <TableCell>
                                                {agenda.tecnico}
                                            </TableCell>
                                            <TableCell>
                                                {statusAgendaByValue(
                                                    agenda.status,
                                                )}
                                            </TableCell>
                                            <TableCell className="flex items-center justify-end gap-2">
                                                <EditButton
                                                    url={route(
                                                        "agendas.edit",
                                                        agenda.id,
                                                    )}
                                                />
                                                <DeleteButton
                                                    url="agendas.destroy"
                                                    param={agenda.id}
                                                    identify={`o agendamento para ${agenda.cliente.nome}`}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    </Fragment>
                                ))}
                            </TableBody>
                        </Table>
                    </CardBody>
                    <CardFooter>
                        <Pagination data={agendas} />
                    </CardFooter>
                </CardContainer>
            </Card>
        </AuthLayout>
    );
};
export default Agendas;
