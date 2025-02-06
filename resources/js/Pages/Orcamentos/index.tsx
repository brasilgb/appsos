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

const Orcamentos = ({ orcamentos, servicos, marcas, modelos }: any) => {
    const { flash } = usePage().props;

    const getMarcas = (marca_id: number) => {
        return marcas.filter((mf: any) => (mf.id === marca_id)).map((m: any) => (m.marca));
    }
    const getModelos = (modelo_id: number) => {
        return modelos.filter((mf: any) => (mf.id === modelo_id)).map((m: any) => (m.modelo));
    }
    const getServicos = (servico_id: number) => {
        return servicos.filter((mf: any) => (mf.id === servico_id)).map((m: any) => (m.servico));
    }
    console.log(servicos);

    return (
        <AuthLayout>
            <Head title="Orçamentos" />
            <Card>
                <HeaderContent>
                    <TitleTop>
                        <GiAutoRepair size={30} />
                        <span className="ml-2">Orçamentos</span>
                    </TitleTop>
                    <BreadCrumbTop links={[{ url: null, label: "Orçamentos" }]} />
                </HeaderContent>
                <CardContainer>
                    <CardHeader>
                        <CardHeaderContent>
                            <InputSearch
                                placeholder={"Buscar orçamento"}
                                url={"orcamentos.index"}
                            />
                        </CardHeaderContent>
                        <CardHeaderContent>
                            <AddButton
                                url={"/orcamentos/create"}
                                label={"Orçamento"}
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
                                {orcamentos?.data.map((orcamento: any) => (
                                    <Fragment key={orcamento.id}>
                                        <TableRow>
                                            <TableCell>
                                                {orcamento.id}
                                            </TableCell>
                                            <TableCell>
                                                {getServicos(orcamento.servico)}
                                            </TableCell>
                                            <TableCell>
                                                {getMarcas(orcamento.marca)}
                                            </TableCell>
                                            <TableCell>
                                                {getModelos(orcamento.modelo)}
                                            </TableCell>
                                            <TableCell>
                                                R$ {maskMoney(`${orcamento.valor}`)}
                                            </TableCell>
                                            <TableCell>
                                                {moment(
                                                    orcamento.created_at,
                                                ).format("DD/MM/YYYY")}
                                            </TableCell>
                                            <TableCell className="flex items-center justify-end gap-2">
                                                <EditButton
                                                    url={route(
                                                        "orcamentos.edit",
                                                        orcamento.id,
                                                    )}
                                                />
                                                <DeleteButton
                                                    url="orcamentos.destroy"
                                                    param={orcamento.id}
                                                    identify={`o orcamento ${orcamento.descricao}`}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    </Fragment>
                                ))}
                            </TableBody>
                        </Table>
                    </CardBody>
                    <CardFooter>
                        <Pagination data={orcamentos} />
                    </CardFooter>
                </CardContainer>
            </Card>
        </AuthLayout>
    );
};
export default Orcamentos;