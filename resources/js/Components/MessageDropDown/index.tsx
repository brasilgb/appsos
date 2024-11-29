import { Link, useForm } from "@inertiajs/react";
import React, { useState } from "react";
import { IoChatboxEllipses, IoCheckmark, IoExit } from "react-icons/io5";
import { BsChatRightText } from "react-icons/bs";
interface DropDownProps {
    mensagens: any;
}

const MessageDropDown = ({ mensagens }: DropDownProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = () => {
        setIsOpen((old) => !old);
    };

    const transClass = isOpen ? "flex" : "hidden";

    return (
        <>
            <div className="relative text-sm">
                <button
                    className="flex items-center justify-between"
                    onClick={toggle}
                >
                    <div className="text-emerald-600 animate-pulse hover:animate-none">
                        <IoChatboxEllipses size={24} />
                    </div>
                    <div className={`absolute text-xs text-red-500 font-bold -top-1 -right-2 animate-pulse`}>
                        {mensagens[0]?.length}
                    </div>
                </button>
                <div
                    className={`absolute top-11 right-0 z-30 w-[250px] flex flex-col py-4 bg-gray-50 rounded-md shadow-lg border border-white ${transClass}`}
                >
                    <Link
                        className="text-gray-600 hover:text-gray-500 px-4 pb-3 flex items-center"
                        href={`/mensagens`}
                        onClick={toggle}
                    >
                        <BsChatRightText />
                        <span className="ml-1">Todas as mensagens</span>
                    </Link>
                    <span className="w-full border-b border-gray-200"></span>
                    {mensagens[0]?.map((message: any) => (
                        <Link
                            className="text-gray-600 hover:text-gray-500 px-4 pt-2 flex items-center"
                            href={`/mensagens/${message.id}`}
                        >
                            <IoCheckmark size={18} />
                            <span className="ml-1">{message.mensagem}</span>
                        </Link>
                    ))}
                </div>
            </div>
            {isOpen ? (
                <div
                    className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/5"
                    onClick={toggle}
                ></div>
            ) : (
                <></>
            )}
        </>
    );
};

export default MessageDropDown;
