/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/app/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryOrange: '#FF5C0A',
        orange2: '#FF884D',
        orange3: '#FF7733',
        orange4: '#FF661A',
        orange6: '#E54D00',
        orange7: '#CC4400',
        orange8: '#B23C00',
        primaryGray: '#483F3F',
        gray2: '#968787',
        gray3: '#7D6D6D',
        gray4: '#625656',
        gray6: '#2C2626',
        gray7: '#161313',
        gray8: '#000000'
      },
      gridTemplateColumns: {
        'responsive': 'repeat(auto-fill, minmax(250px, 3fr))',
      }
    },
  },
  plugins: [],
}

