const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
const { join } = require('path')

module.exports = {
  content: [join(__dirname, 'src/**/*.{html,ts,tsx}')],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '0rem',
      },
    },
    extend: {
      // create custom fonts here
      fontFamily: {
        mono: ["'Outfit'", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        'secondary-900': 'hsl(220, 15%, 55%)',
        'secondary-50': 'hsl(212, 45%, 89%)',
        'dark-900': 'hsl(218, 44%, 22%)',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '1440px',
        },
      })
    }),
  ],
}
