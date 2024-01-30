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
import { usePage } from "@inertiajs/react";
import moment from "moment";
import React, { Fragment } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";

const Produtos = ({ produtos }: any) => {
    const { flash } = usePage().props;

    return (
        <AuthLayout>
            <Card>
                <HeaderContent>
                    <TitleTop>
                        <FaBasketShopping size={30} />
                        <span className="ml-2">Produtos</span>
                    </TitleTop>
                    <BreadCrumbTop links={[{ url: null, label: "Produtos" }]} />
                </HeaderContent>
                <CardContainer>
                    <CardHeader>
                        <CardHeaderContent>
                            <InputSearch
                                placeholder={"Buscar produto"}
                                url={"produtos.index"}
                            />
                        </CardHeaderContent>
                        <CardHeaderContent>
                            <AddButton
                                url={"/produtos/create"}
                                label={"Produto"}
                            />
                        </CardHeaderContent>
                    </CardHeader>
                    <FlashMessage message={flash} />
                    <CardBody>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>#</TableHead>
                                    <TableHead>Descrição</TableHead>
                                    <TableHead>Estoque Inicial</TableHead>
                                    <TableHead>Preço</TableHead>
                                    <TableHead>Cadastro</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {produtos.data.map((produto: any) => (
                                    <Fragment key={produto.id}>
                                        <TableRow>
                                            <TableCell>
                                                {("000000" + produto.id).slice(
                                                    -6,
                                                )}
                                            </TableCell>
                                            <TableCell>
                                                {produto.descricao}
                                            </TableCell>
                                            <TableCell>
                                                {produto.estmaximo}
                                            </TableCell>
                                            <TableCell>
                                                {produto.valvenda}
                                            </TableCell>
                                            <TableCell>
                                                {moment(
                                                    produto.created_at,
                                                ).format("DD/MM/YYYY")}
                                            </TableCell>
                                            <TableCell className="flex items-center justify-end gap-2">
                                                <EditButton
                                                    url={route(
                                                        "produtos.edit",
                                                        produto.id,
                                                    )}
                                                />
                                                <DeleteButton
                                                    url="produtos.destroy"
                                                    param={produto.id}
                                                    identify={`o produto ${produto.descricao}`}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    </Fragment>
                                ))}
                            </TableBody>
                        </Table>
                    </CardBody>
                    <CardFooter>
                        <Pagination data={produtos} />
                    </CardFooter>
                </CardContainer>
            </Card>
        </AuthLayout>
    );
};
export default Produtos;
