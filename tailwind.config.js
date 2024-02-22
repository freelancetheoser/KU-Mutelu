import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
const { violet, blackA, mauve, green } = require('@radix-ui/colors');

/** @type {import('tailwindcss').Config} */
export default {
    plugins: [
        require('flowbite/plugin')
    ],

    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        "./node_modules/flowbite/**/*.js",
        'node_modules/flowbite-react/lib/esm/**/*.js',
    ],

    theme: {
        extend: {
            colors: {
                ...mauve,
                ...violet,
                ...green,
                ...blackA,
              },
            keyframes: {
                overlayShow: {
                  from: { opacity: '0' },
                  to: { opacity: '1' },
                },
                contentShow: {
                  from: { opacity: '0', transform: 'translate(-50%, -48%) scale(0.96)' },
                  to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
                },
              },
              animation: {
                overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
                contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
              },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                'background-regis': "url('/public/Background/Background.jpg')",
            },
        },
    },

};
