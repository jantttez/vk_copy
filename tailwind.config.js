/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        'post-gray': '#888',
        'comment-text': '#333',
      },
      backgroundColor: {
        'hover-bg-color': 'rgba(50, 50, 50, 0.7)',
        'header-btn': 'rgba(60, 60, 60, 0.7)',
        'header-btn-hover': 'rgba(70, 70, 70, 0.9)',
        'friend-hover': '#252525',
        'post-gray': '#888',
      },
      borderColor: {
        'comment-border': 'rgba(60, 60, 60, 0.7)',
      },
    },
  },
  plugins: [],
};
