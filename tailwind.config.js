/** @type {import('tailwindcss').Config} */
import {
	transparent as _transparent,
	white as _white
} from 'tailwindcss/colors';


const colors = {
    transparent: _transparent,
    white: _white,
    black: '#484855',
    'black-inactive': '#C2C6CF',
    primary: '#7A57E2',
    'primary-light': '#F2F0FC',
    secondary: '#5AC97F',
    'bg-color': '#FAF9FC',
    'main-bg': '#F9F9FB',
    'border-color': '#E9E7FA',
    'error-color': '#F05568',
    warning: '#F1D399',
}
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,scss}'],
    important: true,
    theme: {
        colors,
        extend: {
            fontSize: {
                xs: '0.82rem',
                sm: '0.98rem',
                base: '1.15rem',
                lg: '1.22rem',
                xl: '1.36rem',
                '1.5xl': '1.5rem',
                '2xl': '1.725rem',
                '3xl': '2.155rem',
                '4xl': '2.58rem',
                '5xl': '3.45rem',
                '6xl': '4.3rem',
                '7xl': '5.17rem',
                '8xl': '6.9rem',
                '9xl': '9.2rem',
            },
            keyframes: {
                animationOpacity: {
                    from: { opacity: 0.2 },
                    to: { opacity: 1 },
                },
                scaleIn: {
                    '0%': {
                        opacity: 0,
                        transform: 'scale(0.9)',
                    },
                    '50%': {
                        opacity: 0.3,
                    },
                    '100%': {
                        opacity: 1,
                        transform: 'scale(1)',
                    },
                },
            },
            animation: {
                opacity: 'animationOpacity .5s easy-in-out',
                scaleIn: 'scaleIn .35s easy-in-out',
            },
            gridTemplateColumns: {
                // Простая сетка из 16 столбцов
                '16': 'repeat(16, minmax(0, 1fr))',

            }
        },
    },
    plugins: [],
}
