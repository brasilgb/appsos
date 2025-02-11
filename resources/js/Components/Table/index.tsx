import React from "react";

interface TableProps {
    children?: React.ReactNode;
    className?: string;
    key?: number;
}

export const Table = ({ children, className }: TableProps) => {
    return (
        <table className={`table-fixed w-full ${className} text-sm`}>
            {children}
        </table>
    );
};

export const TableHeader = ({ children }: TableProps) => {
    return <thead>{children}</thead>;
};

export const TableBody = ({ children }: TableProps) => {
    return <tbody>{children}</tbody>;
};

export const TableRow = ({ children, className, key }: TableProps) => {
    return (
        <tr key={key} className={`${className}`}>
            {children}
        </tr>
    );
};

export const TableHead = ({ children, className }: TableProps) => {
    return (
        <th
            className={`text-left py-3 px-2 bg-gray-200 text-gray-600 ${className}`}
        >
            {children}
        </th>
    );
};

export const TableCell = ({ children, className }: TableProps) => {
    return (
        <td className={`border-b py-2 px-2 text-gray-500 !whitespace-nowrap ${className}`}>
            {children}
        </td>
    );
};
