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
import { maskMoney } from "@/Utils/mask";
import { Head, usePage } from "@inertiajs/react";
import moment from "moment";
import React, { Fragment } from "react";
import { GiAutoRepair } from "react-icons/gi";

const Servicos = ({ servicos }: any) => {
    const { flash } = usePage().props;
console.log(servicos);

    return (
        <AuthLayout>
            <Head title="Servicos" />
            <Card>
                <HeaderContent>
                    <TitleTop>
                        <GiAutoRepair size={30} />
                        <span className="ml-2">Servicos</span>
                    </TitleTop>
                    <BreadCrumbTop links={[{ url: null, label: "Servicos" }]} />
                </HeaderContent>
                <CardContainer>
                    <CardHeader>
                        <CardHeaderContent>
                            <InputSearch
                                placeholder={"Buscar serviço"}
                                url={"servicos.index"}
                            />
                        </CardHeaderContent>
                        <CardHeaderContent>
                            <AddButton
                                url={"/servicos/create"}
                                label={"Serviço"}
                            />
                        </CardHeaderContent>
                    </CardHeader>
                    <FlashMessage message={flash} />
                    <CardBody>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>#</TableHead>
                                    <TableHead>Serviço</TableHead>
                                    <TableHead>Marca</TableHead>
                                    <TableHead>Modelo</TableHead>
                                    <TableHead>Preço</TableHead>
                                    <TableHead>Cadastro</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {servicos?.data.map((servico: any) => (
                                    <Fragment key={servico.id}>
                                        <TableRow>
                                            <TableCell>
                                                {servico.id}
                                            </TableCell>
                                            <TableCell>
                                                {servico.servico}
                                            </TableCell>
                                            <TableCell>
                                                {servico.marca}
                                            </TableCell>
                                            <TableCell>
                                                {servico.modelo}
                                            </TableCell>
                                            <TableCell>
                                                R$ {maskMoney(`${servico.valor}`)}
                                            </TableCell>
                                            <TableCell>
                                                {moment(
                                                    servico.created_at,
                                                ).format("DD/MM/YYYY")}
                                            </TableCell>
                                            <TableCell className="flex items-center justify-end gap-2">
                                                <EditButton
                                                    url={route(
                                                        "servicos.edit",
                                                        servico.id,
                                                    )}
                                                />
                                                <DeleteButton
                                                    url="servicos.destroy"
                                                    param={servico.id}
                                                    identify={`o servico ${servico.descricao}`}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    </Fragment>
                                ))}
                            </TableBody>
                        </Table>
                    </CardBody>
                    <CardFooter>
                        <Pagination data={servicos} />
                    </CardFooter>
                </CardContainer>
            </Card>
        </AuthLayout>
    );
};
export default Servicos;
