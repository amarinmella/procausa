
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
					// Design system 2026: "Atelier Juris Teal" (DESIGN2.md)
					'navy': '#1A363D',            // deep slate: headers/footer/paneles. 12.81:1 sobre blanco (AAA)
					'navy-soft': '#0E5C6B',        // variante mas clara del estructural
					'teal': '#0E5C6B',             // accion/CTA/enlaces. 7.60:1 sobre blanco (AA)
					'teal-dark': '#09404B',        // 11.37:1 sobre blanco — hover
					'teal-light': '#90D0E2',       // 7.51:1 sobre navy — texto/iconos en fondo oscuro
					/*
					  Brass (#D4AF37) da solo 2.10:1 sobre blanco: no sirve como
					  texto ni borde ahi. El brief solo lo usa como borde decorativo
					  con texto oscuro encima, o sobre el navy oscuro (6.09:1, ok).
					  gold-700 es una variante oscurecida para el unico caso donde
					  se necesitaria como borde/texto sobre fondo claro.
					*/
					'gold': '#D4AF37',             // 6.09:1 sobre navy — ok sobre oscuro
					'gold-700': '#9F8329',         // 3.65:1 sobre blanco — variante borde/texto en claro
					'light-gray': '#F8F9FA',
					'dark-gray': '#1E292B',        // 14.92:1 sobre blanco (AAA)
					'cream': '#EFF2F3'
				}
			},
			fontFamily: {
				'serif': ['"EB Garamond"', '"Source Serif 4"', 'Georgia', 'serif'],
				'sans': ['"Work Sans"', 'Inter', 'system-ui', 'sans-serif']
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
