module.exports = {
    purge: ['./pages/**/*.{tsx}', './components/**/*.{tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                raleway: ['Raleway', 'sans-serif'],
                quicksand: ['Quicksand', 'sans-serif'],
            },
            animation: {
                fadeIn: 'fadeIn 0.5s ease-in-out forwards',
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
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
