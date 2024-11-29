import React from "react";
import UserDropDown from "../UserDropDown";
import { usePage } from "@inertiajs/react";
import MessageDropDown from "../MessageDropDown";
import { IoChatboxEllipses } from "react-icons/io5";

const Header = () => {
    const { messages } = usePage().props as any;
    return (
        <header className="flex items-center justify-between h-[65px] bg-white shadow-sm pr-4">
            <div></div>
            <div className="flex items-center gap-8">
            {messages[0].length > 0 ? (
                <MessageDropDown mensagens={messages} />
            ) : (
                <div className="text-red-300">
                    <IoChatboxEllipses size={24} />
                </div>
            )}
                <UserDropDown />
            </div>
        </header>
    );
};

export default Header;
