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
            // 1rem is equal to 4 units
            height: {
                '45': '11.25rem',
                '45.5': '11.36rem',
                '46': '11.5rem',
                '46.5': '11.62rem',
                '47': '11.75rem',
                '47.5': '11.86rem',
            },
            colors: {
                primary: '#0f766e'
            }
        },
    },

    plugins: [],
}