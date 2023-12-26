import { Card, CardBody, CardFooter, CardHeader } from "@/Components/Card";
import Kpis from "@/Components/Kpis";
import AuthLayout from "@/Layouts/AuthLayout";
import React from "react";

const Home = () => {
    return (
        <AuthLayout>
            <div></div>
           <Kpis props={{
                title: "Ordens",
                value: "1000",
                url: "/"
            }}/>
        </AuthLayout>
    );
}
export default Home;