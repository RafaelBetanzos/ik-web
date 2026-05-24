/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'forest':  '#0f1a0e',
        'cream':   '#f5ede0',
        'gold':    '#c9a84c',
        'sage':    '#5f8b52',
        'primary': '#5f8b52',
        'secondary': '#e68300',
      },
      fontFamily: {
        'sans':          ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        'serif':         ['var(--font-cormorant)', 'Georgia', 'serif'],
        'display':       ['var(--font-bambino)'],
        'display-serif': ['var(--font-merriweather)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        'hero': '42rem',
      },
      letterSpacing: {
        'super': '0.35em',
      },
    },
  },
  plugins: [],
}
