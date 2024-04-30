import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    theme: {
        extend: {
            screens: {
                print: { raw: "print" },
                screen: { raw: "screen" },
            },
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
            },
            colors: {
                "screen-login": "#1B2335",
                blue: {
                    um: "#B0BCBC",
                    dois: "#8498A3",
                    tres: "#617C8D",
                    quatro: "#0174BE",
                    cinco: "#0C356A",
                },
                red: {
                    um: "#CA0156",
                },
                gray: {
                    um: "#202029",
                },
                megb: {
                    yellow: "#EEA917",
                },
            },
        },
    },

    plugins: [forms],
};
