/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Include all paths that contain NativeWind classes
    content: ['./App.tsx', './components/**/*.{js,jsx,ts,tsx}', './src/**/*.{ts,tsx}'],
    presets: [require('nativewind/preset')],
    theme: {
        extend: {},
    },
    plugins: [],
};
