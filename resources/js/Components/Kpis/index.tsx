import React from 'react'

interface KpisProps {
    props: {
        title: string;
        value: string;
        url: string;
    }
}

const Kpis = ({ props }: KpisProps) => {
    return (
        <div className="bg-gray-50 border border-white rounded shadow-lg">
            <h1>{props?.title}</h1>
            <h1>{props?.value}</h1>
        </div>
    )
}

export default Kpis