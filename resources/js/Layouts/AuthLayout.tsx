import Footer from "@/Components/footer";
import Header from "@/Components/header";
import Sidebar from "@/Components/sidebar";
import React from "react";

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {

    return (
        <div className="min-h-screen bg-gray-100">
            <main className="flex min-h-screen flex-row bg-gray-middle">
                <Sidebar />
                <div className="flex flex-grow flex-col transition-all duration-150 ease-in md:ml-0">
                    <Header />
                    <div className="w-full flex h-full items-start justify-start p4">
                        {children}
                    </div>
                    <Footer />
                </div>
            </main>
        </div>
    );
}
export default AuthLayout;