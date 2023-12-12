import PrinterLayout from "@/Layouts/PrinterLayout"
import React from 'react'

const Printer = ({ empresa, ordem }: any) => {

    return (
        <PrinterLayout>
            <div className="grid grid-cols-6 gap-1">
                {empresa.telefone} {ordem.id}
            </div>
        </PrinterLayout>
    )
}

export default Printer