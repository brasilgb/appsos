import React from "react";

interface GuestLayoutProps {
    children: React.ReactNode;
}

const GuestLayout = ({ children }: GuestLayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center w-full bg-gray-500">
            {children}
        </div>
    );
};
export default GuestLayout;
