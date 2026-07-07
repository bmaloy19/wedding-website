/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory:      '#FAF7F1',
        cream:      '#F4EEE2',
        parchment:  '#EAE0CD',
        blush:      '#E7D3BE',
        taupe:      '#A28E76',
        brown: {
          100: '#EFE7DA',
          200: '#DCC9B0',
          300: '#BC9E7D',
          400: '#97744F',
          500: '#6F4E33',
          600: '#452F1D',
          700: '#2A1B10',
        },
        ink:        '#1B110A',
        champagne:  '#EBD8AF',
        gold:       '#B4945A',
      },
      fontFamily: {
        serif:    ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:     ['"Jost"', 'system-ui', 'sans-serif'],
        script:   ['"Adora Bouton"', 'cursive'],
        garamond: ['"Apple Garamond"', '"Cormorant Garamond"', 'Garamond', 'Georgia', 'serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        mega:   '0.4em',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
