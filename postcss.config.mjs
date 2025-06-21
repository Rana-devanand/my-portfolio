const config = {
  plugins: ["@tailwindcss/postcss"],
   theme: {
    extend: {
      keyframes: {
        slide: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'gradient-slide': 'slide 10s ease infinite',
      },
      backgroundSize: {
        '200': '200% 200%',
      },
    },
  },
};

export default config;
