
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
				law: {
					// ProCausa
					'navy': '#0A2342',
					'navy-soft': '#143257',
					// Pacheco Espinoza — extraido de logo.jpg. 6.32:1 sobre blanco (AA)
					'teal': '#006885',
					'teal-dark': '#00546B',      // 8.47:1 sobre blanco — hover
					'teal-light': '#5CBBD4',     // 7.14:1 sobre navy — para fondos oscuros
					// Dorado: decorativo. Sobre blanco da 2.37:1, NO usar como texto.
					'gold': '#D5A021',           // 6.66:1 sobre navy — ok sobre oscuro
					'gold-700': '#8A6410',       // 5.37:1 sobre blanco — unica variante de texto
					'light-gray': '#F5F5F5',
					'dark-gray': '#333333',
					'cream': '#F8F4E3'
				}
			},
			fontFamily: {
				'serif': ['"Source Serif 4"', 'Playfair Display', 'Georgia', 'serif'],
				'sans': ['Inter', 'Montserrat', 'system-ui', 'sans-serif']
			},
			fontSize: {
				'eyebrow': ['0.8125rem', { lineHeight: '1.2', letterSpacing: '0.08em', fontWeight: '600' }],
				'body': ['1.0625rem', { lineHeight: '1.7' }],
				'lead': ['clamp(1.0625rem, 1.4vw, 1.1875rem)', { lineHeight: '1.7' }],
				'h3': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
				'h2': ['clamp(1.875rem, 3.5vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
				'display': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }]
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				slideInRight: {
					'0%': { transform: 'translateX(20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fadeIn 0.5s ease-out forwards',
				'slide-up': 'slideUp 0.6s ease-out forwards',
				'slide-in-right': 'slideInRight 0.6s ease-out forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
