/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
     "./components/**/*.{js,vue,ts}",
     "./layouts/**/*.vue",
     "./pages/**/*.vue",
     "./plugins/**/*.{js,ts}",
     "./nuxt.config.{js,ts}",
     "./app.vue",
   ],
   theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      body: ['Roboto', 'Raleway']
    },
    fontSize: {
      sm: ['12px', '14px'],
      base: ['14px', '16px'],
      lg: ['16px', '19px'],
      xl: ['18px', '21px'],
    },
     extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
     },
   },
   plugins: [],
 }