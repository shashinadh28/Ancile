/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── Strict semantic tokens ──
        'hero-dark': '#0B1120',
        'c-primary': '#0F172A',
        'c-secondary': '#475569',
        // Warm light palette inspired by Catalog reference
        surface: {
          50: '#FFFFFF',
          100: '#FAFAF8',
          200: '#F5F3F0',
          300: '#EDEAE5',
          400: '#E0DDD7',
        },
        ink: {
          950: '#0F172A',
          900: '#1E293B',
          800: '#334155',
          700: '#475569',
          600: '#64748B',
          500: '#94A3B8',
          400: '#CBD5E1',
          300: '#E2E8F0',
          200: '#E2E8F0',
          150: '#F1F5F9',
          100: '#F8FAFC',
        },
        accent: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },
        brand: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },
        navy: {
          950: '#0B1120',
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      boxShadow: {
        'soft': '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)',
        'card': '0 4px 20px -4px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
        'card-hover': '0 12px 40px -8px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.05)',
        'card-lg': '0 20px 50px -12px rgba(0,0,0,0.08), 0 4px 20px rgba(0,0,0,0.04)',
        'glow': '0 8px 30px -6px rgba(249,115,22,0.25)',
        'glow-lg': '0 20px 50px -10px rgba(249,115,22,0.3)',
        'inner-glow': 'inset 0 1px 0 rgba(255,255,255,0.8), inset 0 0 60px rgba(249,115,22,0.03)',
        'nav': '0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.04)',
      },
      backgroundImage: {
        'warm-radial':
          'radial-gradient(ellipse at 20% 0%, rgba(249,115,22,0.06) 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(251,146,60,0.04) 0%, transparent 50%)',
        'grid-faint':
          'linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)',
        'grid-accent':
          'linear-gradient(to right, rgba(249,115,22,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(249,115,22,0.04) 1px, transparent 1px)',
        'hero-gradient':
          'linear-gradient(135deg, #FFFFFF 0%, #FFF7ED 30%, #FFEDD5 60%, #FFFFFF 100%)',
        'cta-gradient':
          'linear-gradient(135deg, #F97316 0%, #EA580C 50%, #C2410C 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-22px) translateX(8px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 9s ease-in-out infinite',
        blob: 'blob 14s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'orbit': 'orbit 20s linear infinite',
      },
    },
  },
  plugins: [],
};
