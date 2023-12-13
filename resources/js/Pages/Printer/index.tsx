import PrinterLayout from "@/Layouts/PrinterLayout"
import React from 'react'

const Printer = ({ empresa, ordem, printer }: any) => {

    return (
        <PrinterLayout backlink="/ordens">
            <div className="flex items-start justify-start">
                <div className="flex flex-col items-start justify-start w-full">
                    <h1>{empresa.razao}</h1>
                    <h1>{empresa.cnpj}</h1>
                    <h1>{empresa.endereco} - {empresa.bairro} - {empresa.cidade}</h1>
                    <h1>{empresa.email} - {empresa.telefone}</h1>
                </div>
                <div className="flex items-center justify-start w-44">
                    <img src={`/storage/images/${empresa.logo ? empresa.logo : 'logo.png'}`} alt="" />
                </div>
            </div>
            <div>
                {printer}
            </div>
        </PrinterLayout>
    )
}

export default Printer