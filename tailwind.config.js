const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Quicksand', ...defaultTheme.fontFamily.sans],
                sans_helv: ['Helvetica Neue', 'sans-serif'],
            },
            fontSize: {
                '11px': '11px',
                '12px': '12px',
                '13px': '13px',
                '14px': '14px',
                '15px': '15px',
                '16px': '16px',
                '17px': '17px',
                '18px': '18px',
                '20px': '20px',
                '21px': '21px',
                '24px': '24px',
                '25px': '25px',
                '26px': '26px',
                '28px': '28px',
                '30px': '30px',
                '32px': '32px',
                '37px': '37px',
                '54px': '54px'
            },
            colors: {
                tokago: {
                    pink: '#f5eded',
                    gray: '#F3F3F3'
                },
            }
        }
    },

    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ],
};
