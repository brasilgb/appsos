import { Card, CardBody, CardFooter, CardHeader } from "@/Components/Card";
import AuthLayout from "@/Layouts/AuthLayout";
import React from "react";

const AddCliente = () => {
    return (
        <AuthLayout>
            <Card>
                <CardHeader>
                    AddCliente
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
export default AddCliente;