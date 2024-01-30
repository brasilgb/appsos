import React from "react";

interface GuestLayoutProps {
    children: React.ReactNode;
}

const GuestLayout = ({ children }: GuestLayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            {children}
        </div>
    );
};
export default GuestLayout;
