import {
    AddButton,
    AgendaClienteButton,
    DeleteButton,
    EditButton,
    OrderButton,
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
import { maskCpfCnpj } from "@/Utils/mask";
import { Head, usePage } from "@inertiajs/react";
import moment from "moment";
import React, { Fragment } from "react";
import { IoPeopleSharp } from "react-icons/io5";

const Clientes = ({ clientes }: any) => {
    const { flash, ziggy } = usePage().props;
    const { cl } = (ziggy as any).query

    return (
        <AuthLayout>
            <Head title="Clientes" />
            <Card>
                <HeaderContent>
                    <TitleTop>
                        <IoPeopleSharp size={30} />
                        <span className="ml-2">Clientes</span>
                    </TitleTop>
                    <BreadCrumbTop links={[{ url: null, label: "Clientes" }]} />
                </HeaderContent>
                <CardContainer>
                    <CardHeader>
                        <CardHeaderContent>
                            <InputSearch
                                placeholder={"Buscar por nome ou cpf/cnpj"}
                                url={"clientes.index"}
                            />
                        </CardHeaderContent>
                        <CardHeaderContent>
                            <AddButton
                                url={"/clientes/create"}
                                label={"Cliente"}
                            />
                        </CardHeaderContent>
                    </CardHeader>
                    <FlashMessage message={flash} />
                    <CardBody>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-20">#</TableHead>
                                    <TableHead className="w-80">Nome</TableHead>
                                    <TableHead className="w-64">E-mail</TableHead>
                                    <TableHead>CPF</TableHead>
                                    <TableHead>Telefone</TableHead>
                                    <TableHead>Cadastro</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {clientes?.data.map((cliente: any) => (
                                    <Fragment key={cliente.id}>
                                        <TableRow>
                                            <TableCell>{cliente.id}</TableCell>
                                            <TableCell>
                                                {cliente.nome}
                                            </TableCell>
                                            <TableCell>
                                                {cliente.email}
                                            </TableCell>
                                            <TableCell>{maskCpfCnpj(cliente.cpf)}</TableCell>
                                            <TableCell>
                                                {cliente.telefone}
                                            </TableCell>
                                            <TableCell>
                                                {moment(
                                                    cliente.created_at,
                                                ).format("DD/MM/YYYY")}
                                            </TableCell>
                                            <TableCell className="flex items-center justify-end gap-2">
                                                <AgendaClienteButton
                                                    url={`/agendas?ac=${cliente.id}`}
                                                />
                                                <OrderButton
                                                    url={`/ordens?oc=${cliente.id}`}
                                                />
                                                <EditButton
                                                    url={route(
                                                        "clientes.edit",
                                                        cliente.id,
                                                    )}
                                                />
                                                <DeleteButton
                                                    url="clientes.destroy"
                                                    param={cliente.id}
                                                    identify={`o cliente ${cliente.nome}`}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    </Fragment>
                                ))}
                            </TableBody>
                        </Table>
                    </CardBody>
                    <CardFooter>
                        <Pagination data={clientes} />
                    </CardFooter>
                </CardContainer>
            </Card>
        </AuthLayout>
    );
};
export default Clientes;
