import { useForm } from "@inertiajs/react";
import React, { useEffect, useState } from 'react'
import { IoClose, IoTrash } from "react-icons/io5";
import { SaveButton } from "../Buttons";
import { useAppContext } from "@/Contexts/appContext";
import { FaMemory } from "react-icons/fa6";

interface PecasProps {
    produtos: any;
}

const InsertParts = ({ produtos }: PecasProps) => {
    const {
        showModalParts,
        setShowModalParts,
        sendOrderParts,
        setSendOrderParts } = useAppContext();
    const [filterSearch, setFilterSearch] = useState<any>([]);
    const [partySelected, setPartySelected] = useState<any>([]);
    const { data, setData } = useForm({
        pecas: "",
        quantidade: "",
        valor: "",
    });

    const handleSearch = (value: any) => {
        const peca = value.toLowerCase();
        const result = produtos.filter((cl: any) => (cl.descricao.toLowerCase().includes(peca)));
        setFilterSearch(result);
    };

    useEffect(() => {
        const filter = data.pecas;
        if (filter === "") {
            setFilterSearch([]);
        }
    }, [data]);

    const handleChangePecas = (id: any, descricao: any, valor: any) => {
        let data = { 'id': id, 'descricao': descricao, 'valvenda': valor }
        setPartySelected([...partySelected, data]);
        setData((data) => ({ ...data, pecas: '' }));
        setFilterSearch([]);
    };

    const handleRemovePeca = (idx: number) => {
        const select = partySelected.filter((item: any, idxb: number) => (idxb !== idx));
        setPartySelected(select);
    }

    const handleInsertPecas = () => {
        setSendOrderParts(partySelected);
        setShowModalParts(false);
    }
    // useEffect(() => {partySelected},[partySelected]);
    return (
        <>
            {showModalParts &&
                <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-gray-800/90 z-40">
                    <div className="w-full sm:max-w-md mx-4 bg-gradient-to-t from-gray-300 via-white to-gray-200 shadow-md overflow-hidden rounded-md border border-white text-gray-600">
                        <div className="h-8 flex items-center justify-between border-b px-2 bg-blue-cinco text-white rounded-t-lg">
                            <FaMemory size={18} />
                            <h1 className="ml-2 flex-1 text-sm font-semibold">Adicione peças/produtos a ordem</h1>
                            <div className="cursor-pointer"><IoClose size={20} onClick={() => setShowModalParts(false)} /></div>
                        </div>
                        <div className="p-2">
                            <div className="flex flex-col col-span-2 relative">
                                <label
                                    className="label-form"
                                    htmlFor="pecas"
                                >
                                    Buscar Peça
                                </label>
                                <input
                                    id="pecas"
                                    type="text"
                                    value={data.pecas}
                                    onChange={(e) => {
                                        setData(
                                            "pecas",
                                            e.target.value,
                                        )
                                        handleSearch(e.target.value)
                                    }
                                    }
                                    className="input-form"
                                />
                                {filterSearch.length > 0 &&
                                    <div className="absolute bg-gray-50 border-2 border-white shadow-md w-full rounded-sm top-16 max-h-52 overflow-y-auto">
                                        <ul className="p-1">
                                            {filterSearch.map((pecas: any, idx: number) => (
                                                <li key={idx} className={`flex items-center justify-normal ${idx < (filterSearch.length - 1) ? 'border-b border-gray-200' : ''}`}>
                                                    <div
                                                        className="text-sm text-gray-600 p-1 cursor-pointer inline-block w-full"
                                                        onClick={() => handleChangePecas(pecas.id, pecas.descricao, pecas.valvenda)}
                                                    >
                                                        {pecas.descricao}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                }
                            </div>
                            {partySelected.length > 0 &&
                            <div className="mt-4 p-2 border border-gray-300 rounded-md">
                                {/* <div>
                                    <h1 className="text-sm font-medium uppercase border-b border-b-gray-300">Peças selecionadas</h1>
                                </div> */}
                                {partySelected.map((peca: any, idx: number) => (
                                    <div key={idx} className={`py-1 grid grid-cols-4 ${partySelected.length - 1 == idx ? '' : 'border-b border-b-gray-300'}`}>
                                        {/* <div>{peca.id}</div> */}
                                        <div>{peca.descricao}</div>
                                        <div>{peca.valvenda}</div>
                                        <div>
                                            <button
                                                type="button"
                                                onClick={() => handleRemovePeca(idx)}
                                                className="bg-red-500 rounded text-white p-1"
                                            >
                                                <IoTrash />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
            }
                            <div className="mt-4 flex justify-end">
                                <button
                                    onClick={handleInsertPecas}
                                    className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-600 py-1.5 px-3 rounded-md shadow text-gray-50 self-end"
                                >
                                    <FaMemory size={18} />
                                    <span>Inserir peças</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default InsertParts