/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/pages/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
    ],

    theme: {
        fontFamily: {
            sans: ['Roboto', 'sans-serif'], // Font style for titles and paragraphs
            serif: ['Merriweather', 'serif'], // Font style for subtitles
        },

        extend: {
            colors: {
                primary: '#0f766e'
            }
        },
    },

    plugins: [],
}