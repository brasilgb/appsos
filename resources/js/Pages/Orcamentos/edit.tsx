import { BackButton, SaveButton } from "@/Components/Buttons";
import {
    Card,
    CardBody,
    CardContainer,
    CardFooter,
    CardHeader,
    CardHeaderContent,
} from "@/Components/Card";
import FlashMessage from "@/Components/FlashMessage";
import { BreadCrumbTop, HeaderContent, TitleTop } from "@/Components/PageTop";
import AuthLayout from "@/Layouts/AuthLayout";
import { maskMoney, maskMoneyDot, unMask } from "@/Utils/mask";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { GiAutoRepair } from "react-icons/gi";

const EditOrcamento = ({ orcamento, servicos, marcas, modelos }: any) => {
    const { errors, flash } = usePage().props as any;

    const { data, setData, patch, progress, processing } = useForm({
        servico: orcamento?.servico,
        marca: orcamento?.marca,
        modelo: orcamento?.modelo,
        descricao: orcamento?.descricao,
        valor: orcamento?.valor,
        simples: orcamento?.simples
    });

    const [modeloFiltered, setModeloFiltered] = useState<any>(modelos.filter((f: any) => (f.marca_id == orcamento?.marca)));

    function handleModelo(marca: any) {
        const mf = modelos.filter((fm: any) => (parseInt(fm.marca_id) === parseInt(marca)));
        setModeloFiltered(mf);
    }

    useEffect(() => {
        setData('valor', maskMoneyDot(data.valor.toString()));
        return;
    }, [data]);

    function handleSubmit(e: any) {
        e.preventDefault();
        patch(route("orcamentos.update", orcamento?.id));
    }

    return (
        <AuthLayout>
            <Head title="Produtos" />
            <Card>
                <HeaderContent>
                    <TitleTop>
                        <GiAutoRepair size={30} />
                        <span className="ml-2">Orçamentos</span>
                    </TitleTop>
                    <BreadCrumbTop
                        links={[
                            { url: "/orcamentos", label: "Orçamentos" },
                            { url: null, label: "Adicionar orcamento" },
                        ]}
                    />
                </HeaderContent>
                <CardContainer>
                    <FlashMessage message={flash} />
                    <CardHeader>
                        <CardHeaderContent>
                            <BackButton url={"/orcamentos"} label={"Voltar"} />
                        </CardHeaderContent>
                        <CardHeaderContent>
                            <></>
                        </CardHeaderContent>
                    </CardHeader>
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <CardBody className=" border-y border-gray-100">
                            <div className="px-3 my-4">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="servico"
                                        >
                                            Serviço
                                        </label>
                                        <select
                                            id="servico"
                                            value={data.servico}
                                            onChange={(e: any) => {
                                                setData("servico", e.target.value)
                                                handleModelo(e.target.value)
                                            }
                                            }
                                            className="input-form"
                                        >
                                            <option value="">
                                                Selecione o serviço
                                            </option>
                                            {servicos.map((servico: any) => (
                                                <option
                                                    key={servico.id}
                                                    value={servico.id}
                                                >
                                                    {servico.servico}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="marca"
                                        >
                                            Marca de Produto
                                        </label>
                                        <select
                                            id="marca"
                                            value={data.marca}
                                            onChange={(e: any) => {
                                                setData("marca", e.target.value)
                                                handleModelo(e.target.value)
                                            }
                                            }
                                            className="input-form"
                                        >
                                            <option value="">
                                                Selecione a marca
                                            </option>
                                            {marcas.map((marca: any) => (
                                                <option
                                                    key={marca.id}
                                                    value={marca.id}
                                                >
                                                    {marca.marca}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.marca && (
                                            <div className="text-sm text-red-500">
                                                {errors.marca}
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="modelo"
                                        >
                                            Modelo Produto
                                        </label>
                                        <select
                                            id="modelo"
                                            value={data.modelo}
                                            onChange={(e) =>
                                                setData("modelo", e.target.value)
                                            }
                                            className="input-form"
                                        >
                                            <option value="">
                                                Selecione o modelo
                                            </option>
                                            {modeloFiltered?.map((modelo: any) => (
                                                <option
                                                    key={modelo.id}
                                                    value={modelo.id}
                                                >
                                                    {modelo.modelo}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.modelo && (
                                            <div className="text-sm text-red-500">
                                                {errors.modelo}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="grid grid-cols-5 gap-4 mt-4">
                                    <div className="flex flex-col col-span-2">
                                        <label
                                            className="label-form"
                                            htmlFor="descricao"
                                        >
                                            Descrição
                                        </label>
                                        <textarea
                                            id="descricao"
                                            value={data.descricao}
                                            onChange={(e) =>
                                                setData(
                                                    "descricao",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                        />
                                        {errors.descricao && (
                                            <div className="text-sm text-red-500">
                                                {errors.descricao}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col col-span-2">
                                        <label
                                            className="label-form"
                                            htmlFor="valor"
                                        >
                                            Valor do Serviço
                                        </label>
                                        <input
                                            id="valor"
                                            type="text"
                                            value={maskMoney(data.valor.toString())}
                                            onChange={(e) =>
                                                setData(
                                                    "valor",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                        />
                                        {errors.valor && (
                                            <div className="text-sm text-red-500">
                                                {errors.valor}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label
                                            className="label-form"
                                            htmlFor="simples"
                                        >
                                            Serviço simples
                                        </label>
                                        <input
                                            id="simples"
                                            type="checkbox"
                                            checked={data.simples}
                                            onChange={(e) => setData('simples', e.target.checked)}
                                            className="input-form"
                                        />
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                        <CardFooter>
                            <SaveButton disabled={processing} />
                        </CardFooter>
                    </form>
                </CardContainer>
            </Card>
        </AuthLayout>
    );
};
export default EditOrcamento;
