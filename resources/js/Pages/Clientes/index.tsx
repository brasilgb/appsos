import { Card, CardBody, CardFooter, CardHeader } from "@/Components/card";
import AuthLayout from "@/Layouts/AuthLayout";
import React from "react";

const Clientes = () => {
    return (
        <AuthLayout>
            <Card>
                <CardHeader>
                    Clientes
                </CardHeader>
                <CardBody>
                    Body
                </CardBody>
                <CardFooter>
                    Footer
                </CardFooter>
            </Card>
        </AuthLayout>
    );
}
export default Clientes;