/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      // Aerrai Deep Space Theme
      colors: {
        space: {
          'deep': '#0a0a0f',
          'medium': '#1a1a2e', 
          'light': '#16213e',
          'accent': '#2d4a8a',
        },
        glass: {
          'light': 'rgba(255, 255, 255, 0.1)',
          'medium': 'rgba(255, 255, 255, 0.15)',
          'strong': 'rgba(255, 255, 255, 0.2)',
          'border': 'rgba(255, 255, 255, 0.2)',
        },
        aerrai: {
          'primary': '#4f46e5',
          'secondary': '#06b6d4',
          'accent': '#f59e0b',
          'success': '#10b981',
        },
        // Light text variations for dark backgrounds
        text: {
          'primary': '#ffffff',        // Pure white for headings
          'secondary': '#f1f5f9',      // Off-white for body text
          'muted': '#cbd5e1',          // Light gray for secondary info
          'subtle': '#94a3b8',         // Medium gray for subtle text
          'disabled': '#64748b',       // Darker gray for disabled elements
        },
        // Enhanced cosmic colors with better contrast
        'cosmic': {
          100: '#f0f4ff',  // Almost white
          200: '#e0e7ff',  // Very light blue
          300: '#c7d2fe',  // Light blue
          400: '#a5b4fc',  // Medium-light blue
          500: '#818cf8',  // Medium blue
          600: '#6366f1',  // Tailwind indigo-500
          700: '#4f46e5',  // Darker blue
          800: '#3730a3',  // Much darker
          900: '#1e1b4b',  // Very dark blue
        },
        // Enhanced nebula colors
        'nebula': {
          100: '#fdf4ff',  // Almost white with purple tint
          200: '#fae8ff',  // Very light purple
          300: '#f5d0fe',  // Light purple
          400: '#e879f9',  // Medium-light purple
          500: '#d946ef',  // Medium purple
          600: '#c026d3',  // Darker purple
          700: '#a21caf',  // Much darker
          800: '#86198f',  // Very dark
          900: '#581c87',  // Deepest purple
        },
        // Accent colors for highlights and CTAs
        highlight: {
          'cyan': '#06b6d4',
          'purple': '#8b5cf6',
          'pink': '#ec4899',
          'orange': '#f59e0b',
          'green': '#10b981',
        }
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      backdropBlur: {
        'xs': '2px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'constellation': 'constellation 20s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        constellation: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        glow: {
          '0%': { textShadow: '0 0 5px rgba(79, 70, 229, 0.5)' },
          '100%': { textShadow: '0 0 20px rgba(79, 70, 229, 0.8), 0 0 30px rgba(6, 182, 212, 0.5)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-hover': '0 12px 48px 0 rgba(31, 38, 135, 0.5)',
        'constellation': '0 0 20px rgba(79, 70, 229, 0.3)',
        'glow-sm': '0 0 10px rgba(79, 70, 229, 0.3)',
        'glow-md': '0 0 20px rgba(79, 70, 229, 0.4)',
        'glow-lg': '0 0 30px rgba(79, 70, 229, 0.5)',
        'text-glow': '0 0 10px rgba(255, 255, 255, 0.3)',
      },
      // Text contrast utilities
      textShadow: {
        'sm': '1px 1px 2px rgba(0, 0, 0, 0.5)',
        'md': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'lg': '3px 3px 6px rgba(0, 0, 0, 0.6)',
        'glow': '0 0 10px rgba(255, 255, 255, 0.5)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // Custom plugin for text shadows
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-md': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.6)',
        },
        '.text-shadow-glow': {
          textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}