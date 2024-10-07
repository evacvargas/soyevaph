/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {clipPath: {
      'polygon-shape': 'polygon(0 0, 100% 10%, 100% 90%, 0 100%)',
    },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        sparkle: {
          '0%': { 
            color: '#a6a6a6', 
            textShadow: '0 0 0 rgba(166, 166, 166, 0)' 
          },
          '25%': { 
            color: '#d3d3d3', 
            textShadow: '0 0 10px rgba(166, 166, 166, 0.8), 0 0 20px rgba(166, 166, 166, 0.4)' 
          },
          '50%': { 
            color: '#fff', 
            textShadow: '0 0 20px rgba(166, 166, 166, 1), 0 0 30px rgba(166, 166, 166, 0.9)' 
          },
          '75%': { 
            color: '#d3d3d3', 
            textShadow: '0 0 10px rgba(166, 166, 166, 0.8), 0 0 20px rgba(166, 166, 166, 0.4)' 
          },
          '100%': { 
            color: '#a6a6a6', 
            textShadow: '0 0 0 rgba(166, 166, 166, 0)' 
          },
        },
      },
      animation: {
        sparkle: 'sparkle 2s ease-in-out infinite',
      },
      zIndex: {
        '1': '1',
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
};
