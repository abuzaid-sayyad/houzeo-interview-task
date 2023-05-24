/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: '1rem',
      center: true,
      screens: {
        xl: '1242px',
      },
    },
    extend: {
      colors: {
        /* black color shades */
        'ruby-alpha': '#313030',
        'ruby-beta': '#717171',
        'ruby-gamma': '#707070',
        'ruby-delta': '#626262',
        'ruby-epsilon': '#CCCCCC',
        'ruby-zeta': '#F2F2F5',
        'ruby-mu': '#EBEBF0',
        'ruby-pi': '#F2F2F2',

        /* blue color shades */
        'pearl-alpha': '#004484',
        'pearl-beta': '#0B5AA5',
        'pearl-gamma': '#0E5293',
        'pearl-delta': '#2876C1',

        /* green color shades */
        'amber-alpha': '#00B67B',

        /* orange color shades */
        'jasper-alpha': '#F05D29',
      },
      boxShadow: {
        'bottom' : '0px 3px 5px #4E4E4E26',
        '3xl': '0 15px 30px -10px #0c5aa5',
        '4xl': '0 15px 30px -10px #f05d29',
      },
      screens: {
        'lp': '950px',
      },
      spacing: {
        4.5: '1.125rem',
        5.5: '1.375rem',
        6.5: '1.625rem',
        7.5: '1.875rem',
        17.75: '4.438rem',
        18.5: '4.625rem',
        41 :'10.25rem',
        51 :'12.75rem',
      },
      borderWidth: {
        3: '3px',
        5: '5px',
        6: '6px',
      },
      width: {
        4.5 : '1.125rem',
        7.5: '1.875rem',
        12.5: '3.125rem',
        29.5: '7.375rem',
        37.5: '9.375rem',
        48.5: '12.125rem',
        54: '13.5rem',
        242.5 : '60.625rem',
        '67%': '67%',
        '33%': '33%',
      },
      height: {
        4.5 : '1.125rem',
        8.5: '2.125rem',
        7.5: '1.875rem',
        50 :'12.5rem',
        136.5: '34.125rem'
      },
      fontSize: {
        10: '0.625rem',
        22: '1.375rem',
        28: '1.75rem',
      },
      lineHeight: {
        18: '1.125rem',
        21: '1.313rem',
        25: '1.563rem',
        27: '1.688rem',
        30: '1.875rem',
        34: '2.125rem',
        33:'2.063rem',
      }
    },
  },
  plugins: [],
}

