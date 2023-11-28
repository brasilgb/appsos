import React from "react";
interface CheckProps {
    className?: string;
    props:any;
}
export default function Checkbox({ className = '', ...props }: CheckProps) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 ' +
                className
            }
        />
    );
}
