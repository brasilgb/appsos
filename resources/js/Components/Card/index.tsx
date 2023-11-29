import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export const Card = ({ children }: CardProps) => {
    return (
        <div className="w-full md:m-4">
            {children}
        </div>
    )
}

export const CardHeader = ({ children }: CardProps) => {
    return (
        <div className="flex items-center justify-between bg-white p-2 rounded-t-md">
            {children}
        </div>
    )
}

export const CardHeaderContent = ({ children, className }: CardProps) => {
    return (
        <div className={`flex-1 ${className}`}>
            {children}
        </div>
    )
}

export const CardBody = ({ children }: CardProps) => {
    return (
        <div className="bg-white">
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
