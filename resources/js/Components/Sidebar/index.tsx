import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { AiFillFileMarkdown, AiFillPrinter, AiFillTags, AiOutlineDashboard } from "react-icons/ai";
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
import { GiAutoRepair } from "react-icons/gi";
import SideLink from "../SideLink";
import { useAppContext } from "@/Contexts/appContext";
import { MdAutoAwesomeMotion } from "react-icons/md";

const Sidebar = () => {
    const { url } = usePage() as any;
    const {openSide, setOpenSide} = useAppContext();
    const [openDropDown, setOpenDropDown] = useState<boolean>(false);
    const [openDropDownTwo, setOpenDropDownTwo] = useState<boolean>(false);
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
                    <SideLink openside={openSide} url="clientes" icon={<IoPeopleSharp size={20} />} value={"Clientes"} />
                    <SideLink openside={openSide} url="ordens" icon={<IoConstruct size={20} />} value={"Ordens"} />
                    {/* <SideLink openside={openSide} url="produtos" icon={<FaBasketShopping size={20} />} value={"Produtos/Peças"} /> */}
                    <SideLink openside={openSide} url="servicos" icon={<GiAutoRepair size={20} />} value={"Serviços"} />
                    <SideLink openside={openSide} url="agendas" icon={<FaCalendarDays size={20} />} value={"Agenda"} />
                    <SideLink openside={openSide} url="mensagens" icon={<IoChatboxEllipses size={20} />} value={"Mensagens"} />
                    <li className="">
                        <div
                            className={`flex items-center justify-between pl-2.5 py-2 pr-2 cursor-pointer ${url.startsWith("/configuracoes") ? "text-gray500 bg-blue-quatro" : "text-gray-100 hover:bg-blue-middle hover:text-gray-400"} ${openDropDownTwo ? "bg-gray-50 hover:bg-gray-50 text-gray-600  border-b rounded-t-lg" : "text-gray-100 rounded-lg"}`}
                            onClick={() => setOpenDropDownTwo((state) => !state)}
                        >
                            <FaSliders size={20} />
                            {openSide &&
                                <>
                                    <div className="self-start w-full pl-2">
                                        Configurações
                                    </div>
                                    <FaChevronDown
                                        size={12}
                                        className={`${openDropDownTwo ? "-rotate-180" : "rotate-0"
                                            } transition-all duration-300`}
                                    />
                                </>
                            }
                        </div>
                        {openDropDownTwo && (
                            <ul className={`bg-gray-50 flex flex-col gap-1 rounded-b-lg p-2 ${!openSide ? 'w-52 absolute' : 'w-[248px]'} `}>
                                <SideLink openside={true} url="empresa" icon={<HiBuildingOffice size={20} />} value={"Empresa"} sublink={true} />
                                <SideLink openside={true} url="whatsapp" icon={<IoLogoWhatsapp size={20} />} value={"Whatsapp"} sublink={true} />
                                <SideLink openside={true} url="impressoes" icon={<AiFillPrinter size={20} />} value={"Impressões"} sublink={true} />
                                <SideLink openside={true} url="etiquetas" icon={<AiFillTags size={20} />} value={"Etiquetas"} sublink={true} />
                                <SideLink openside={true} url="gerais" icon={<IoCog size={20} />} value={"Gerais"} sublink={true} />
                            </ul>
                        )}
                    </li>
                    <SideLink openside={openSide} url="usuarios" icon={<IoPerson size={20} />} value={"Usuários"} />
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
