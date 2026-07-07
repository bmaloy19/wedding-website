/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Core palette */
        coffee:     '#6E4E3D',
        saddle:     '#4F3729',
        bistre:     '#443024',
        cement:     '#887262',
        chamoisee:  '#9D7F65',

        /* Light neutrals — tints of the core palette */
        ivory:      '#FAF8F5',
        cream:      '#F3EEE7',
        taupe:      '#887262', /* Cement */
        brown: {
          100: '#EEE8E1',
          200: '#D6C8BB',
          300: '#B59F8B',
          400: '#9D7F65', /* Chamoisee */
          500: '#6E4E3D', /* Coffee */
          600: '#4F3729', /* Saddle */
          700: '#443024', /* Bistre */
        },
        ink:        '#221812',
        champagne:  '#E7D8C6',
        gold:       '#9D7F65', /* Chamoisee */
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
