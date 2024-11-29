import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../Table";
import { IoArrowForward, IoLogoWhatsapp } from "react-icons/io5";
import { Link } from "@inertiajs/react";
import { unMask } from "@/Utils/mask";

interface HomeInfoPrpops {
  data: any;
  title?: string;
  url?: string;
  icon?: JSX.Element;
}

const HomeInfo = ({ data, title, icon, url }: HomeInfoPrpops) => {
  return (
    <div className="mt-4 rounded-md shadow-md hover:shadow-lg bg-gray-50 border border-white">
      <div className="flex items-center justify-start p-2 border-b border-gray-200">
        <div className="text-xl">
          {icon}
        </div>
        <div className="ml-2 text-lg font-medium text-gray-500">
          {title}
        </div>
      </div>
      <div className="p-2">
        <Table>
          <TableHeader>
            <TableHead>#</TableHead>
            <TableHead>Cliente</TableHead>
            <TableHead>Telefone</TableHead>
            <TableHead></TableHead>
          </TableHeader>
          <TableBody>
            {data.map((gerado: any) => (
              <TableRow>
                <TableCell>{gerado.id}</TableCell>
                <TableCell>{gerado.cliente.nome}</TableCell>
                <TableCell>{gerado.cliente.telefone}</TableCell>
                <TableCell>
                  <Link
                    
                    href={`/ordens/${gerado.id}`}
                  >
                    <div
                    className="h-5 w-5 border border-white rounded-full flex items-center justify-center bg-gray-200 text-blue-quatro hover:bg-gray-300 hover:text-blue-cinco shadow-md"
                    >
                      <IoArrowForward />
                    </div>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div>

      </div>
    </div>
  )
}

export default HomeInfo