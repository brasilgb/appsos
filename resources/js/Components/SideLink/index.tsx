import { Link } from '@inertiajs/react'
import React from 'react'

interface SideLinkProps {
    url: string;
    icon: any;
    value: string;
    sublink?: boolean;
    openside?: boolean;
}

const SideLink = (props: SideLinkProps) => {
    return (
        <li>
            <Link
                className={`flex items-center h-10 pl-2.5 gap-2 rounded-md transition-colors duration-300 
                ${props.sublink
                        ? route().current(props.url) ? "text-gray-50 bg-blue-quatro" : "text-gray-500 hover:bg-blue-quatro hover:text-gray-100"
                        : route().current(`${props.url}${props.url == 'dashboard' ? '':'.*'}`) ? "text-white bg-blue-quatro" : "text-gray-100 hover:bg-blue-quatro hover:text-gray-400"
                    } 
                group`}
                href={route(`${props.url}${props.url == 'dashboard' ? '':'.index'}`)}
            >
                <div>{props.icon}</div>
                <div className={`duration-300 ${!props.openside && "hidden"}`}>{props.value}</div>
            </Link>
        </li>
    )
}

export default SideLink