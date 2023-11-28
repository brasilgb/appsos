import { Card, CardBody, CardFooter, CardHeader } from "@/Components/card";
import AuthLayout from "@/Layouts/AuthLayout";
import React from "react";

const EditCliente = () => {
    return (
        <AuthLayout>
            <Card>
                <CardHeader>
                    EditCliente
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
export default EditCliente;