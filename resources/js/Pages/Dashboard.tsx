import { Card, CardBody, CardFooter, CardHeader } from "@/Components/card";
import AuthLayout from "@/Layouts/AuthLayout";
import React from "react";

const Dashboard = () => {
    return (
        <AuthLayout>
            <Card>
                <CardHeader>
                    Dashboard
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
export default Dashboard;