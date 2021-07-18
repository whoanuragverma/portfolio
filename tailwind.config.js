module.exports = {
    purge: [
        './components/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
    ],

    darkMode: 'class',
    theme: {
        extend: {
            boxShadow: {
                red: '0 4px 10px -1px rgba(251, 104, 55, 0.5), 0 2px 4px -1px rgba(251, 104, 55, 0.25)',

                blue: '0 4px 10px -1px rgba(100, 149, 237, 0.5), 0 2px 4px -1px rgba(100, 149, 237, 0.25)',
            },
            colors: {
                swatch: {
                    red: '#FF4000',
                    redActive: '#FB6837',
                    yellow: '#FFB627',
                    yellowActive: '#FFC971',
                    blue: '#4169e1',
                    blueActive: '#6495ed',
                },
            },
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
        boxShadow: ['hover', 'dark'],
    },
    plugins: [],
};
