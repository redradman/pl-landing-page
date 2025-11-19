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
  				'50': '#E8EBF3',
  				'100': '#D1D7E7',
  				'200': '#A3AFCF',
  				'300': '#7587B7',
  				'400': '#475F9F',
  				'500': '#243570',
  				'600': '#1D2A5A',
  				'700': '#162043',
  				'800': '#0E152D',
  				'900': '#070B16',
  				DEFAULT: '#243570',
  				dark: '#002D73'
  			},
  			accent: {
  				'50': '#E6F7F9',
  				'100': '#CCEFF3',
  				'200': '#99DFE7',
  				'300': '#66CFDB',
  				'400': '#33BFCF',
  				'500': '#01ABC1',
  				'600': '#017DA4',
  				'700': '#015F7B',
  				'800': '#014052',
  				'900': '#002029',
  				DEFAULT: '#01ABC1',
  				light: '#6DB4C0',
  				lighter: 'rgba(109, 180, 192, 0.29)'
  			},
  			secondary: {
  				'50': '#ECEEF1',
  				'100': '#D9DDE3',
  				'200': '#B3BBC7',
  				'300': '#8D99AB',
  				'400': '#67778F',
  				'500': '#5D6C8F',
  				'600': '#4A5672',
  				'700': '#384155',
  				'800': '#252B38',
  				'900': '#13161C',
  				DEFAULT: '#5D6C8F'
  			},
  			gray: {
  				'50': '#F9F9F9',
  				'100': '#F2F2F2',
  				'200': '#E0E0E0',
  				'300': '#D0D0D0',
  				'400': '#949494',
  				'500': '#6E6E6E',
  				'600': '#424242',
  				'700': '#333333',
  				'800': '#1A1A1A',
  				'900': '#000000',
  				DEFAULT: '#4A4E57'
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
  				'72px',
  				{
  					lineHeight: '80px',
  					letterSpacing: '-1.5px'
  				}
  			],
  			'display-lg': [
  				'56px',
  				{
  					lineHeight: '64px',
  					letterSpacing: '-1px'
  				}
  			],
  			'display-md': [
  				'32px',
  				{
  					lineHeight: '40px',
  					letterSpacing: '-0.5px'
  				}
  			],
  			'body-lg': [
  				'20px',
  				{
  					lineHeight: '34px'
  				}
  			],
  			'body-md': [
  				'16px',
  				{
  					lineHeight: '27px'
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
  			lg: '0 10px 15px rgba(0,0,0,0.1)',
  		},
  		backgroundImage: {
  			'gradient-primary': 'linear-gradient(135deg, #243570 0%, #01ABC1 100%)',
  			'gradient-accent': 'linear-gradient(135deg, #01ABC1 0%, #6DB4C0 100%)',
  			'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
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
  			},
  			'fade-in-up': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(10px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'fade-in-up': 'fade-in-up 0.5s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
