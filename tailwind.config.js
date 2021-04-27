module.exports = {
    purge: [
        './components/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                raleway: ['Raleway', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
            height: {
                'fill-80': 'calc(100vh - 5rem)',
            },
            animation: {
                fadeIn: 'fadeIn 0.5s ease-in-out forwards',
                fadeInDown:
                    'fadeInDown 0.3s ease-in-out forwards calc(var(--animation-delay)*70ms)',
            },
            keyframes: {
                fadeIn: {
                    '0%': {
                        opacity: 0,
                        transform: 'translate3d(0, 30%, 0)',
                    },
                    '100%': {
                        opacity: 1,
                        transform: 'none',
                    },
                },
                fadeInDown: {
                    '0%': {
                        opacity: 0,
                        transform: 'translate3d(0, -50%, 0)',
                    },
                    '100%': {
                        opacity: 1,
                        transform: 'none',
                    },
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
