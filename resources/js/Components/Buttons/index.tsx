import { Link } from "@inertiajs/react"
import React from 'react'
import { IoAdd } from "react-icons/io5";

interface ButtonsProps {
    url: string;
    label: string;
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

