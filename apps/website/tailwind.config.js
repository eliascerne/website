// apps/app1/tailwind.config.js
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'pages/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        background: '#111725',
        card: '#1c2534',
        cardBorder: '#333b49',
      },
      spacing: {
        header: '60px',
      },
      maxWidth: {
        maxWidth: '80rem',
      },
    },
  },
  plugins: [],
};
