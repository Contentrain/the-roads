module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }

      'xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '2xl': '1792',
      // => @media (min-width: 1792) { ... }
    }
  },
  plugins: []
};