import {
    AddButton,
    DeleteButton,
    EditButton,
    ImagesAppButton,
    OrderButton,
    PrintButton,
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
import { usePage } from "@inertiajs/react";
import moment from "moment";
import React, { Fragment } from "react";
import { IoConstruct } from "react-icons/io5";

const Ordens = ({ ordens }: any) => {
    const { flash } = usePage().props;

    return (
        <AuthLayout>
            <Card>
                <HeaderContent>
                    <TitleTop>
                        <IoConstruct size={30} />
                        <span className="ml-2">Ordens</span>
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
                            <AddButton url={"/ordens/create"} label={"Ordem"} />
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
                                                {("000000" + ordem.id).slice(
                                                    -6,
                                                )}
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
                                                {statusOrdemByValue(
                                                    ordem.status,
                                                )}
                                            </TableCell>
                                            <TableCell>
                                                {ordem.dtentrega
                                                    ? moment(
                                                          ordem.updated_at,
                                                      ).format("DD/MM/YYYY")
                                                    : "__/__/____"}
                                            </TableCell>
                                            <TableCell className="flex items-center justify-end gap-2">
                                                <ImagesAppButton
                                                    url={`${ordem.id}`}
                                                />
                                                <PrintButton
                                                    url={`${ordem.id}`}
                                                    status={ordem.status}
                                                />
                                                <EditButton
                                                    url={route(
                                                        "ordens.edit",
                                                        ordem.id,
                                                    )}
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
                        <Pagination data={ordens} />
                    </CardFooter>
                </CardContainer>
            </Card>
        </AuthLayout>
    );
};
export default Ordens;
