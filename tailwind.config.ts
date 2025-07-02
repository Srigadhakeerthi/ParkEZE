import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				violet: {
					50: 'hsl(var(--violet-50))',
					100: 'hsl(var(--violet-100))',
					200: 'hsl(var(--violet-200))',
					300: 'hsl(var(--violet-300))',
					400: 'hsl(var(--violet-400))',
					500: 'hsl(var(--violet-500))',
					600: 'hsl(var(--violet-600))',
					700: 'hsl(var(--violet-700))',
					800: 'hsl(var(--violet-800))',
					900: 'hsl(var(--violet-900))'
				},
				rose: {
					50: 'hsl(var(--rose-50))',
					100: 'hsl(var(--rose-100))',
					200: 'hsl(var(--rose-200))',
					300: 'hsl(var(--rose-300))',
					400: 'hsl(var(--rose-400))',
					500: 'hsl(var(--rose-500))',
					600: 'hsl(var(--rose-600))',
					700: 'hsl(var(--rose-700))',
					800: 'hsl(var(--rose-800))',
					900: 'hsl(var(--rose-900))'
				},
				amber: {
					50: 'hsl(var(--amber-50))',
					100: 'hsl(var(--amber-100))',
					200: 'hsl(var(--amber-200))',
					300: 'hsl(var(--amber-300))',
					400: 'hsl(var(--amber-400))',
					500: 'hsl(var(--amber-500))',
					600: 'hsl(var(--amber-600))',
					700: 'hsl(var(--amber-700))',
					800: 'hsl(var(--amber-800))',
					900: 'hsl(var(--amber-900))'
				},
				grey: {
					50: 'hsl(var(--grey-50))',
					100: 'hsl(var(--grey-100))',
					200: 'hsl(var(--grey-200))',
					300: 'hsl(var(--grey-300))',
					400: 'hsl(var(--grey-400))',
					500: 'hsl(var(--grey-500))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
} satisfies Config;
