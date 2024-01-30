import PrinterLayout from "@/Layouts/PrinterLayout";
import React from "react";

const Printer = ({ etiquetas }: any) => {
    return (
        <PrinterLayout backlink="/configuracoes/etiquetas">
            <div className="">
                <div className="grid grid-cols-6 gap-1">
                    {etiquetas.map((etiqueta: any) => (
                        <div
                            key={etiqueta.ordem}
                            className="flex flex-col items-center justify-between w-[31mm] h-[17mm] p-0.5 border border-gray-100"
                        >
                            <div className="text-xs font-bold text-gray-600">
                                {etiqueta.empresa}
                            </div>
                            <div className="text-base font-bold text-gray-600">
                                {etiqueta.ordem}
                            </div>
                            <div className="text-xs font-bold text-gray-600">
                                {etiqueta.telefone}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PrinterLayout>
    );
};

export default Printer;
