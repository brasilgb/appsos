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
import { Head, usePage } from "@inertiajs/react";
import moment from "moment";
import React, { Fragment } from "react";
import { AiFillFileMarkdown } from "react-icons/ai";
import {
    IoChatboxEllipses
} from "react-icons/io5";

const Marcas = ({ marcas }: any) => {
    const { flash } = usePage().props;

    return (
        <AuthLayout>
            <Head title="Marcas" />
            <Card>
                <HeaderContent>
                    <TitleTop>
                        <AiFillFileMarkdown size={30} />
                        <span className="ml-2">Marcas</span>
                    </TitleTop>
                    <BreadCrumbTop
                        links={[{ url: null, label: "Marcas" }]}
                    />
                </HeaderContent>
                <CardContainer>
                    <CardHeader>
                        <CardHeaderContent>
                            <InputSearch
                                placeholder={"Buscar por marca"}
                                url={"marcas.index"}
                            />
                        </CardHeaderContent>
                        <CardHeaderContent>
                            <AddButton
                                url={"/marcas/create"}
                                label={"Marcas"}
                            />
                        </CardHeaderContent>
                    </CardHeader>
                    <FlashMessage message={flash} />
                    <CardBody>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>#</TableHead>
                                    <TableHead>Marca</TableHead>
                                    <TableHead>Cadastro</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {marcas.data.map((marca: any) => (
                                    <Fragment key={marca.id}>
                                        <TableRow>
                                            <TableCell>{marca.id}</TableCell>
                                            <TableCell>
                                                {marca.marca}
                                            </TableCell>
                                            <TableCell>
                                                {moment(
                                                    marca.created_at,
                                                ).format("DD/MM/YYYY HH:mm")}
                                            </TableCell>
                                            <TableCell className="flex items-center justify-end gap-2">
                                                <EditButton
                                                    url={route(
                                                        "marcas.edit",
                                                        marca.id,
                                                    )}
                                                />
                                                <DeleteButton
                                                    url="marcas.destroy"
                                                    param={marca.id}
                                                    identify={`a marca de ${marca.marca}`}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    </Fragment>
                                ))}
                            </TableBody>
                        </Table>
                    </CardBody>
                    <CardFooter>
                        <Pagination data={marcas} />
                    </CardFooter>
                </CardContainer>
            </Card>
        </AuthLayout>
    );
};
export default Marcas;
