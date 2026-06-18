/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0B0F1A',
        'card-dark': '#111827',
        'border-dark': '#1E293B',
        'accent-purple': '#7C3AED',
        'accent-purple-hover': '#6D28D9',
        'accent-cyan': '#38BDF8',
        'accent-cyan-light': '#22D3EE',
        'text-primary': '#F8FAFC',
        'text-secondary': '#E2E8F0',
        'text-muted': '#94A3B8',
        'text-dim': '#64748B',
        'text-faint': '#475569',
        'star-yellow': '#FBBF24',
        'success-green': '#34D399',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
