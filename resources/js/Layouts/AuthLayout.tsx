import React from "react";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <main className="bg-slate-200">
            <div className='flex'>
                <div>
                    <Sidebar/>
                </div>
                <div className='min-h-screen flex flex-1 flex-col'>
                    <Header />
                    <div className='flex-grow'>
                        {children}
                    </div>
                    <Footer />
                </div>
            </div>
        </main>
    );
};
export default AuthLayout;
