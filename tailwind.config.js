/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#242424",
        foreground: "#2B2B2B",
        tooltip: "rgba(30, 30, 30, 1)",
        card: {
          DEFAULT: "#383838",
        },
        text: {
          DEFAULT: "#FFFFFF",
          secondary: "#B7B7B7",
          disabled:"#606161"
        },
        primary: {
          DEFAULT: "rgba(255, 255, 255, 0.15)",
        },
        secondary: {
          DEFAULT: "rgba(255, 255, 255, 0.15)",
        },
        icon:"#878787",
        field: "#242424",
        input:"#353535",
        accent: {
          DEFAULT: "#FFBF00",
          orange2: "#FB9937",
          orange3: "#F37F0C",
        },
        sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  			}
      },
    },
  },
  plugins: [import("tailwindcss-animate")],
};
