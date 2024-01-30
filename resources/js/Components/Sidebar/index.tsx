import React, { useState } from 'react'
import { Link, usePage } from "@inertiajs/react";
import { AiFillPrinter, AiFillTags, AiOutlineDashboard } from 'react-icons/ai';
import Logo from "../Logo";
import { IoChatboxEllipses, IoCog, IoConstruct, IoLogoWhatsapp, IoPeopleSharp, IoPerson } from "react-icons/io5";
import { FaBasketShopping, FaCalendarDays, FaChevronDown, FaSliders } from "react-icons/fa6";
import { HiBuildingOffice } from "react-icons/hi2";

const Sidebar = () => {
    const { url } = usePage();
    const [openDropDown, setOpenDropDown] = useState<boolean>(false);
    return (
        <aside className=" hidden md:block md:w-64 duration-300 bg-blue-cinco">
            <div className="flex items-center justify-center border-b border-blue-um p-3.5">
                <div className="w-40">
                    <Logo />
                </div>
            </div>
            <nav className="mt-3">
                <ul className="space-y-2 font-normal px-3">
                    <li>
                        <Link
                            className={`flex items-center p-2 rounded-md transition-all duration-300 ${url === '/' ? 'text-white bg-blue-quatro' : 'text-gray-100 hover:bg-blue-middle hover:text-gray-400'} group`}
                            href={"/"}>
                            <AiOutlineDashboard size={20} />
                            <span className="ml-2">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`flex items-center p-2 rounded-md transition-all duration-300 ${url.startsWith('/clientes') ? 'text-white bg-blue-quatro' : 'text-gray-100 hover:bg-blue-quatro hover:text-gray-400'} group`}
                            href={"/clientes"}>
                            <IoPeopleSharp size={20} />
                            <span className="ml-2">Clientes</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`flex items-center p-2 rounded-md transition-all duration-300 ${url.startsWith('/ordens') || url.startsWith('/imagens') ? 'text-white bg-blue-quatro' : 'text-gray-100 hover:bg-blue-middle hover:text-gray-400'} group`}
                            href={"/ordens"}>
                            <IoConstruct size={20} />
                            <span className="ml-2">Ordens de serviço</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`flex items-center p-2 rounded-md transition-all duration-300 ${url.startsWith('/produtos') ? 'text-white bg-blue-quatro' : 'text-gray-100 hover:bg-blue-middle hover:text-gray-400'} group`}
                            href={"/produtos"}>
                            <FaBasketShopping size={20} />
                            <span className="ml-2">Produtos/Peças</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`flex items-center p-2 rounded-md transition-all duration-300 ${url.startsWith('/agendas') ? 'text-white bg-blue-quatro' : 'text-gray-100 hover:bg-blue-middle hover:text-gray-400'} group`}
                            href={"/agendas"}>
                            <FaCalendarDays size={20} />
                            <span className="ml-2">Agenda</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`flex items-center p-2 rounded-md transition-all duration-300 ${url.startsWith('/mensagens') ? 'text-white bg-blue-quatro' : 'text-gray-100 hover:bg-blue-middle hover:text-gray-400'} group`}
                            href={"/mensagens"}>
                            <IoChatboxEllipses size={20} />
                            <span className="ml-2">Mensagens</span>
                        </Link>
                    </li>

                    <li className="">
                        <div className={`flex items-center justify-between p-2 cursor-pointer ${url.startsWith('/configuracoes') ? 'text-gray500 bg-blue-quatro' : 'text-gray-100 hover:bg-blue-middle hover:text-gray-400'} ${openDropDown ? 'bg-gray-50 hover:bg-gray-50 text-gray-600  border-b rounded-t-lg' : 'text-gray-100 rounded-lg'}`} onClick={() => setOpenDropDown(state => !state)}>
                            <FaSliders size={20} />
                            <span className="self-start w-full pl-2">Configurações</span>
                            <FaChevronDown
                                size={12}
                                className={`${openDropDown ? '-rotate-180' : 'rotate-0'
                                    } transition-all duration-300`}
                            />
                        </div>
                        {openDropDown &&
                            <ul className="bg-gray-50 rounded-b-lg p-2">
                                <li>
                                    <Link
                                        className={`flex items-center p-2 transition-all duration-300 hover:text-gray-400 text-gray-600 group`}
                                        href={"/configuracoes/empresa"}>
                                        <HiBuildingOffice size={20} />
                                        <span className="ml-2">Empresa</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`flex items-center p-2 transition-all duration-300 hover:text-gray-400 text-gray-600 group`}
                                        href={"/configuracoes/whatsapp"}>
                                        <IoLogoWhatsapp size={20} />
                                        <span className="ml-2">WhatsApp</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`flex items-center p-2 transition-all duration-300 hover:text-gray-400 text-gray-600 group`}
                                        href={"/configuracoes/impressoes"}>
                                        <AiFillPrinter size={20} />
                                        <span className="ml-2">Impressões</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`flex items-center p-2 transition-all duration-300 hover:text-gray-400 text-gray-600 group`}
                                        href={"/configuracoes/etiquetas"}>
                                        <AiFillTags size={20} />
                                        <span className="ml-2">Etiquetas</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`flex items-center p-2 transition-all duration-300 hover:text-gray-400 text-gray-600 group`}
                                        href={"/configuracoes/gerais"}>
                                        <IoCog size={20} />
                                        <span className="ml-2">Gerais</span>
                                    </Link>
                                </li>
                            </ul>
                        }
                    </li>
                    <li>
                        <Link
                            className={`flex items-center p-2 transition-all duration-300 rounded-md hover:text-gray-400 ${url.startsWith('/usuarios') ? 'text-white bg-blue-quatro' : 'text-gray-100 hover:bg-blue-middle hover:text-gray-400'} group`}
                            href={"/usuarios"}>
                            <IoPerson size={20} />
                            <span className="ml-2">Usuários</span>
                        </Link>
                    </li>

                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar;