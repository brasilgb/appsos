import React from "react";
import moment from "moment";
import { usePage } from "@inertiajs/react";

const Footer = () => {
    const { confemp } = usePage().props;
    return (
        <footer className="flex flex-row items-center justify-betwen py-2 px-4 border-t bg-white">
            <div className="flex flex-1 justify-start">
                <p className="text-xs font-normal text-gray-700">
                    {moment().format('YYYY')}&copy; - Licenciado para - {confemp[0]?.empresa} - CNPJ: {confemp[0]?.cnpj}
                </p>
            </div>
            <div className="flex flex-1 justify-end">
                <span className="text-sm text-megb-yellow font-semibold">MEGB</span>
            </div>
        </footer>
    );
};

export default Footer;
