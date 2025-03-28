import apios from "@/bootstrap";
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
import { maskCep, maskCpfCnpj, maskPhone, unMask } from "@/Utils/mask";
import { Head, useForm, usePage } from "@inertiajs/react";
import { InertiaFormProps } from "@inertiajs/react/types/useForm";
import React, { useCallback, useEffect } from "react";
import { IoPeopleSharp } from "react-icons/io5";

interface ClientesProps {
    cpf: string;
    nascimento: any;
    nome: string;
    email: string;
    cep: string;
    uf: string;
    cidade: string;
    bairro: string;
    endereco: string;
    complemento: string;
    telefone: string;
    whatsapp: string;
    contato: string;
    telcontato: string;
    obs: string;
}

const EditCliente = ({ clientes }: any) => {
    // const options = clientes.map((cliente: any) => ({ value: cliente.id, label: cliente.nome }))
    const { flash } = usePage().props;

    const {
        data,
        setData,
        patch,
        progress,
        processing,
        errors,
        setDefaults,
    }: InertiaFormProps<ClientesProps> = useForm({
        cpf: clientes?.cpf,
        nascimento: clientes.nascimento,
        nome: clientes.nome,
        email: clientes.email,
        cep: clientes.cep,
        uf: clientes.uf,
        cidade: clientes.cidade,
        bairro: clientes.bairro,
        endereco: clientes.endereco,
        complemento: clientes.complemento,
        telefone: clientes.telefone,
        whatsapp: clientes.whatsapp,
        contato: clientes.contato,
        telcontato: clientes.telcontato,
        obs: clientes.obs,
    });

    async function handleSubmit(e: any) {
        e.preventDefault();
        patch(route("clientes.update", clientes.id));

        await apios.post('insert-user', {
            "customers": [{
                "id": clientes.id,
                "nome": data.nome,
                "cpf": data.cpf,
                "email": data.email
            }]
        })
            .then((res) => {
                console.log(res.data.response.message);
            }).catch((err) => {
                console.log(err);
            });
    }

    const getCep = (cep: string) => {
        const cleanCep = unMask(cep);
        fetch(`https://viacep.com.br/ws/${cleanCep}/json/`)
            .then((response) => response.json())
            .then((result) => {
                setData((data) => ({ ...data, uf: result.uf }));
                setData((data) => ({ ...data, cidade: result.localidade }));
                setData((data) => ({ ...data, bairro: result.bairro }));
                setData((data) => ({ ...data, endereco: result.logradouro }));
                setData((data) => ({
                    ...data,
                    complemento: result.complemento,
                }));
            })
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        const getCliente = () => { };
        getCliente();
    }, []);
    return (
        <AuthLayout>
            <Head title="Clientes" />
            <Card>
                <HeaderContent>
                    <TitleTop>
                        <IoPeopleSharp size={30} />
                        <span className="ml-2">Clientes</span>
                    </TitleTop>
                    <BreadCrumbTop
                        links={[
                            { url: "/clientes", label: "Clientes" },
                            { url: null, label: "Adicionar Cliente" },
                        ]}
                    />
                </HeaderContent>
                <CardContainer>
                    <FlashMessage message={flash} />
                    <CardHeader>
                        <CardHeaderContent>
                            <BackButton url={"/clientes"} label={"Voltar"} />
                        </CardHeaderContent>
                        <CardHeaderContent>
                            <></>
                        </CardHeaderContent>
                    </CardHeader>
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <CardBody className=" border-y border-gray-100">
                            <div className="px-3 my-4">
                                <div className="grid grid-cols-6 gap-4">
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="cpf"
                                        >
                                            CPF/CNPJ
                                        </label>
                                        <input
                                            id="cpf"
                                            type="text"
                                            value={data.cpf ? maskCpfCnpj(data.cpf) : ''}
                                            onChange={(e) =>
                                                setData("cpf", e.target.value)
                                            }
                                            className="input-form"
                                            maxLength={18}
                                        />
                                        {errors.cpf && (
                                            <div className="text-sm text-red-500">
                                                {errors.cpf}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="nascimento"
                                        >
                                            Nascimento
                                        </label>
                                        <input
                                            id="nascimento"
                                            type="date"
                                            value={data.nascimento}
                                            onChange={(e) =>
                                                setData(
                                                    "nascimento",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                        />
                                    </div>
                                    <div className="flex flex-col col-span-2">
                                        <label
                                            className="label-form"
                                            htmlFor="nome"
                                        >
                                            Nome
                                        </label>
                                        <input
                                            id="nome"
                                            type="text"
                                            value={data.nome}
                                            onChange={(e) =>
                                                setData("nome", e.target.value)
                                            }
                                            className="input-form"
                                        />
                                        {errors.nome && (
                                            <div className="text-sm text-red-500">
                                                {errors.nome}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col col-span-2">
                                        <label
                                            className="label-form"
                                            htmlFor="email"
                                        >
                                            E-mail
                                        </label>
                                        <input
                                            id="email"
                                            type="text"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                            className="input-form"
                                        />
                                        {errors.email && (
                                            <div className="text-red-500">
                                                {errors.email}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-6 gap-4 mt-6">
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="cep"
                                        >
                                            CEP
                                        </label>
                                        <input
                                            id="cep"
                                            type="text"
                                            value={maskCep(data.cep)}
                                            onChange={(e) =>
                                                setData("cep", e.target.value)
                                            }
                                            onBlur={(e) =>
                                                getCep(e.target.value)
                                            }
                                            className="input-form"
                                            maxLength={9}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="uf"
                                        >
                                            UF
                                        </label>
                                        <input
                                            id="uf"
                                            type="text"
                                            value={data.uf}
                                            onChange={(e) =>
                                                setData("uf", e.target.value)
                                            }
                                            className="input-form"
                                        />
                                    </div>
                                    <div className="flex flex-col col-span-2">
                                        <label
                                            className="label-form"
                                            htmlFor="cidade"
                                        >
                                            Cidade
                                        </label>
                                        <input
                                            id="cidade"
                                            type="text"
                                            value={data.cidade}
                                            onChange={(e) =>
                                                setData(
                                                    "cidade",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                        />
                                    </div>
                                    <div className="flex flex-col col-span-2">
                                        <label
                                            className="label-form"
                                            htmlFor="bairro"
                                        >
                                            Bairro
                                        </label>
                                        <input
                                            id="bairro"
                                            type="text"
                                            value={data.bairro}
                                            onChange={(e) =>
                                                setData(
                                                    "bairro",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-4 mt-6">
                                    <div className="flex flex-col col-span-2">
                                        <label
                                            className="label-form"
                                            htmlFor="endereco"
                                        >
                                            Endereço
                                        </label>
                                        <input
                                            id="endereco"
                                            type="text"
                                            value={data.endereco}
                                            onChange={(e) =>
                                                setData(
                                                    "endereco",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="complemento"
                                        >
                                            Complemento
                                        </label>
                                        <input
                                            id="complemento"
                                            type="text"
                                            value={data.complemento}
                                            onChange={(e) =>
                                                setData(
                                                    "complemento",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-5 gap-4 mt-6">
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="telefone"
                                        >
                                            Telefone
                                        </label>
                                        <input
                                            id="telefone"
                                            type="text"
                                            value={maskPhone(data.telefone)}
                                            onChange={(e) =>
                                                setData(
                                                    "telefone",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                            maxLength={15}
                                        />
                                        {errors.telefone && (
                                            <div className="text-sm text-red-500">
                                                {errors.telefone}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="whatsapp"
                                        >
                                            Whatsapp(Ex: 5551985471163)
                                        </label>
                                        <input
                                            id="whatsapp"
                                            type="text"
                                            value={data.whatsapp}
                                            onChange={(e) =>
                                                setData(
                                                    "whatsapp",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                            maxLength={13}
                                        />
                                        {errors.whatsapp && (
                                            <div className="text-sm text-red-500">
                                                {errors.whatsapp}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col col-span-2">
                                        <label
                                            className="label-form"
                                            htmlFor="contato"
                                        >
                                            Contato
                                        </label>
                                        <input
                                            id="contato"
                                            type="text"
                                            value={data.contato}
                                            onChange={(e) =>
                                                setData(
                                                    "contato",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="telcontato"
                                        >
                                            Telefone contato
                                        </label>
                                        <input
                                            id="telcontato"
                                            type="text"
                                            value={maskPhone(data.telcontato)}
                                            onChange={(e) =>
                                                setData(
                                                    "telcontato",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form"
                                            maxLength={15}
                                        />
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="obs"
                                        >
                                            Observação
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
                            <SaveButton />
                        </CardFooter>
                    </form>
                </CardContainer>
            </Card>
        </AuthLayout>
    );
};
export default EditCliente;
