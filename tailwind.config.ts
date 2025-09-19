import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      
      colors: {
        // Backgrounds & Foregrounds
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      
        // Card Background & Text
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      
        // Popovers
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      
        // Primary
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
      
        // Secondary
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      
        // Muted tones
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
      
        // Accent
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      
        // Destructive (warnings or red alerts)
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      
        // Borders, Inputs, and Rings
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      
        // Chart colors
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      
        // Gym Brand Colors
        // Updated to gym-inspired energetic and modern shades
        gymPrimary: "#FF6F61", // Fresh Coral: energetic and inviting
        gymSecondary: "#4CAF50", // Fresh Green: fitness and health vibes
        gymAccent: "#FFC107", // Vivid Amber: energy and motivation
        gymBackground: "#1E1E1E", // Dark Slate: modern, sleek background
        gymText: "#F4F4F4", // Light Grey: balanced, readable text
        gymBorder: "#333333", // Deep grey for sharp borders
        gymHighlight: "#00BCD4", // Bright Cyan: cool, modern pop
      
        // Other gym-inspired shades
       
        cream: "#F7E1BC",
        forest: "#2F4F4F", // Dark, grounding green
        matcha: "#A5C9A1", // Fresh and healthy green
        gold: "#C9A66B", // Subtle metallic gold, adds warmth
      },
      
      // Updated font family (optional to match modern gym)
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ['"Roboto"', '"Helvetica Neue"', 'sans-serif'], // Clean, modern sans-serif font for the body
      },
      
      animation: {
        grid: "grid 15s linear infinite",
        'float-up': 'float-up 1s ease-out forwards',
      },
      keyframes: {
        grid: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        'float-up': {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(-100px)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@xpd/tailwind-3dtransforms"),
  ],
};

export default config;
