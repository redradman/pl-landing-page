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
  				'50': '#E8F3F9',
  				'100': '#D1E7F3',
  				'200': '#A3CFE7',
  				'300': '#75B7DB',
  				'400': '#5199C0',
  				'500': '#4180A0',
  				'600': '#336680',
  				'700': '#254D60',
  				'800': '#1A3440',
  				'900': '#0D1A20',
  				DEFAULT: '#5199C0',
  				dark: '#353A49'
  			},
  			accent: {
  				'50': '#EEF7F8',
  				'100': '#DDEFF1',
  				'200': '#BBDFE3',
  				'300': '#99CFD5',
  				'400': '#81B0B9',
  				'500': '#6A959D',
  				'600': '#547A81',
  				'700': '#3F5C61',
  				'800': '#2A3D41',
  				'900': '#151F20',
  				DEFAULT: '#81B0B9',
  				light: '#DEDFDE'
  			},
  			secondary: {
  				'50': '#FBE8E9',
  				'100': '#F7D1D3',
  				'200': '#EFA3A7',
  				'300': '#E7757B',
  				'400': '#DF474F',
  				'500': '#CC3E48',
  				'600': '#A3323A',
  				'700': '#7A252B',
  				'800': '#52191D',
  				'900': '#290C0E',
  				DEFAULT: '#CC3E48'
  			},
  			tertiary: {
  				'50': '#F3F1F0',
  				'100': '#E7E3E1',
  				'200': '#CFC7C3',
  				'300': '#B7ABA5',
  				'400': '#9F8F87',
  				'500': '#918274',
  				'600': '#74685D',
  				'700': '#574E46',
  				'800': '#3A342E',
  				'900': '#1D1A17',
  				DEFAULT: '#918274'
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
  			'gradient-primary': 'linear-gradient(135deg, #5199C0 0%, #81B0B9 100%)',
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
