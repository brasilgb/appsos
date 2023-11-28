import React from 'react';

interface CardProps {
    children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
    return (
        <div className="w-full md:m-4 bg-white border border-gray-100 shadow rounded-md">
            {children}
        </div>
    )
}

export const CardHeader = ({ children }: CardProps) => {
    return (
        <div className="bg-white p-2 rounded-t-md">
            {children}
        </div>
    )
}

export const CardBody = ({ children }: CardProps) => {
    return (
        <div>
            {children}
        </div>
    )
}

export const CardFooter = ({ children }: CardProps) => {
    return (
        <div className="bg-white p-2 rounded-b-md">
            {children}
        </div>
    )
}
