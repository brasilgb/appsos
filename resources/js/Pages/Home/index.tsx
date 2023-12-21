import { Card, CardBody, CardFooter, CardHeader } from "@/Components/Card";
import AuthLayout from "@/Layouts/AuthLayout";
import React from "react";

const Home = () => {
    return (
        <AuthLayout>
            <Card>
                <CardHeader>
                    Home
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
export default Home;