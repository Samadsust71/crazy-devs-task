/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: '#242424',
  			foreground: '#2B2B2B',
  			card: {
  				DEFAULT: '#363636',
  			},
  			text: {
  				DEFAULT: '#FFFFFF',
  				secondary: '#B7B7B7'
  			},
  			primary: {
  				DEFAULT: 'rgba(255, 255, 255, 0.15)',
  			},
  			secondary: {
  				DEFAULT: 'rgba(255, 255, 255, 0.15)',
  				
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: '#FFBF00',
          orange2: "#FB9937",
          orange3 : "#F37F0C"
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  		}
  	}
  },
  plugins: [import("tailwindcss-animate")],
}