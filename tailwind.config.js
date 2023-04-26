/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#F91BFD"
      },
      backgroundImage: {
        'theme': 'linear-gradient(223.8deg, #FF469F 5.86%, #F91BFD 58.35%, #7737FE 94.44%)',
        'theme-2': 'linear-gradient(199.22deg, #F91BFD -30.13%, #7737FE 124.95%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    boxShadow: {
      custom: "0px 0px 139px rgba(0, 0, 0, 0.25);"
    }
  },
  plugins: [],
}
