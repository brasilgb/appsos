import { BackButton, SaveButton } from "@/Components/Buttons";
import { Card, CardBody, CardContainer, CardFooter, CardHeader, CardHeaderContent } from "@/Components/Card";
import FlashMessage from "@/Components/FlashMessage";
import { BreadCrumbTop, HeaderContent, TitleTop } from "@/Components/PageTop";
import AuthLayout from "@/Layouts/AuthLayout";
import { statusOrcamento, statusServico } from "@/Utils/dataSelect";
import { useForm, usePage } from "@inertiajs/react";
import { InertiaFormProps } from "@inertiajs/react/types/useForm";
import React, { useState } from "react";
import { IoChevronDownSharp, IoPeopleSharp } from "react-icons/io5";

interface ClientesProps {
    id: number;
    equipamento: string,
    modelo: string,
    senha: string,
    defeito: string,
    estado: string,
    acessorios: string,
    previsao: any,
    orcamento: string,
    descorcamento: string,
    valorcamento: string;
    pecas: string,
    valpecas: string,
    valservico: string,
    custo: string,
    status: string,
    tecnico: string,
    detalhes: string,
    obs: string,
}

const EditOrdem = ({ ordens, tecnicos }: any) => {
    const { flash } = usePage().props;
    const [openOrcamento, setOpenOrcamento] = useState(false);

    const { data, setData, patch, progress, processing, errors, setDefaults }: InertiaFormProps<ClientesProps> = useForm({
        id: ordens.id,
        equipamento: ordens.equipamento,
        modelo: ordens.modelo,
        senha: ordens.senha,
        defeito: ordens.defeito,
        estado: ordens.estado,
        acessorios: ordens.acessorios,
        previsao: ordens.previsao,
        orcamento: ordens.orcamento,
        descorcamento: ordens.descorcamento,
        valorcamento: ordens.valorcamento,
        pecas: ordens.pecas,
        valpecas: ordens.valpecas,
        valservico: ordens.valservico,
        custo: ordens.custo,
        status: ordens.status,
        tecnico: ordens.tecnico,
        detalhes: ordens.detalhes,
        obs: ordens.obs,
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        patch(route('ordens.update', ordens.id));
    }

    return (
        <AuthLayout>
            <Card>
                <HeaderContent>
                    <TitleTop >
                        <IoPeopleSharp size={30} />
                        <span className="ml-2">Ordens</span>
                    </TitleTop>
                    <BreadCrumbTop
                        links={
                            [
                                { url: '/ordens', label: 'Ordens' },
                                { url: null, label: 'Adicionar ordem' },
                            ]
                        }
                    />
                </HeaderContent>
                <CardContainer>
                    <FlashMessage message={flash} />
                    <CardHeader>
                        <CardHeaderContent>
                            <BackButton url={"/ordens"} label={"Voltar"} />
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
                                        <label className="label-form" htmlFor="ordem">
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
                                        <label className="label-form" htmlFor="cliente_id">
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
                                        <label className="label-form" htmlFor="equipamento">
                                            Tipo de equipamento
                                        </label>
                                        <input
                                            id="equipamento"
                                            type="text"
                                            value={data.equipamento}
                                            onChange={(e) => setData('equipamento', e.target.value)}
                                            className="input-form"
                                        />
                                        {errors.equipamento && <div className="text-red-500">{errors.equipamento}</div>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-4 gap-4 mt-6">
                                    <div className="flex flex-col col-span-2">
                                        <label className="label-form" htmlFor="modelo">
                                            Modelo do equipamento
                                        </label>
                                        <input
                                            id="modelo"
                                            type="text"
                                            value={data.modelo}
                                            onChange={(e) => setData('modelo', e.target.value)}
                                            className="input-form"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="label-form" htmlFor="senha">
                                            Senha do equipamento
                                        </label>
                                        <input
                                            id="senha"
                                            type="text"
                                            value={data.senha}
                                            onChange={(e) => setData('senha', e.target.value)}
                                            className="input-form"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="label-form" htmlFor="previsao">
                                            Previsão de entrega
                                        </label>
                                        <input
                                            id="previsao"
                                            type="date"
                                            value={data.previsao}
                                            onChange={(e) => setData('previsao', e.target.value)}
                                            className="input-form"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-4 mt-6">
                                    <div className="flex flex-col">
                                        <label className="label-form" htmlFor="defeito">
                                            Defeito relatado/Serviço solicitado
                                        </label>
                                        <textarea
                                            id="defeito"
                                            value={data.defeito}
                                            onChange={(e) => setData('defeito', e.target.value)}
                                            className="input-form"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="label-form" htmlFor="estado">
                                            Estado do equipamento
                                        </label>
                                        <textarea
                                            id="estado"
                                            value={data.estado}
                                            onChange={(e) => setData('estado', e.target.value)}
                                            className="input-form"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="label-form" htmlFor="acessorios">
                                            Acessórios
                                        </label>
                                        <textarea
                                            id="acessorios"
                                            value={data.acessorios}
                                            onChange={(e) => setData('acessorios', e.target.value)}
                                            className="input-form"
                                        />
                                    </div>
                                </div>

                                {/* Section orcamento */}
                                <div className="mt-6">
                                    <div onClick={() => setOpenOrcamento((prevState => !prevState))} className="flex items-center justify-between p-2 bg-blue-500 border-t border-x border-blue-600 text-white cursor-pointer">
                                        <h1 className="text-lg">Orçamento</h1>
                                        <div className={`${openOrcamento ? '-rotate-180' : 'rotate-0'} duration-500`}>
                                            <IoChevronDownSharp />
                                        </div>
                                    </div>

                                    {openOrcamento &&
                                        <div className={`grid grid-cols-3 gap-4 bg-blue-50 p-6 border transition-all duration-500  ${openOrcamento ? 'opacity-100' : 'opacity-0'}`}>
                                            <div className="flex flex-col">
                                                <div className="flex flex-col">
                                                    <label className="label-form" htmlFor="orcamento">
                                                        Status do orçamento
                                                    </label>
                                                    <select
                                                        id="orcamento"
                                                        value={data.orcamento}
                                                        onChange={(e) => setData('orcamento', e.target.value)}
                                                        className="input-form !bg-white"
                                                    >
                                                        <option value="">Selecione o status</option>
                                                        {statusOrcamento.map((status:any) => (
                                                            <option key={status.value} value={status.value}>{status.label}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="flex flex-col mt-6">
                                                    <label className="label-form" htmlFor="valorcamento">
                                                        Valor do orçamento
                                                    </label>
                                                    <input
                                                        id="valorcamento"
                                                        type="text"
                                                        value={data.valorcamento}
                                                        onChange={(e) => setData('valorcamento', e.target.value)}
                                                        className="input-form !bg-white"
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex flex-col col-span-2">
                                                <label className="label-form" htmlFor="descorcamento">
                                                    Descrição do orcamento
                                                </label>
                                                <textarea
                                                    id="descorcamento"
                                                    value={data.descorcamento}
                                                    onChange={(e) => setData('descorcamento', e.target.value)}
                                                    className="input-form !bg-white"
                                                    rows={4}
                                                />
                                            </div>
                                        </div>
                                    }

                                </div>
                                <div className="grid grid-cols-6 gap-4 mt-6">
                                    <div className="flex flex-col col-span-3">
                                        <label className="label-form" htmlFor="pecas">
                                            Peças utilizadas
                                        </label>
                                        <input
                                            id="pecas"
                                            type="text"
                                            value={data.pecas}
                                            onChange={(e) => setData('pecas', e.target.value)}
                                            className="input-form"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="label-form" htmlFor="valpecas">
                                            Valor das peças
                                        </label>
                                        <input
                                            id="valpecas"
                                            type="text"
                                            value={data.valpecas}
                                            onChange={(e) => setData('valpecas', e.target.value)}
                                            className="input-form"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="label-form" htmlFor="valservico">
                                            Valor do serviço
                                        </label>
                                        <input
                                            id="valservico"
                                            type="text"
                                            value={data.valservico}
                                            onChange={(e) => setData('valservico', e.target.value)}
                                            className="input-form"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="label-form" htmlFor="custo">
                                            Custo total
                                        </label>
                                        <input
                                            id="custo"
                                            type="text"
                                            value={data.custo}
                                            onChange={(e) => setData('custo', e.target.value)}
                                            className="input-form"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-6">
                                    <div className="flex flex-col">
                                        <label className="label-form" htmlFor="tecnico">
                                            Técnico
                                        </label>
                                        <select
                                            id="tecnico"
                                            value={data.tecnico}
                                            onChange={(e) => setData('tecnico', e.target.value)}
                                            className="input-form"
                                        >
                                            <option value="">Slecione o técnico</option>
                                            {tecnicos.map((tecnico: any) => (
                                                <option key={tecnico.id} value={tecnico.id}>{tecnico.name}</option>
                                            ))}
                                        </select>
                                        {errors.tecnico && <div className="text-red-500">{errors.tecnico}</div>}
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="label-form" htmlFor="status">
                                            Status do serviço
                                        </label>
                                        <select
                                            id="status"
                                            value={data.status}
                                            onChange={(e) => setData('status', e.target.value)}
                                            className="input-form"
                                        >
                                            <option value="">Selecione o status</option>
                                            {statusServico.map((status: any) => (
                                                <option key={status.value} value={status.value}>{status.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-6">
                                    <div className="flex flex-col">
                                        <label className="label-form" htmlFor="detalhes">
                                            Detalhes do serviço
                                        </label>
                                        <textarea
                                            id="detalhes"
                                            value={data.detalhes}
                                            onChange={(e) => setData('detalhes', e.target.value)}
                                            className="input-form"
                                        />
                                        {errors.detalhes && <div className="text-red-500">{errors.detalhes}</div>}
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="label-form" htmlFor="obs">
                                            Observações
                                        </label>
                                        <textarea
                                            id="obs"
                                            value={data.obs}
                                            onChange={(e) => setData('obs', e.target.value)}
                                            className="input-form"
                                        />
                                    </div>
                                </div>

                            </div>

                        </CardBody>
                        <CardFooter>
                            <SaveButton />
                        </CardFooter>
                    </form>
                </CardContainer>
            </Card>

        </AuthLayout >
    );
}
export default EditOrdem;