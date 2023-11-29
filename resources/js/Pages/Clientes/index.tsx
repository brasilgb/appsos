import { AddButton } from "@/Components/Buttons";
import { Card, CardBody, CardFooter, CardHeader, CardHeaderContent } from "@/Components/Card";
import InputSearch from "@/Components/InputSearch";
import { BreadCrumbTop, HeaderContent, TitleTop } from "@/Components/PageTop";
import Pagination from "@/Components/Pagination";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/Table";
import AuthLayout from "@/Layouts/AuthLayout";
import moment from "moment";
import React from "react";

const Clientes = ({ clientes }: any) => {

    const handleSearch = (e:any) => {
console.log(e)
    }
    return (
        <AuthLayout>
            <Card>

                <HeaderContent>
                    <TitleTop>
                        Clientes
                    </TitleTop>
                    <BreadCrumbTop
                        links={
                            [
                                { url: null, label: 'Clientes' }
                            ]
                        }
                    />
                </HeaderContent>
                <CardHeader>
                    <CardHeaderContent>
                        <InputSearch />
                    </CardHeaderContent>
                    <CardHeaderContent>
                        <AddButton url={"/clientes/create"} label={"Cliente"} />
                    </CardHeaderContent>
                </CardHeader>
                <CardBody>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Nome</TableHead>
                                <TableHead>E-mail</TableHead>
                                <TableHead>CPF</TableHead>
                                <TableHead>Telefone</TableHead>
                                <TableHead>Cadastro</TableHead>
                                <TableHead>-</TableHead>
                                <TableHead></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {clientes.data.map((cliente: any) => (
                                <TableRow>
                                    <TableCell>{cliente.nome}</TableCell>
                                    <TableCell>{cliente.email}</TableCell>
                                    <TableCell>{cliente.cpf}</TableCell>
                                    <TableCell>{cliente.telefone}</TableCell>
                                    <TableCell>{moment(cliente.created_at).format("DD/MM/YYYY")}</TableCell>
                                    <TableCell>-</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardBody>
                <CardFooter>
                    <Pagination data={clientes} />
                </CardFooter>
            </Card>

        </AuthLayout>
    );
}
export default Clientes;