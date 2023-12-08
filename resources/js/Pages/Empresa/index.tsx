import { BackButton, SaveButton } from "@/Components/Buttons";
import { Card, CardBody, CardContainer, CardFooter, CardHeader, CardHeaderContent } from "@/Components/Card";
import FlashMessage from "@/Components/FlashMessage";
import { BreadCrumbTop, HeaderContent, TitleTop } from "@/Components/PageTop";
import AuthLayout from "@/Layouts/AuthLayout";
import { router, useForm, usePage } from "@inertiajs/react";
import { InertiaFormProps } from "@inertiajs/react/types/useForm";
import React from "react";
import { maskCep, maskCnpj, maskCpfCnpj, maskPhone, unMask } from "@/Utils/mask";
import { IoChatboxEllipses } from "react-icons/io5";

interface ClientesProps {
    empresa: string,
    razao: string,
    cnpj: string,
    logo: any,
    endereco: string,
    bairro: string,
    uf: string,
    cidade: string,
    cep: string,
    telefone: string,
    site: string,
    email: string,
}

const Impressoes = ({ empresa }: any) => {
    const { flash } = usePage().props;
    const { data, setData, patch, progress, processing, errors }: InertiaFormProps<ClientesProps> = useForm({
        empresa: empresa.empresa,
        razao: empresa.razao,
        cnpj: empresa.cnpj,
        logo: null,
        endereco: empresa.endereco,
        bairro: empresa.bairro,
        uf: empresa.uf,
        cidade: empresa.cidade,
        cep: empresa.cep,
        telefone: empresa.telefone,
        site: empresa.site,
        email: empresa.email,
    });

    function handleSubmit(e: any) {
        router.post(`empresa/${empresa.id}`, {
            _method: 'put',
            empresa: data.empresa,
            razao: data.razao,
            cnpj: data.cnpj,
            logo: data.logo,
            endereco: data.endereco,
            bairro: data.bairro,
            uf: data.uf,
            cidade: data.cidade,
            cep: data.cep,
            telefone: data.telefone,
            site: data.site,
            email: data.email,
        });
    }
    return (
        <AuthLayout>
            <Card>
                <HeaderContent>
                    <TitleTop >
                        <IoChatboxEllipses size={30} />
                        <span className="ml-2">Empresa</span>
                    </TitleTop>
                    <BreadCrumbTop
                        links={
                            [
                                { url: null, label: 'Empresa' },
                            ]
                        }
                    />
                </HeaderContent>
                <CardContainer>
                    <FlashMessage message={flash} />
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <CardBody className=" border-y border-gray-100">

                            <div className="px-3 my-4">

                                <div className="grid grid-cols-5 gap-4">
                                    <div className="flex flex-col">
                                        <label className="label-form" htmlFor="logo">
                                            Logo
                                        </label>
                                        <input
                                            id="logo"
                                            type="file"
                                            onChange={(e) => setData('logo', e.target.files[0])}
                                            className="input-form"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="label-form" htmlFor="empresa">
                                            Nome fantasia
                                        </label>
                                        <input
                                            id="empresa"
                                            type="text"
                                            value={data.empresa}
                                            onChange={(e) => setData('empresa', e.target.value)}
                                            className="input-form"
                                        />
                                    </div>

                                    <div className="flex flex-col col-span-2">
                                        <label className="label-form" htmlFor="razao">
                                            Razão social
                                        </label>
                                        <input
                                            id="razao"
                                            type="text"
                                            value={data.razao}
                                            onChange={(e) => setData('razao', e.target.value)}
                                            className="input-form"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="label-form" htmlFor="cnpj">
                                            CNPJ
                                        </label>
                                        <input
                                            id="cnpj"
                                            type="text"
                                            value={maskCnpj(data.cnpj)}
                                            onChange={(e) => setData('cnpj', e.target.value)}
                                            className="input-form"
                                            maxLength={18}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-6 gap-4 mt-6">
                                    <div className="flex flex-col">
                                        <label className="label-form" htmlFor="cep">
                                            CEP
                                        </label>
                                        <input
                                            id="cep"
                                            type="text"
                                            value={maskCep(data.cep)}
                                            onChange={(e) => setData('cep', e.target.value)}
                                            className="input-form"
                                            maxLength={9}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="label-form" htmlFor="uf">
                                            UF
                                        </label>
                                        <input
                                            id="uf"
                                            type="text"
                                            value={data.uf}
                                            onChange={(e) => setData('uf', e.target.value)}
                                            className="input-form"
                                        />
                                    </div>
                                    <div className="flex flex-col col-span-2">
                                        <label className="label-form" htmlFor="cidade">
                                            Cidade
                                        </label>
                                        <input
                                            id="cidade"
                                            type="text"
                                            value={data.cidade}
                                            onChange={(e) => setData('cidade', e.target.value)}
                                            className="input-form"
                                        />
                                    </div>
                                    <div className="flex flex-col col-span-2">
                                        <label className="label-form" htmlFor="bairro">
                                            Bairro
                                        </label>
                                        <input
                                            id="bairro"
                                            type="text"
                                            value={data.bairro}
                                            onChange={(e) => setData('bairro', e.target.value)}
                                            className="input-form"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-8 gap-4 mt-6">
                                    <div className="flex flex-col col-span-3">
                                        <label className="label-form" htmlFor="endereco">
                                            Endereço
                                        </label>
                                        <input
                                            id="endereco"
                                            type="text"
                                            value={data.endereco}
                                            onChange={(e) => setData('endereco', e.target.value)}
                                            className="input-form"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="label-form" htmlFor="telefone">
                                            Telefone
                                        </label>
                                        <input
                                            id="telefone"
                                            type="text"
                                            value={maskPhone(data.telefone)}
                                            onChange={(e) => setData('telefone', e.target.value)}
                                            className="input-form"
                                            maxLength={15}
                                        />
                                    </div>
                                    <div className="flex flex-col col-span-2">
                                        <label className="label-form" htmlFor="site">
                                            Site
                                        </label>
                                        <input
                                            id="site"
                                            type="url"
                                            value={maskPhone(data.site)}
                                            onChange={(e) => setData('site', e.target.value)}
                                            className="input-form"
                                        />
                                        {errors.telefone && <div className="text-sm text-red-500">{errors.telefone}</div>}
                                    </div>
                                    <div className="flex flex-col col-span-2">
                                        <label className="label-form" htmlFor="email">
                                            E-mail
                                        </label>
                                        <input
                                            id="email"
                                            type="text"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            className="input-form"
                                        />
                                    </div>
                                </div>
                            </div>

                        </CardBody>
                        <CardFooter>
                            <SaveButton processing={processing} />
                        </CardFooter>
                    </form>
                </CardContainer>
            </Card>
        </AuthLayout >
    );
}
export default Impressoes;