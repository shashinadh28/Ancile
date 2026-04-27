/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070d1c',
          900: '#0a1430',
          800: '#0f1d44',
          700: '#152759',
          600: '#1c326f',
        },
        brand: {
          50: '#eef4ff',
          100: '#dae6ff',
          200: '#b8cdff',
          300: '#8aaaff',
          400: '#5a82eb',
          500: '#2f5fb3',
          600: '#264c91',
          700: '#1d3b73',
          800: '#162d59',
          900: '#0f2143',
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
        glow: '0 30px 80px -20px rgba(47, 95, 179, 0.55)',
        'glow-lg': '0 40px 100px -25px rgba(47, 95, 179, 0.65)',
        card: '0 20px 50px -20px rgba(7, 13, 28, 0.45)',
        'card-lg': '0 30px 60px -15px rgba(7, 13, 28, 0.55)',
        soft: '0 10px 30px -15px rgba(7, 13, 28, 0.6)',
        'inner-glow': 'inset 0 1px 0 rgba(255,255,255,0.08), inset 0 0 60px rgba(47,95,179,0.05)',
      },
      backgroundImage: {
        'radial-fade':
          'radial-gradient(circle at 20% 20%, rgba(47,95,179,0.35), transparent 55%), radial-gradient(circle at 80% 10%, rgba(90,130,235,0.25), transparent 50%), radial-gradient(circle at 50% 100%, rgba(15,33,67,0.7), transparent 60%)',
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'grid-accent':
          'linear-gradient(to right, rgba(90,130,235,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(90,130,235,0.06) 1px, transparent 1px)',
        'mesh-gradient':
          'radial-gradient(ellipse at 20% 0%, rgba(90,130,235,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(47,95,179,0.12) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(138,170,255,0.06) 0%, transparent 70%)',
        'aurora':
          'linear-gradient(135deg, rgba(47,95,179,0.08) 0%, rgba(90,130,235,0.04) 25%, transparent 50%, rgba(138,170,255,0.06) 75%, rgba(47,95,179,0.1) 100%)',
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
