import { Link } from "@inertiajs/react"
import React from 'react'
import { IoAdd, IoArrowBackOutline, IoConstruct, IoConstructOutline, IoSave, IoTrash } from "react-icons/io5";
import { TbEdit } from "react-icons/tb";

interface ButtonsProps {
    url?: string;
    label?: string;
    processing?: any;
}

export const AddButton = ({ url, label }: ButtonsProps) => {
    return (
        <Link
            className="flex items-center justify-center bg-blue-700 hover:bg-blue-600 py-1.5 px-3 rounded-md shadow text-gray-50 self-end"
            href={url}
            as="button"
            type="button"
        >
            <IoAdd size={18} />
            <span>{label}</span>
        </Link>
    )
}

export const BackButton = ({ url, label }: ButtonsProps) => {
    return (
        <Link
            className="flex items-center justify-center bg-blue-700 hover:bg-blue-600 py-1.5 px-3 rounded-md shadow text-gray-50 self-end"
            href={url}
            as="button"
            type="button"
        >
            <IoArrowBackOutline size={18} />
            <span>{label}</span>
        </Link>
    )
}

export const OrderButton = ({ url, label }: ButtonsProps) => {
    return (
        <Link
            className="flex items-center justify-center bg-zinc-600 hover:bg-zinc-500 py-1.5 px-3 rounded-md shadow text-gray-50 self-end"
            href={url}
            as="button"
            type="button"
        >
            <IoConstruct size={18} />
            <span>{label}</span>
        </Link>
    )
}

export const EditButton = ({ url, label }: ButtonsProps) => {
    return (
        <Link
            className="flex items-center justify-center bg-orange-600 hover:bg-orange-500 py-1.5 px-3 rounded-md shadow text-gray-50 self-end"
            href={url}
            as="button"
            type="button"
        >
            <TbEdit size={18} />
            <span>{label}</span>
        </Link>
    )
}

export const DeleteButton = ({ url, label }: ButtonsProps) => {
    return (
        <Link
            className="flex items-center justify-center bg-red-600 hover:bg-red-500 py-1.5 px-3 rounded-md shadow text-gray-50 self-end"
            href={url}
            as="button"
            type="button"
        >
            <IoTrash size={18} />
            <span>{label}</span>
        </Link>
    )
}

export const SaveButton = ({ processing }: ButtonsProps) => {
    return (
        <div className="flex justify-end">
            <button
            className="flex items-center justify-center bg-blue-700 hover:bg-blue-600 py-1.5 px-3 rounded-md shadow text-gray-50 self-end"
            disabled={processing}
            type="submit"
        >
            <IoSave size={18} />
            <span className="ml-1">Salvar</span>
        </button>
        </div>
    )
}


