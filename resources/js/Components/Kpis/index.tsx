import { Link } from "@inertiajs/react";
import React from "react";

interface KpisProps {
    props: {
        title: string;
        value: string;
        url: string;
        icon: JSX.Element;
    };
}

const Kpis = ({ props }: KpisProps) => {
    return (
        <Link href={props.url}>
            <div className="bg-gray-50 border border-white rounded shadow p-5 flex items-center justify-between hover:shadow-md">
                <div>
                    <h1 className="text-base text-gray-400">{props?.title}</h1>
                    <h1 className="text-2xl font-bold text-gray-600 ">
                        {props?.value}
                    </h1>
                </div>
                <div className="flex items-center justify-center">
                    {props.icon}
                </div>
            </div>
        </Link>
    );
};

export default Kpis;
