/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'vs-bg-dark': '#0E0C16',
                'vs-card-bg': '#121217',
                'vs-border': '#2D2C33',
                'vs-primary': '#A67AF5', // A nice purple
                'vs-text-secondary': '#8A8A93',
            },
            boxShadow: {
                'vs-glow': '0 0 20px -5px rgba(166, 122, 245, 0.3)',
            }
        },
    },
    plugins: [],
}
