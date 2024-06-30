import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
        'sf-pro-text': ["var(--font-sf-pro-text)"],
      },
      maxHeight: {
        '200': '12.5rem',
      },
      colors: {
        'orange-star': '#FDB022',
        'orange-text': '#FF4405',
        'gray-menu': '#667085',
      },
      borderRadius: {
        '16': '1rem',
      },
      height: {
        '50': '12.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
