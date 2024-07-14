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
import InsertParts from "@/Components/InsertParts";
import { BreadCrumbTop, HeaderContent, TitleTop } from "@/Components/PageTop";
import { useAppContext } from "@/Contexts/appContext";
import AuthLayout from "@/Layouts/AuthLayout";
import { statusServico } from "@/Utils/dataSelect";
import { maskMoney, maskMoneyDot, unMask } from "@/Utils/mask";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import { InertiaFormProps } from "@inertiajs/react/types/useForm";
import React, { useEffect, useState } from "react";
import { FaMemory } from "react-icons/fa6";
import { IoPeopleSharp, IoPrint, IoTrash } from "react-icons/io5";

interface ClientesProps {
    id: number;
    equipamento: string;
    modelo: string;
    senha: string;
    defeito: string;
    estado: string;
    acessorios: string;
    previsao: any;
    descorcamento: string;
    valorcamento: string;
    preorcamento: string;
    pecas: string;
    valpecas: string;
    valservico: string;
    custo: string;
    status: string;
    tecnico: string;
    detalhes: string;
    obs: string;
    page: string;
}

const EditOrdem = ({
    ordens,
    tecnicos,
    produtos,
    ordemProduto,
    currentPage,
    gerais
}: any) => {
    const { setShowModalParts, sendOrderParts, setSendOrderParts } = useAppContext();
    const equtipo = gerais?.equtipo ? gerais?.equtipo?.split(";") : [];
    const equestado = gerais?.equestado ? gerais?.equestado?.split(";") : [];
    const { flash, errors } = usePage().props;
    const [valueInputPecas, setValueInputPecas] = useState<any>([]);
    const [valueInputValPecas, setValueInputValPecas] = useState<any>("0");

    const options = produtos.map((produto: any) => ({
        value: produto.id,
        label: produto.descricao,
    }));

    const dataEstoque = sendOrderParts.length > 0 ? sendOrderParts : ordemProduto;
    // console.log(dataEstoque);

    const optionsDefault = ordemProduto.map((produto: any) => ({
        value: produto.id,
        label: produto.descricao,
    }));

    const {
        data,
        setData,
        progress,
        processing,
    }: InertiaFormProps<ClientesProps> = useForm({
        id: ordens.id,
        equipamento: ordens.equipamento,
        modelo: ordens.modelo,
        senha: ordens.senha,
        defeito: ordens.defeito,
        estado: ordens.estado,
        acessorios: ordens.acessorios,
        previsao: ordens.previsao,
        descorcamento: ordens.descorcamento,
        valorcamento: ordens.valorcamento,
        preorcamento: ordens.preorcamento,
        pecas: ordens.pecas,
        valpecas: ordens.valpecas ? ordens.valpecas : '0',
        valservico: ordens.valservico ? ordens.valservico : '0',
        custo: ordens.custo ? ordens.custo : '0',
        status: ordens.status,
        tecnico: ordens.tecnico,
        detalhes: ordens.detalhes,
        obs: ordens.obs,
        page: currentPage,
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        router.post(`/ordens/${ordens.id}`, {
            _method: "patch",
            id: data.id,
            equipamento: data.equipamento,
            modelo: data.modelo,
            senha: data.senha,
            defeito: data.defeito,
            estado: data.estado,
            acessorios: data.acessorios,
            previsao: data.previsao,
            descorcamento: data.descorcamento,
            valorcamento: data.valorcamento,
            preorcamento: data.preorcamento,
            pecas: data.pecas,
            produtos: sendOrderParts.map((produto: any) => (produto.pecaid)),
            valpecas: maskMoneyDot(data.valpecas.toString()),
            valservico: maskMoneyDot(data.valservico.toString()),
            custo: maskMoneyDot(data.custo.toString()),
            status: data.status,
            tecnico: data.tecnico,
            detalhes: data.detalhes,
            obs: data.obs,
            page: currentPage,
        });
    }

    useEffect(() => {
        const getOrderParts = () => {
            if (sendOrderParts.length > 0) {
                let totPecas = (sendOrderParts.length > 0 ? sendOrderParts : ordemProduto).map((val: any) => parseFloat(val.valvenda)).reduce((total: any, value: any, index: number) => total + value)
                setData((data) => ({ ...data, valpecas: totPecas }));
                // setData((data) => ({ ...data, pecas: sendOrderParts?.map((v: any) => v.descricao) }));
            }
        };
        getOrderParts();
    }, [sendOrderParts]);

    const sum = (a: any, b: any) => {
        return parseInt(unMask(a)) + parseInt(unMask(b));
    }

    const handleChange = (selected: any) => {
        const valueId = selected.map((v: any) => v.value);
        const vpecas = produtos
            .filter((fil: any) => valueId.includes(fil.id))
            .map((peca: any) => parseFloat(peca.valvenda));

        const totPecas = vpecas.reduce((t: any, q: any) => {
            return t + q;
        }, 0);
        setData((data) => ({ ...data, valpecas: totPecas }));
        setData((data) => ({ ...data, pecas: selected.map((v: any) => v.value) }));
    };

    const handleRemovePecaData = (id: number) => {

    }
    const { get } = useForm();
    const handleRemovePeca = () => {
        if (sendOrderParts.length > 0) {
            // const select = sendOrderParts.filter((item: any, idxb: number) => (idxb !== id));
            setSendOrderParts([]);
        } else {
            get(route('delpecaordem', ordens.id));
        }
        setData((data) => ({ ...data, valpecas: '0' }));
    }

    useEffect(() => {
        const custo = sum(data.valpecas.toString(), data.valservico.toString());
        setData((data: any) => ({ ...data, custo: custo }));
    }, [data]);

    return (
        <>
            <InsertParts produtos={produtos} />
            <AuthLayout>
                <Head title="Ordens" />
                <Card>
                    <HeaderContent>
                        <TitleTop>
                            <IoPeopleSharp size={30} />
                            <span className="ml-2">Ordens</span>
                        </TitleTop>
                        <BreadCrumbTop
                            links={[
                                { url: "/ordens", label: "Ordens" },
                                { url: null, label: "Adicionar ordem" },
                            ]}
                        />
                    </HeaderContent>
                    <CardContainer>
                        <FlashMessage message={flash} />
                        <CardHeader>
                            <CardHeaderContent>
                                <BackButton
                                    url={`/ordens?page=${currentPage}`}
                                    label={"Voltar"}
                                />
                            </CardHeaderContent>
                            <CardHeaderContent>
                                <></>
                            </CardHeaderContent>
                        </CardHeader>
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <CardBody className=" border-y border-gray-100">
                                <div className="px-3 my-4">
                                    <div className="grid grid-cols-5 gap-4">
                                        <div className="flex flex-col">
                                            <label
                                                className="label-form"
                                                htmlFor="ordem"
                                            >
                                                Ordem
                                            </label>
                                            <input
                                                id="ordem"
                                                type="text"
                                                value={data.id}
                                                className="input-form"
                                                disabled
                                            />
                                        </div>

                                        <div className="flex flex-col col-span-2">
                                            <label
                                                className="label-form"
                                                htmlFor="cliente_id"
                                            >
                                                Nome do cliente
                                            </label>
                                            <input
                                                id="equipamento"
                                                type="text"
                                                value={ordens.cliente.nome}
                                                className="input-form"
                                                disabled
                                            />
                                        </div>
                                        <div className="flex flex-col col-span-2">
                                        <label
                                            className="label-form"
                                            htmlFor="equipamento"
                                        >
                                            Tipo de equipamento
                                        </label>
                                        <select
                                            id="equipamento"
                                            value={data.equipamento}
                                            onChange={(e) =>
                                                setData(
                                                    "equipamento",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                        >
                                            <option value="">Selecione o tipo de equipamento</option>
                                            {equtipo.map((tipo: any, idx: number) => (
                                                <option value={tipo}>{tipo}</option>
                                            ))}
                                        </select>
                                        {errors.equipamento && (
                                            <div className="text-red-500">
                                                {errors.equipamento}
                                            </div>
                                        )}
                                    </div>
                                    </div>

                                    <div className="grid grid-cols-4 gap-4 mt-6">
                                        <div className="flex flex-col col-span-2">
                                            <label
                                                className="label-form"
                                                htmlFor="modelo"
                                            >
                                                Modelo do equipamento
                                            </label>
                                            <input
                                                id="modelo"
                                                type="text"
                                                value={data.modelo}
                                                onChange={(e) =>
                                                    setData(
                                                        "modelo",
                                                        e.target.value,
                                                    )
                                                }
                                                className="input-form"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label
                                                className="label-form"
                                                htmlFor="senha"
                                            >
                                                Senha do equipamento
                                            </label>
                                            <input
                                                id="senha"
                                                type="text"
                                                value={data.senha}
                                                onChange={(e) =>
                                                    setData("senha", e.target.value)
                                                }
                                                className="input-form"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label
                                                className="label-form"
                                                htmlFor="previsao"
                                            >
                                                Previsão de entrega
                                            </label>
                                            <input
                                                id="previsao"
                                                type="date"
                                                value={data.previsao}
                                                onChange={(e) =>
                                                    setData(
                                                        "previsao",
                                                        e.target.value,
                                                    )
                                                }
                                                className="input-form"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 mt-6">
                                        <div className="flex flex-col">
                                            <label
                                                className="label-form"
                                                htmlFor="defeito"
                                            >
                                                Defeito relatado/Serviço solicitado
                                            </label>
                                            <textarea
                                                id="defeito"
                                                value={data.defeito}
                                                onChange={(e) =>
                                                    setData(
                                                        "defeito",
                                                        e.target.value,
                                                    )
                                                }
                                                className="input-form"
                                            />
                                            {errors.defeito && (
                                                <div className="text-sm text-red-500">
                                                    {errors.defeito}
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="estado"
                                        >
                                            Estado do equipamento
                                        </label>
                                        <select
                                            id="estado"
                                            value={data.estado}
                                            onChange={(e) =>
                                                setData(
                                                    "estado",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                            >
                                            <option value="">Selecione o estado equipamento</option>
                                            {equestado.map((estado: any, idx: number) => (
                                                <option value={estado}>{estado}</option>
                                            ))}
                                        </select>
                                    </div>

                                        <div className="flex flex-col">
                                            <label
                                                className="label-form"
                                                htmlFor="acessorios"
                                            >
                                                Acessórios
                                            </label>
                                            <textarea
                                                id="acessorios"
                                                value={data.acessorios}
                                                onChange={(e) =>
                                                    setData(
                                                        "acessorios",
                                                        e.target.value,
                                                    )
                                                }
                                                className="input-form"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-7 gap-4 mt-6">

                                        <div className="flex flex-col col-span-2">
                                            <label
                                                className="label-form"
                                                htmlFor="pecas"
                                            >
                                                Peças utilizadas (manual)
                                            </label>
                                            <div className="flex items-center justify-start gap-4 w-full">
                                                <textarea
                                                    id="pecas"
                                                    value={data.pecas}
                                                    onChange={(e) =>
                                                        setData(
                                                            "pecas",
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="input-form !h-20 w-full"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex flex-col col-span-2">
                                            <label
                                                className="label-form"
                                                htmlFor="pecas"
                                            >
                                                Peças utilizadas (estoque)
                                            </label>
                                            <div className="flex items-center justify-start gap-4 w-full">

                                                <div className="flex items-start justify-start w-full">
                                                    <div className="h-20 input-form !rounded-r-none overflow-y-auto w-full">
                                                        {(sendOrderParts.length > 0 ? sendOrderParts : ordemProduto).map((peca: any, idx: number) => (
                                                            <div key={idx} className={`py-1 flex justify-between ${(sendOrderParts.length > 0 ? sendOrderParts : ordemProduto).length - 1 == idx ? '' : 'border-b border-b-gray-300'}`}>
                                                                {/* <div>{peca.id}</div> */}
                                                                <div>{peca.descricao}</div>
                                                                <div>{maskMoney(peca.valvenda)}</div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div>
                                                        <button
                                                            title="Inserir peças"
                                                            type="button"
                                                            className="bg-blue-700 hover:bg-blue-700/90 py-2.5 px-3 rounded-t-md rounded-l-none  shadow text-gray-50 h-10"
                                                            onClick={() => setShowModalParts(true)}
                                                        >
                                                            <FaMemory size={22} />
                                                        </button>
                                                        <button
                                                            title="Limpa peças"
                                                            type="button"
                                                            onClick={handleRemovePeca}
                                                            className="bg-red-600 hover:bg-red-600/90 py-2.5 px-3 rounded-r-md rounded-t-none shadow text-gray-50 h-10"
                                                        >
                                                            <IoTrash size={22} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col">
                                            <label
                                                className="label-form"
                                                htmlFor="valpecas"
                                            >
                                                Valor das peças
                                            </label>
                                            <input
                                                id="valpecas"
                                                type="text"
                                                value={maskMoney(data.valpecas.toString())}
                                                onChange={(e) =>
                                                    setData(
                                                        "valpecas",
                                                        e.target.value,
                                                    )}
                                                className="input-form"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label
                                                className="label-form"
                                                htmlFor="valservico"
                                            >
                                                Valor do serviço
                                            </label>
                                            <input
                                                id="valservico"
                                                type="text"
                                                value={maskMoney(data.valservico.toString())}
                                                onChange={(e) =>
                                                    setData(
                                                        "valservico",
                                                        e.target.value,
                                                    )
                                                }
                                                className="input-form"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label
                                                className="label-form"
                                                htmlFor="custo"
                                            >
                                                Custo total
                                            </label>
                                            <input
                                                id="custo"
                                                type="text"
                                                value={maskMoney(data.custo.toString())}
                                                onChange={(e) =>
                                                    setData("custo", e.target.value)
                                                }
                                                className="input-form"
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mt-6">
                                        <div className="flex flex-col">
                                            <label
                                                className="label-form"
                                                htmlFor="tecnico"
                                            >
                                                Técnico
                                            </label>
                                            <select
                                                id="tecnico"
                                                value={data.tecnico}
                                                onChange={(e) =>
                                                    setData(
                                                        "tecnico",
                                                        e.target.value,
                                                    )
                                                }
                                                className="input-form"
                                            >
                                                <option value="">
                                                    Slecione o técnico
                                                </option>
                                                {tecnicos.map((tecnico: any) => (
                                                    <option
                                                        key={tecnico.id}
                                                        value={tecnico.id}
                                                    >
                                                        {tecnico.name}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.tecnico && (
                                                <div className="text-sm text-red-500">
                                                    {errors.tecnico}
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex flex-col">
                                            <label
                                                className="label-form"
                                                htmlFor="status"
                                            >
                                                Status do serviço
                                            </label>
                                            <select
                                                id="status"
                                                value={data.status}
                                                onChange={(e) =>
                                                    setData(
                                                        "status",
                                                        e.target.value,
                                                    )
                                                }
                                                className="input-form"
                                            >
                                                <option value="">
                                                    Selecione o status
                                                </option>
                                                {statusServico.map(
                                                    (status: any) => (
                                                        <option
                                                            key={status.value}
                                                            value={status.value}
                                                        >
                                                            {status.label}
                                                        </option>
                                                    ),
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mt-6">
                                        <div className="flex flex-col">
                                            <label
                                                className="label-form"
                                                htmlFor="preorcamento"
                                            >
                                                Pré-orçamento
                                            </label>
                                            <textarea
                                                id="preorcamento"
                                                value={data.preorcamento}
                                                onChange={(e) =>
                                                    setData(
                                                        "preorcamento",
                                                        e.target.value,
                                                    )
                                                }
                                                className="input-form"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label
                                                className="label-form"
                                                htmlFor="descorcamento"
                                            >
                                                Descrição do orçamento
                                            </label>
                                            <textarea
                                                id="descorcamento"
                                                value={data.descorcamento}
                                                onChange={(e) =>
                                                    setData(
                                                        "descorcamento",
                                                        e.target.value,
                                                    )
                                                }
                                                className="input-form"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mt-6">
                                        <div className="flex flex-col">
                                            <label
                                                className="label-form"
                                                htmlFor="detalhes"
                                            >
                                                Detalhes do serviço
                                            </label>
                                            <textarea
                                                id="detalhes"
                                                value={data.detalhes}
                                                onChange={(e) =>
                                                    setData(
                                                        "detalhes",
                                                        e.target.value,
                                                    )
                                                }
                                                className="input-form"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label
                                                className="label-form"
                                                htmlFor="obs"
                                            >
                                                Observações
                                            </label>
                                            <textarea
                                                id="obs"
                                                value={data.obs}
                                                onChange={(e) =>
                                                    setData("obs", e.target.value)
                                                }
                                                className="input-form"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                            <CardFooter>
                                <div className="flex items-center justify-end gap-4">
                                    {ordens.status === 8 && (
                                        <>
                                            <Link
                                                disabled={
                                                    ordens.status == "8" ? false : true
                                                }
                                                as="button"
                                                href={`/docs/printer?or=${ordens.id}&tp=2`}
                                                className="flex items-center justify-center bg-teal-700 hover:bg-teal-700/90 py-1.5 px-3 rounded-md shadow text-gray-50 self-end transition-colors duration-300"
                                            >
                                                <IoPrint size={18} />
                                                <span className="ml-2">
                                                    Recibo de entrega
                                                </span>
                                            </Link>
                                            <Link
                                                disabled={
                                                    ordens.status == "8" ? false : true
                                                }
                                                as="button"
                                                href={`/docs/printer?or=${ordens.id}&tp=4`}
                                                className="flex items-center justify-center bg-teal-700 hover:bg-teal-700/90 py-1.5 px-3 rounded-md shadow text-gray-50 self-end transition-colors duration-300"
                                            >
                                                <IoPrint size={18} />
                                                <span className="ml-2">
                                                    Checklist de entrega
                                                </span>
                                            </Link>
                                        </>
                                    )}
                                    <SaveButton />
                                </div>
                            </CardFooter>
                        </form>
                    </CardContainer>
                </Card>
            </AuthLayout>
        </>
    );
};
export default EditOrdem;
