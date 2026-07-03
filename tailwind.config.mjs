/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream:      '#F9F5F0',
        ivory:      '#FDFAF6',
        parchment:  '#EDE4D8',
        blush:      '#E8D5C4',
        taupe:      '#B5A090',
        brown: {
          100: '#EDE0D4',
          200: '#D4B8A0',
          300: '#B8977E',
          400: '#9C7A5E',
          500: '#7D5A42',
          600: '#5C3D28',
          700: '#3D2415',
        },
        champagne:  '#F2E0C0',
        gold:       '#C9A96E',
      },
      fontFamily: {
        serif:  ['"Playfair Display"', 'Georgia', 'serif'],
        sans:   ['"Raleway"', 'system-ui', 'sans-serif'],
        script: ['"Adora Bouton"', 'cursive'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
    },
  },
  plugins: [],
};
