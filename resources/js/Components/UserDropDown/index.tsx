import { Link, useForm } from "@inertiajs/react";
import React, {useState} from 'react';
import {IoLogOut, IoPerson} from 'react-icons/io5';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';

type Props = {};

const UserDropDown = (props: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
const { post } = useForm();
    const toggle = () => {
        setIsOpen(old => !old);
    };

    const handleLogout = (e:any) => {
        e.preventDefault();
        post(route('logout'));
    }
    const transClass = isOpen ? 'flex' : 'hidden';
    return (
        // <div>{session?.user.name}</div>
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
                        <MdOutlineKeyboardArrowDown size={24} />
                    </div>
                </button>
                <div
                    className={`absolute top-11 right-0 z-30 w-[250px] min-h-[300px] flex flex-col py-4 bg-zinc-400 rounded ${transClass}`}
                >
                    
                        <Link
                            className="hover:bg-zinc-300 hover:text-zinc-500 px-4 py-1"
                            // href={session?.user.id || ''}
                            href="#"
                            onClick={toggle}
                        >
                            User
                        </Link>
                        <Link
                            className="hover:bg-zinc-300 hover:text-zinc-500 px-4 py-1"
                            // href={session?.user.id || ''}
                            href="#"
                            onClick={(e) => handleLogout(e)}
                        >
                            Sair
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
