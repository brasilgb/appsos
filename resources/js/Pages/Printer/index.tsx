import PrinterLayout from "@/Layouts/PrinterLayout";
import "moment/dist/locale/pt-br";

import React from "react";
import PrinterData from "./printer";

const Printer = ({ empresa, ordem, printer, tipo }: any) => {
    return (
        <PrinterLayout backlink="/ordens">
            <PrinterData
                empresa={empresa}
                ordem={ordem}
                printer={printer}
                tipo={tipo}
            />
            <hr className="border border-dashed"/>
            <PrinterData
            empresa={empresa}
            ordem={ordem}
            printer={printer}
            tipo={tipo}
        />
        </PrinterLayout>
    );
};

export default Printer;
