import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        my: {
          'dark-gray': {
            DEFAULT: 'var(--my-dark-gray)',
            80: 'rgba(33, 33, 33, 0.8)',
            60: 'rgba(33, 33, 33, 0.6)',
            24: 'rgba(33, 33, 33, 0.24)',
            16: 'rgba(33, 33, 33, 0.16)',
            8: 'rgba(33, 33, 33, 0.08)',
          },
          blue: 'var(--my-blue)',
          'dark-blue': {
            DEFAULT: 'var(--my-dark-blue)',
            60: 'rgba(65, 110, 223, 0.6)',
          },
          yellow: 'var(--my-yellow)',
        },
      },
      fontFamily(utils) {
        return {
          roboto: ['var(--font-mono)', 'monospace'],
        }
      },

      fontSize: {
        'heading-lg': '48px',
        'heading-md': '28px',
        'heading-sm': '18px',
      },
    },
  },
  plugins: [],
} satisfies Config
