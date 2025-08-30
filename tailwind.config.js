/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Include all paths that contain NativeWind classes
    content: [
      './App.tsx',
      './src/**/*.{ts,tsx}',
       './src/blueprints/**/*.{ts,tsx}',
       './src/components/**/*.{ts,tsx}',
    ],
    presets: [require('nativewind/preset')],
    theme: {
      extend: {
        colors: {
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          card: 'hsl(var(--card))',
          'card-foreground': 'hsl(var(--card-foreground))',
          primary: 'hsl(var(--primary))',
          'primary-foreground': 'hsl(var(--primary-foreground))',
          secondary: 'hsl(var(--secondary))',
          'secondary-foreground': 'hsl(var(--secondary-foreground))',
          muted: 'hsl(var(--muted))',
          'muted-foreground': 'hsl(var(--muted-foreground))',
          border: 'hsl(var(--border))',
          input: 'hsl(var(--input))',
        },
      },
    },
    plugins: [],
  };
  