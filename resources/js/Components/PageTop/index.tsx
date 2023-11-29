import { Link } from "@inertiajs/react";
import React from 'react'

interface PageTopProps {
    children?: React.ReactNode;
    links?: any;
}

export const HeaderContent = ({ children }: PageTopProps) => {
    return (
        <section className="flex items-center justify-between mb-4">
            {children}
        </section>
    )
}

export const TitleTop = ({ children }: PageTopProps) => {
    return (
        <div>
            <h1 className="text-2xl text-gray-600">{children}</h1>
        </div>
    )
}

export const BreadCrumbTop = ({ links }: PageTopProps) => {
    return (
        <div>
            <ul className="flex items-center justify-end text-base text-gray-600">
                <li>
                    <Link
                        className="text-blue-600"
                        href="/"
                    >
                        Dashboard
                    </Link>
                </li>
                <li className="px-1.5 text-gray-400">/</li>
                {links.map((link: any) => (
                    <>
                    <li>
                        {
                            link.url !== null
                                ? <Link className="text-blue-600" href={link.url}>{link.label}</Link>
                                : link.label
                        }
                    </li>
                    {link.url !== null && <li className="px-1.5 text-gray-400">/</li>}
                    </>
                ))}
            </ul>
        </div>
    )
}
