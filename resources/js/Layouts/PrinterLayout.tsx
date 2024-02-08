import { Link } from "@inertiajs/react";
import React, { useRef } from "react";
import { IoArrowBackSharp, IoPrint } from "react-icons/io5";
import ReactToPrint from "react-to-print";

interface PrinterLayoutProps {
    children: React.ReactNode;
    backlink?: string;
}

const PrinterLayout = ({ children, backlink }: PrinterLayoutProps) => {
    const componentRef = useRef<HTMLDivElement>(null);
    return (
        <div
            className="
        w-[21cm] 
        h-[29.7cm] 
        mx-auto 
        screen:rounded-b-md 
        screen:shadow-lg 
        screen:border 
        screen:border-white 
        screen:bg-gray-50 
        m-3
        "
        >
            <div
                className="
            flex
            items-center
            justify-between
            print:hidden 
            bg-gray-50 
            py-2 
            screen:rounded-t-md
            px-3 
            border-b
            "
            >
                <Link
                    href={`${backlink}`}
                    as="button"
                    type="button"
                    className="flex item-center justify-center py-2 px-6 bg-gray-200 rounded-md shadow border border-gray-300 text-sm text-gray-600"
                >
                    <IoArrowBackSharp size={18} />
                    <span className="ml-1">Voltar</span>
                </Link>
                <button onClick={() => print()} className="flex item-center justify-center py-2 px-6 bg-gray-200 rounded-md shadow border border-gray-300 text-sm text-gray-600">
                    <IoPrint size={18} />
                    <span className="ml-1">Imprimir</span>
                </button>
                {/* <ReactToPrint
                    bodyClass="mx-[5.7mm] my-[12.5mm] w-[21cm] h-[29.7cm]"
                    // pageStyle="@page { size: A4 }"
                    trigger={() => (
                        <button className="flex item-center justify-center py-2 px-6 bg-gray-200 rounded-md shadow border border-gray-300 text-sm text-gray-600">
                            <IoPrint size={18} />
                            <span className="ml-1">Imprimir</span>
                        </button>
                    )}
                    content={() => componentRef.current}
                /> */}
            </div>
            <div ref={(el) => (componentRef.current = el)}>
                {children}
            </div>
        </div>
    );
};
export default PrinterLayout;
