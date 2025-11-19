import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: '#003DA5',
  				light: '#4A6FB5'
  			},
  			accent: {
  				DEFAULT: '#00ABC8',
  				light: '#E5F6F9'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Calibri',
  				'Helvetica Neue',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			'display-xl': [
  				'64px',
  				{
  					lineHeight: '72px',
  					letterSpacing: '-1px'
  				}
  			],
  			'display-lg': [
  				'48px',
  				{
  					lineHeight: '56px'
  				}
  			],
  			'display-md': [
  				'24px',
  				{
  					lineHeight: '32px'
  				}
  			]
  		},
  		spacing: {
  			xs: '8px',
  			sm: '16px',
  			md: '24px',
  			lg: '48px',
  			xl: '96px'
  		},
  		borderRadius: {
  			sm: '8px',
  			md: '16px',
  			lg: '24px'
  		},
  		boxShadow: {
  			sm: '0 1px 3px rgba(0,0,0,0.1)',
  			DEFAULT: '0 4px 6px rgba(0,0,0,0.1)',
  			lg: '0 10px 15px rgba(0,0,0,0.1)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
