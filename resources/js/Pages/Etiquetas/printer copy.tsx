import PrinterLayout from "@/Layouts/PrinterLayout";
import React from "react";

const Printer = ({ etiquetas }: any) => {
    return (
        <PrinterLayout backlink="/configuracoes/etiquetas">
            <div className="">
                <div className="grid grid-cols-6 gap-[1mm]">
                    {etiquetas.map((etiqueta: any) => (
                        <div
                            key={etiqueta.ordem}
                            className="flex flex-col items-center justify-between w-[31mm] h-[17mm]  border border-gray-500"
                        >
                            <div className="text-xs font-bold text-gray-600">
                                {etiqueta.empresa}
                            </div>
                            <div className="text-base font-bold text-gray-600">
                                {("0000000" + (etiqueta.ordem)).slice(-7)}
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
// {etiquetas.length > 96 &&
//     <View style={{height:10, width: 100, backgroundColor: 'green'}} ><Text>{etiquetas.length}</Text></View>
//     }