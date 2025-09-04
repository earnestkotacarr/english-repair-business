import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'erb-navy': '#0F172A',
        'erb-vermilion': '#1E40AF',
        'erb-gray': {
          600: '#475569',
          500: '#64748B',
          400: '#94A3B8',
          300: '#CBD5E1',
          200: '#E2E8F0',
          100: '#F1F5F9',
          50: '#F8FAFC'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'Noto Sans JP', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', '1.125rem'],
        'sm': ['0.875rem', '1.375rem'],
        'base': ['1rem', '1.625rem'],
        'lg': ['1.125rem', '1.75rem'],
        'xl': ['1.25rem', '1.875rem'],
        '2xl': ['1.5rem', '2.125rem'],
        '3xl': ['1.875rem', '2.375rem'],
        '4xl': ['2.25rem', '2.625rem'],
      }
    },
  },
  plugins: [],
}
export default config