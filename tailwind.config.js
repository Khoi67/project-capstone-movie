/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            spacing: {
                1: '1rem',
                2: '2rem',
                3: '3rem',
                20: '20rem',
            },
            fontSize: {
                10: '10px',
                12: '12px',
                13: '13px',
            },
            colors: {
              black: '#000'
            }
        },
    },
    plugins: [],
}
