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
import { Head, usePage } from "@inertiajs/react";
import moment from "moment";
import { Fragment } from "react";
import { AiFillFileMarkdown } from "react-icons/ai";

const Servicos = ({ servicos }: any) => {
    const { flash } = usePage().props;

    return (
        <AuthLayout>
            <Head title="Serviços" />
            <Card>
                <HeaderContent>
                    <TitleTop>
                        <AiFillFileMarkdown size={30} />
                        <span className="ml-2">Servicos</span>
                    </TitleTop>
                    <BreadCrumbTop
                        links={[{ url: null, label: "Serviços" }]}
                    />
                </HeaderContent>
                <CardContainer>
                    <CardHeader>
                        <CardHeaderContent>
                            <InputSearch
                                placeholder={"Buscar por serviço"}
                                url={"servicos.index"}
                            />
                        </CardHeaderContent>
                        <CardHeaderContent>
                            <AddButton
                                url={"/servicos/create"}
                                label={"Servicos"}
                            />
                        </CardHeaderContent>
                    </CardHeader>
                    <FlashMessage message={flash} />
                    <CardBody>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>#</TableHead>
                                    <TableHead>Equipamento</TableHead>
                                    <TableHead>Servico</TableHead>
                                    <TableHead>Cadastro</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {servicos.data.map((servico: any) => (
                                    <Fragment key={servico.id}>
                                        <TableRow>
                                            <TableCell>{servico.id}</TableCell>
                                            <TableCell>
                                                {servico.equipamento}
                                            </TableCell>
                                            <TableCell>
                                                {servico.servico}
                                            </TableCell>
                                            <TableCell>
                                                {moment(
                                                    servico.created_at,
                                                ).format("DD/MM/YYYY HH:mm")}
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
                                                    identify={`a servico de ${servico.servico}`}
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
