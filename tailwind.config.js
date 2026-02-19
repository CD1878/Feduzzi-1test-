/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'feduzzi-red': '#C41E3A', // Deep, premium red
                'feduzzi-red-hover': '#A01830',
                'feduzzi-cream': '#F9F7F2', // Soft background cream
                'feduzzi-dark': '#1A1A1A', // Soft black for text
            },
            fontFamily: {
                serif: ['Playfair Display', 'serif'], // Elegant serif for headings
                sans: ['Inter', 'sans-serif'], // Clean sans for body
            },
            animation: {
                'fadeIn': 'fadeIn 0.5s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
