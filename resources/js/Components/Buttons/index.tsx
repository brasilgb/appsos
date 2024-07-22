import { Link, useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import {
    IoAdd,
    IoArrowBackOutline,
    IoCheckmarkDone,
    IoClose,
    IoConstruct,
    IoImageSharp,
    IoLogoWhatsapp,
    IoPrint,
    IoSave,
    IoTrash,
} from "react-icons/io5";
import { TbEdit } from "react-icons/tb";
import { FaCalendarDays, FaRegTrashCan } from "react-icons/fa6";
import { Inertia } from "@inertiajs/inertia";
import { MdJavascript } from "react-icons/md";

interface ButtonsProps {
    url?: any;
    label?: string;
    processing?: any;
    onclick?: any;
    param?: string;
    identify?: string;
    value?: string;
    status?: string;
    id?: string;
    sttmessage?: number;
    disabled?: boolean;
}

export const AddButton = ({ url, label, disabled = false }: ButtonsProps) => {

    return (
        <Link
            className={`flex items-center justify-center ${!disabled ? 'bg-blue-700 hover:bg-blue-700/90' : 'bg-blue-700/50'}  py-1.5 px-3 rounded-md shadow border-2 border-gray-50 text-gray-50 self-end`}
            href={url}
            as="button"
            type="button"
            disabled={disabled}
        >
            <IoAdd size={18} />
            <span>{label}</span>
        </Link>
    );
};

export const MessageLidaButton = ({ url, id, sttmessage }: ButtonsProps) => {
    const { patch } = useForm({
        status: sttmessage === 0 ? 1 : 0,
    });

    const handleMessageRead = (e: any) => {
        e.preventDefault();
        patch(route(url, id));
    };

    return (
        <Link
            className="flex items-center justify-center bg-gray-100 hover:bg-gray-100/90 py-1.5 px-3 rounded-md shadow border-2 border-gray-50 text-gray-50 self-end"
            href="#"
            onClick={handleMessageRead}
            as="button"
            type="button"
            title={sttmessage === 0 ? "Marcar como lida" : "Mensagem lida"}
        >
            <IoCheckmarkDone
                size={22}
                color={sttmessage === 0 ? "#6b6b6b" : "#2a82ca"}
            />
        </Link>
    );
};

export const BackButton = ({ url, label }: ButtonsProps) => {
    let back = function()
    {
        window.history.back();
    }
    return (
        <button
            className="flex items-center justify-center bg-blue-700 hover:bg-blue-700/90 border-2 border-gray-50 py-1.5 px-3 rounded-md shadow text-gray-50 self-end"
            // href={url}
            onClick={back}
            // as="button"
            type="button"
        >
            <IoArrowBackOutline size={18} />
            <span>{label}</span>
        </button>
    );
};

export const PrintButton = ({ url, status }: ButtonsProps) => {
    const [openMenuButton, setOpenMenuButton] = useState(false);
    return (
        <>
            <button
                className="relative flex items-center justify-center bg-zinc-600 hover:bg-zinc-600/90 border-2 border-gray-50 py-1.5 px-3 rounded-md shadow text-gray-50 self-end"
                onClick={() => setOpenMenuButton(!openMenuButton)}
                title={`Imprimir recibo`}
            >
                <IoPrint size={18} />
            </button>
            {openMenuButton && (
                <div className="fixed w-full flex items-center justify-center bg-gray-800/90 top-0 right-0 bottom-0 left-0 z-50">
                    <div className="w-full sm:max-w-md mx-4 bg-gradient-to-t from-gray-300 via-white to-gray-200 shadow-md overflow-hidden rounded-md border border-white text-gray-600">
                        <div className="h-8 flex items-center justify-between border-b px-2 bg-blue-cinco text-white rounded-t-lg">
                            <IoPrint size={18} />
                            <h1 className="ml-2 flex-1 text-sm font-semibold">
                                Selecione o documento para impressão
                            </h1>
                            <button onClick={() => setOpenMenuButton(false)}>
                                <IoClose size={18} />
                            </button>
                        </div>
                        <ul className="p-2 uppercase text-xs font-medium flex flex-col gap-2">
                            <li
                                className={`${status == "1" ? "bg-blue-quatro hover:bg-blue-quatro/90 text-white" : "text-gray-200"} rounded-md text-center border-2 border-gray-50 shadow transition-all duration-300`}
                            >
                                <Link
                                    disabled={status == "1" ? false : true}
                                    as="button"
                                    href={`/docs/printer?or=${url}&tp=1`}
                                    className="py-1.5 w-full uppercase"
                                >
                                    Recibo entrada de equipamento
                                </Link>
                            </li>
                            <li
                                className={`${status == "3" || status == "4" ? "bg-blue-quatro hover:bg-blue-quatro/90 text-white" : "text-gray-200"} rounded-md text-center border-2 border-gray-50 shadow transition-all duration-300`}
                            >
                                <Link
                                    disabled={status == "3" || status == "4" ? false : true}
                                    as="button"
                                    href={`/docs/printer?or=${url}&tp=3`}
                                    className="py-1.5 w-full uppercase"
                                >
                                    Recibo de orçamento de serviços
                                </Link>
                            </li>
                            <li
                                className={`${status == "8" ? "bg-blue-quatro hover:bg-blue-quatro/90 text-white" : "text-gray-200"} rounded-md text-center border-2 border-gray-50 shadow transition-all duration-300`}
                            >
                                <Link
                                    disabled={status == "8" ? false : true}
                                    as="button"
                                    href={`/docs/printer?or=${url}&tp=2`}
                                    className="py-1.5 w-full uppercase"
                                >
                                    Recibo de entrega de equipamento
                                </Link>
                            </li>
                            <li
                                className={`${status == "6" || status == "7" ? "bg-blue-quatro hover:bg-blue-quatro/90 text-white" : "text-gray-200"} rounded-md text-center border-2 border-gray-50 shadow transition-all duration-300`}
                            >
                                <Link
                                    disabled={status == "6" || status == "7" ? false : true}
                                    as="button"
                                    href={`/docs/printer?or=${url}&tp=4`}
                                    className="py-1.5 w-full uppercase"
                                >
                                    Checklist de entrega de equipamento
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export const WhatsAppButton = ({ url }: ButtonsProps) => {
    return (
        <a
            className="flex items-center justify-center bg-green-600 hover:bg-green-600/90 border-2 border-gray-50 py-1.5 px-3 rounded-md shadow text-gray-50 self-end"
            href={url}
            target="_blank"
            title={`Enviar mensagem`}
        >
            <IoLogoWhatsapp size={18} />
        </a>
    );
};

export const ImagesAppButton = ({ url }: ButtonsProps) => {
    return (
        <Link
            className="flex items-center justify-center bg-sky-700 hover:bg-sky-700/90 border-2 border-gray-50 py-1.5 px-3 rounded-md shadow text-gray-50 self-end"
            href={`/imagens?or=${url}`}
            as="button"
            type="button"
            title={`Imagens da ordem`}
        >
            <IoImageSharp size={18} />
        </Link>
    );
};

export const AgendaClienteButton = ({ url }: ButtonsProps) => {
    return (
        <Link
            className="flex items-center justify-center bg-teal-600 hover:bg-teal-600/90 border-2 border-gray-50 py-1.5 px-3 rounded-md shadow text-gray-50 self-end"
            href={url}
            as="button"
            type="button"
            title={`Acessar agendamento`}
        >
            <FaCalendarDays size={18} />
        </Link>
    );
};

export const OrderButton = ({ url }: ButtonsProps) => {
    return (
        <Link
            className="flex items-center justify-center bg-zinc-600 hover:bg-zinc-600/90 border-2 border-gray-50 py-1.5 px-3 rounded-md shadow text-gray-50 self-end"
            href={url}
            as="button"
            type="button"
            title={`Ordens do cliente`}
        >
            <IoConstruct size={18} />
        </Link>
    );
};

export const EditButton = ({ url, param }: ButtonsProps) => {
    return (
        <Link
            className="flex items-center justify-center bg-orange-600 hover:bg-orange-600/90 border-2 border-gray-50 py-1.5 px-3 rounded-md shadow text-gray-50 self-end"
            href={url}
            as="button"
            type="button"
            title={`Editar registro`}
            data={{ page: param }}
        >
            <TbEdit size={18} />
        </Link>
    );
};

export const DeleteButton = ({ identify, param, url, disabled = false }: ButtonsProps) => {
    const { auth } = usePage().props as any;

    const [showConfirme, setShowConfirme] = useState(false);
    const { delete: destroy } = useForm();

    function onsubmit(e: any) {
        e.preventDefault();
        destroy(route(url, param));
        setShowConfirme(false);
    }

    const ModalDelete = () => {
        return (
            <div
                onClick={() => setShowConfirme(false)}
                className={`fixed z-20 top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-gray-500 bg-opacity-40`}
            >
                <div className="w-1/4 bg-gray-50 rounded-md shadow-md border border-white">
                    <div className="text-gray-400 flex justify-end pt-0.5 pr-0.5">
                        <button onClick={() => setShowConfirme(false)}>
                            <IoClose size={18} />
                        </button>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-red-500 pb-2">
                                <FaRegTrashCan size={40} />
                            </div>
                            <div className="text-xl">Excluir registro</div>
                        </div>
                    </div>
                    <div className="my-2 flex flex-col items-center justify-center">
                        <h2 className="text-base text-center">
                            Você realmente deseja excluir {identify}?
                        </h2>
                        <h2 className="test-sm mt-1">
                            Esta operação não pode ser desfeita.
                        </h2>
                    </div>

                    <div className="flex items-center justify-end gap-3 p-3 mt-2">
                        <button
                            onClick={() => setShowConfirme(false)}
                            className="py-2 px-3 flex-1 bg-zinc-600 hover:bg-zinc-600/90 border-2 border-gray-50 rounded-md"
                        >
                            <span className="text-sm text-gray-50">
                                Cancelar
                            </span>
                        </button>
                        <button
                            onClick={onsubmit}
                            className="py-2 px-3 flex-1 bg-red-500 hover:bg-red-500/90 border-2 border-gray-50 rounded-md"
                        >
                            <span className="text-sm text-gray-50">
                                Excluir
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            {showConfirme && <ModalDelete />}
            <button
                className={`flex items-center justify-center ${!disabled ? 'bg-red-600 hover:bg-red-500/90' : 'bg-red-600/50'} border-2 border-gray-50 py-1.5 px-3 rounded-md shadow text-gray-50 self-end`}
                onClick={() => setShowConfirme(true)}
                title={`Deletar registro ${param}`}
                disabled={disabled}
            >
                <IoTrash size={18} />
            </button>
        </>
    );
};

export const SaveButton = ({ processing, value = "Salvar" }: ButtonsProps) => {
    return (
        <div className="flex justify-end">
            <button
                className="flex items-center justify-center bg-blue-700 hover:bg-blue-700/90 border-2 border-gray-50 py-1.5 px-3 rounded-md shadow text-gray-50 self-end"
                disabled={processing}
                type="submit"
            >
                <IoSave size={18} />
                <span className="ml-1">{value}</span>
            </button>
        </div>
    );
};
