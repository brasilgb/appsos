import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
            },
            colors: {
                'screen-login': '#1B2335',
                blue: {
                    light: '#253C53',
                    middle: '#293751',
                    dark: '#1C2537',
                },
                gray: {
                    light: '#FCFBFA',
                    middle: '#F6F7F9',
                    dark: '#ddd',
                },
            },
        },
    },

    plugins: [forms],
};
