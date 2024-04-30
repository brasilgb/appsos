import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { AiFillPrinter, AiFillTags, AiOutlineDashboard } from "react-icons/ai";
import Logo from "../Logo";
import {
    IoChatboxEllipses,
    IoChevronForward,
    IoCog,
    IoConstruct,
    IoLogoWhatsapp,
    IoPeopleSharp,
    IoPerson,
} from "react-icons/io5";
import {
    FaBasketShopping,
    FaCalendarDays,
    FaChevronDown,
    FaSliders,
} from "react-icons/fa6";
import { HiBuildingOffice } from "react-icons/hi2";
import SideLink from "../SideLink";

const Sidebar = () => {
    const { url } = usePage();
    const [openDropDown, setOpenDropDown] = useState<boolean>(false);
    const [openSide, setOpenSide] = useState(true);
    return (
        <aside className={`${openSide ? "md:w-72 " : "w-20"} h-full relative bg-blue-cinco duration-300 p-5 pt-8 shadow-lg`}>
            <div onClick={() => setOpenSide(!openSide)} className={`${openSide ? "rotate-180 " : "0"} duration-300 absolute cursor-pointer flex items-center justify-center -right-2 w-7 h-7 rounded-full bg-white top-16 shadow-sm border-2 border-sky-800 text-sky-800 `}>
                <IoChevronForward />
            </div>
            <div className="flex items-center justify-center border-b border-blue-quatro h-24">
                <div className="w-20">
                    <Link 
                    href={route('dashboard')}
                    >
                        <Logo />
                    </Link>
                </div>
            </div>
            <nav className="mt-3">
                <ul className="flex flex-col gap-2">
                    <SideLink openside={openSide} url="dashboard" icon={<AiOutlineDashboard size={20} />} value={"Dashboard"} />
                    <SideLink openside={openSide} url="clientes.index" icon={<IoPeopleSharp size={20} />} value={"Clientes"} />
                    <SideLink openside={openSide} url="ordens.index" icon={<IoConstruct size={20} />} value={"Ordens de serviço"} />
                    <SideLink openside={openSide} url="produtos.index" icon={<FaBasketShopping size={20} />} value={"Produtos/Peças"} />
                    <SideLink openside={openSide} url="agendas.index" icon={<FaCalendarDays size={20} />} value={"Agenda"} />
                    <SideLink openside={openSide} url="mensagens.index" icon={<IoChatboxEllipses size={20} />} value={"Mensagens"} />
                    <li className="">
                        <div
                            className={`flex items-center justify-between p-2 cursor-pointer ${url.startsWith("/configuracoes") ? "text-gray500 bg-blue-quatro" : "text-gray-100 hover:bg-blue-middle hover:text-gray-400"} ${openDropDown ? "bg-gray-50 hover:bg-gray-50 text-gray-600  border-b rounded-t-lg" : "text-gray-100 rounded-lg"}`}
                            onClick={() => setOpenDropDown((state) => !state)}
                        >
                            <FaSliders size={20} />
                            {openSide &&
                                <>
                                    <div className="self-start w-full pl-2">
                                        Configurações
                                    </div>
                                    <FaChevronDown
                                        size={12}
                                        className={`${openDropDown ? "-rotate-180" : "rotate-0"
                                            } transition-all duration-300`}
                                    />
                                </>
                            }
                        </div>
                        {openDropDown && (
                            <ul className={`bg-gray-50 flex flex-col gap-1 rounded-b-lg p-2 absolute ${!openSide ? 'w-52' : 'w-[248px]'} `}>
                                <SideLink openside={true} url="empresa.index" icon={<HiBuildingOffice size={20} />} value={"Empresa"} sublink={true} />
                                <SideLink openside={true} url="whatsapp.index" icon={<IoLogoWhatsapp size={20} />} value={"Whatsapp"} sublink={true} />
                                <SideLink openside={true} url="impressoes.index" icon={<AiFillPrinter size={20} />} value={"Impressões"} sublink={true} />
                                <SideLink openside={true} url="etiquetas.index" icon={<AiFillTags size={20} />} value={"Etiquetas"} sublink={true} />
                                <SideLink openside={true} url="gerais.index" icon={<IoCog size={20} />} value={"Gerais"} sublink={true} />
                            </ul>
                        )}
                    </li>
                    <SideLink openside={openSide} url="usuarios.index" icon={<IoPerson size={20} />} value={"Usuários"} />
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
