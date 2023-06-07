/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: '2.5rem'
    },
    extend: {
      colors: {
        primary: '#101010',
        secondary: '#999',
        emphasize: '#efe960',
        text: '#292929',
        soft: '#f0f0f0'
      }
    },
    fontFamily: {
      orbitron: ['Orbitron']
    }
  },
  plugins: [require('@tailwindcss/line-clamp'), require('tailwind-scrollbar-hide')]
};
