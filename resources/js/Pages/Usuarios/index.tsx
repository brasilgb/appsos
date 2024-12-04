import {
    AddButton,
    DeleteButton,
    EditButton,
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
import {
    roleUserByValue,
    statusUserByValue,
} from "@/Utils/functions";
import { Head, usePage } from "@inertiajs/react";
import moment from "moment";
import React, { Fragment } from "react";
import { IoPerson } from "react-icons/io5";

const Usuarios = ({ usuarios }: any) => {
    const { flash, auth } = usePage().props as any;

    const colorStatus = (status: number) => {
        switch (status) {
            case 1:
                return "bg-green-600/50 border border-green-600 text-green-800 text-xs uppercase";
            case 2:
                return "bg-red-600/50 border border-red-600 text-red-800 text-xs uppercase";
        }
    }

    return (
        <AuthLayout>            
        <Head title="Usuários" />
            <Card>
                <HeaderContent>
                    <TitleTop>
                        <IoPerson size={30} />
                        <span className="ml-2">Usuários</span>
                    </TitleTop>
                    <BreadCrumbTop links={[{ url: null, label: "Usuários" }]} />
                </HeaderContent>
                <CardContainer>
                    <CardHeader>
                        <CardHeaderContent>
                            <InputSearch
                                placeholder={"Buscar usuário"}
                                url={"usuarios.index"}
                            />
                        </CardHeaderContent>
                        <CardHeaderContent>
                            <AddButton
                                url={"/usuarios/create"}
                                label={"Usuário"}
                                disabled={auth.user.role === 1 ? false : true}
                            />
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
                                    <TableHead>Função</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Cadastro</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {usuarios.data.map((usuario: any) => (
                                    <Fragment key={usuario.id}>
                                        <TableRow>
                                            <TableCell>{usuario.id}</TableCell>
                                            <TableCell>
                                                {usuario.name}
                                            </TableCell>
                                            <TableCell>
                                                {usuario.telefone}
                                            </TableCell>
                                            <TableCell>
                                                {roleUserByValue(usuario.role)}
                                            </TableCell>
                                            <TableCell>
                                            <span className={`px-3 py-1  rounded-full font-medium ${colorStatus(usuario.status)}`}>
                                                {statusUserByValue(
                                                    usuario.status,
                                                )}
                                                </span>
                                            </TableCell>
                                            <TableCell>
                                                {moment(
                                                    usuario.created_at,
                                                ).format("DD/MM/YYYY")}
                                            </TableCell>
                                            <TableCell className="flex items-center justify-end gap-2">
                                                {/* <WhatsAppButton url="" /> */}
                                                <EditButton
                                                    url={route(
                                                        "usuarios.edit",
                                                        usuario.id,
                                                    )}
                                                />
                                                <DeleteButton
                                                    url="usuarios.destroy"
                                                    param={usuario.id}
                                                    identify={`o usuário ${usuario.name}`}
                                                    disabled={auth.user.role === 1 ? false : true}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    </Fragment>
                                ))}
                            </TableBody>
                        </Table>
                    </CardBody>
                    <CardFooter>
                        <Pagination data={usuarios} />
                    </CardFooter>
                </CardContainer>
            </Card>
        </AuthLayout>
    );
};
export default Usuarios;
