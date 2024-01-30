import { usePage } from "@inertiajs/react";
import React from "react";
const Logo = () => {
    const { confemp } = usePage().props;

    return (
        <div className="w-40">
            <img
                src={`/storage/images/${confemp[0]?.logo ? confemp[0]?.logo : "default.png"}`}
                alt="Logo"
            />
        </div>
    );
};

export default Logo;
