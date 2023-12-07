import { AddButton, DeleteButton, EditButton, OrderButton, WhatsAppButton } from "@/Components/Buttons";
import { Card, CardBody, CardContainer, CardFooter, CardHeader, CardHeaderContent } from "@/Components/Card";
import FlashMessage from "@/Components/FlashMessage";
import InputSearch from "@/Components/InputSearch";
import { BreadCrumbTop, HeaderContent, TitleTop } from "@/Components/PageTop";
import Pagination from "@/Components/Pagination";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/Table";
import AuthLayout from "@/Layouts/AuthLayout";
import { statusMessageByValue } from "@/Utils/functions";
import { usePage } from "@inertiajs/react";
import moment from "moment";
import React, { Fragment, useEffect } from "react";
import { IoChatboxEllipses } from "react-icons/io5";

const Mensagens = ({ mensagens, users }) => {
    const { flash } = usePage().props;
  
    const getUserName = (id:any) => {
        const nameuser = users.filter((i:any) => (i.id === id)).map((n:any) => (n.name));
        return nameuser;
    }

    return (
        <AuthLayout>
            <Card>
                <HeaderContent>
                    <TitleTop >
                        <IoChatboxEllipses size={30} />
                        <span className="ml-2">Mensagens</span>
                    </TitleTop>
                    <BreadCrumbTop
                        links={
                            [
                                { url: null, label: 'Mensagens' }
                            ]
                        }
                    />
                </HeaderContent>
                <CardContainer>
                    <CardHeader>
                        <CardHeaderContent>
                            <InputSearch placeholder={"Buscar por usuario"} url={"mensagens.index"} date />
                        </CardHeaderContent>
                        <CardHeaderContent>
                            <AddButton url={"/mensagens/create"} label={"Mensagens"} />
                        </CardHeaderContent>
                    </CardHeader>
                    <FlashMessage message={flash} />
                    <CardBody>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>#</TableHead>
                                    <TableHead>Remetente</TableHead>
                                    <TableHead>Destinatário</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Envio</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {mensagens.data.map((mensagem: any) => (
                                    <Fragment key={mensagem.id}>
                                        <TableRow>
                                            <TableCell>{mensagem.id}</TableCell>
                                            <TableCell>{getUserName(mensagem.remetente)}</TableCell>
                                            <TableCell>{getUserName(mensagem.destinatario)}</TableCell>
                                            <TableCell>{statusMessageByValue(mensagem.status)}</TableCell>
                                            <TableCell>{moment(mensagem.created_at).format("DD/MM/YYYY HH:mm")}</TableCell>
                                            <TableCell className="flex items-center justify-end gap-2">
                                                <EditButton url={route('mensagens.edit', mensagem.id)} />
                                                <DeleteButton url="mensagens.destroy" param={mensagem.id} identify={`a mensagem de ${getUserName(mensagem.remetente)}`} />
                                            </TableCell>
                                        </TableRow>
                                    </Fragment>
                                ))}
                            </TableBody>
                        </Table>
                    </CardBody>
                    <CardFooter>
                        <Pagination data={mensagens} />
                    </CardFooter>
                </CardContainer>
            </Card>

        </AuthLayout>
    );
}
export default Mensagens;