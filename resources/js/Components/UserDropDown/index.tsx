import { Link, useForm, usePage } from "@inertiajs/react";
import React, { useState } from 'react';
import { IoExit, IoLogOut, IoPerson } from 'react-icons/io5';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

type Props = {};

const UserDropDown = (props: Props) => {
    const { auth } = usePage().props
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { post } = useForm();
    
    const toggle = () => {
        setIsOpen(old => !old);
    };

    const handleLogout = (e: any) => {
        e.preventDefault();
        post(route('logout'));
    }

    const transClass = isOpen ? 'flex' : 'hidden';

    return (
        
        <>
            <div className="relative">
                <button
                    className="flex items-center justify-between p-2"
                    onClick={toggle}
                >
                    <div className="">
                        <IoPerson />
                    </div>
                    <div className="">
                        <MdOutlineKeyboardArrowDown size={24} className={`duration-300 ${isOpen ? '-rotate-180' : 'rotate-0'}`} />
                    </div>
                </button>
                <div
                    className={`absolute top-11 right-0 z-30 w-[250px] flex flex-col py-4 bg-gray-50 rounded-md shadow-lg  ${transClass}`}
                >

                    <Link
                        className="text-gray-600 hover:text-gray-500 px-4 py-1 flex items-center"
                        href={`/usuarios/${auth.user.id}`}
                        onClick={toggle}
                    >
                        <IoPerson />
                        <span className="ml-1">{auth.user.name}</span>
                    </Link>
                    <Link
                        className="text-gray-600 hover:text-gray-500 px-4 py-1 flex items-center"
                        // href={session?.user.id || ''}
                        href="#"
                        onClick={(e) => handleLogout(e)}
                    >
                        <IoExit />
                        <span className="ml-1">Sair</span>
                    </Link>

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

export default UserDropDown;
