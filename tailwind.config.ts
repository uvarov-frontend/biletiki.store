import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    plugins: [],
    screens: {
      // 'sm': '640px',
      // 'md': '768px',
      // 'lg': '1024px',
      'xl': '1240px',
    },
  },
};
export default config;
