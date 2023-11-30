import React from 'react'
import { Link, usePage } from "@inertiajs/react";
import { AiOutlineDashboard } from 'react-icons/ai';
import Logo from "../Logo";
import { IoPeopleSharp } from "react-icons/io5";

const Sidebar = () => {
    const { url } = usePage();

    return (
        <aside className=" hidden md:block md:w-64 duration-300 bg-blue-dark">
            <div className="flex items-center justify-start border-b border-blue-light p-3.5">
                <div className="h-8 w-8">
                    <Logo />
                </div>
                <h1 className="ml-2 text-gray-100 text-lg font-semibold">
                    Dashboard
                </h1>
            </div>
            <nav className="mt-3">
                <ul className="space-y-2 font-normal px-3">
                    <li>
                        <Link
                            className={`flex items-center p-2 rounded-md ${url === '/' ? 'text-white bg-blue-700' : 'text-gray-100 hover:bg-blue-middle hover:text-gray-400'} group`}
                            href={"/"}>
                            <AiOutlineDashboard size={20} />
                            <span className="ml-2">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`flex items-center p-2 rounded-md ${url.startsWith('/clientes') ? 'text-white bg-blue-700' : 'text-gray-100 hover:bg-blue-middle hover:text-gray-400'} group`}
                            href={"/clientes"}>
                            <IoPeopleSharp size={20} />
                            <span className="ml-2">Clientes</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`flex items-center p-2 rounded-md ${url === '/3' ? 'text-white bg-blue-700' : 'text-gray-100 hover:bg-blue-middle hover:text-gray-400'} group`}
                            href={"/"}>
                            <AiOutlineDashboard size={20} />
                            <span className="ml-2">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`flex items-center p-2 rounded-md ${url === '/4' ? 'text-white bg-blue-700' : 'text-gray-100 hover:bg-blue-middle hover:text-gray-400'} group`}
                            href={"/"}>
                            <AiOutlineDashboard size={20} />
                            <span className="ml-2">Dashboard</span>
                        </Link>
                    </li>

                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar;