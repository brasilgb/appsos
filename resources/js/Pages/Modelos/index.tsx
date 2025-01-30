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

const Modelos = ({ modelos }: any) => {
    const { flash } = usePage().props;

    return (
        <AuthLayout>
            <Head title="Modelos" />
            <Card>
                <HeaderContent>
                    <TitleTop>
                        <AiFillFileMarkdown size={30} />
                        <span className="ml-2">Modelos</span>
                    </TitleTop>
                    <BreadCrumbTop
                        links={[{ url: null, label: "Modelos" }]}
                    />
                </HeaderContent>
                <CardContainer>
                    <CardHeader>
                        <CardHeaderContent>
                            <InputSearch
                                placeholder={"Buscar por marca"}
                                url={"modelos.index"}
                            />
                        </CardHeaderContent>
                        <CardHeaderContent>
                            <AddButton
                                url={"/modelos/create"}
                                label={"Modelos"}
                            />
                        </CardHeaderContent>
                    </CardHeader>
                    <FlashMessage message={flash} />
                    <CardBody>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>#</TableHead>
                                    <TableHead>Modelo</TableHead>
                                    <TableHead>Marca</TableHead>
                                    <TableHead>Cadastro</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {modelos.data.map((modelo: any) => (
                                    <Fragment key={modelo.id}>
                                        <TableRow>
                                            <TableCell>{modelo.id}</TableCell>
                                            <TableCell>
                                                {modelo.modelo}
                                            </TableCell>
                                            <TableCell>
                                                {modelo.marca.marca}
                                            </TableCell>
                                            <TableCell>
                                                {moment(
                                                    modelo.created_at,
                                                ).format("DD/MM/YYYY HH:mm")}
                                            </TableCell>
                                            <TableCell className="flex items-center justify-end gap-2">
                                                <EditButton
                                                    url={route(
                                                        "modelos.edit",
                                                        modelo.id,
                                                    )}
                                                />
                                                <DeleteButton
                                                    url="modelos.destroy"
                                                    param={modelo.id}
                                                    identify={`a modelo de ${modelo.marca}`}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    </Fragment>
                                ))}
                            </TableBody>
                        </Table>
                    </CardBody>
                    <CardFooter>
                        <Pagination data={modelos} />
                    </CardFooter>
                </CardContainer>
            </Card>
        </AuthLayout>
    );
};
export default Modelos;
