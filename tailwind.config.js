module.exports = {
    purge: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "#30694b",
                secondary: "#3dc2ff",
                tertiary: "#5260ff",
                dimWhite: "rgba(255, 255, 255, 0.7)",
                dimBlue: "rgba(9, 151, 124, 0.1)",
            },
            fontFamily: {
                nunito: ["Nunito Sans", "sans-serif"],
            }
        },
        screens: {
            xs: "480px",
            ss: "620px",
            sm: "768px",
            md: "1060px",
            lg: "1200px",
            xl: "1700px",
        }
    },
    variants: {},
    plugins: []
}
