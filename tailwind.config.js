/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './App.{js,jsx,ts,tsx}',
        './src/**/*.{js,jsx,ts,tsx}',
        './blueprints/**/*.{js,jsx,ts,tsx}',
    ],
    presets: [require('nativewind/preset')],
    darkMode: 'media',
    theme: {
        extend: {
            colors: {
                brand: '#0a70e6',
                border: '#e5e7eb',
                input: '#f9fafb',
                ring: '#3b82f6',
                background: '#ffffff',
                foreground: '#111827',

                primary: {
                    DEFAULT: '#3b82f6',
                    foreground: '#ffffff',
                },
                secondary: {
                    DEFAULT: '#64748b',
                    foreground: '#ffffff',
                },
                destructive: {
                    DEFAULT: '#ef4444',
                    foreground: '#ffffff',
                },
                muted: {
                    DEFAULT: '#f3f4f6',
                    foreground: '#6b7280',
                },
                accent: {
                    DEFAULT: '#f9fafb',
                    foreground: '#111827',
                },
                popover: {
                    DEFAULT: '#ffffff',
                    foreground: '#111827',
                },
                card: {
                    DEFAULT: '#ffffff',
                    foreground: '#111827',
                },
                sidebar: {
                    DEFAULT: '#f9fafb',
                    foreground: '#111827',
                    primary: '#3b82f6',
                    'primary-foreground': '#ffffff',
                    accent: '#e5e7eb',
                    'accent-foreground': '#111827',
                    border: '#e5e7eb',
                    ring: '#3b82f6',
                },
                button: {
                    DEFAULT: '#3b82f6',
                    foreground: '#ffffff',
                    discord: '#5C6AF1',
                },
            },
            fontWeight: {
                extrablack: '950',
            },
            fontSize: {
                '2xs': '10px',
            },
            boxShadow: {
                'hard-1': '-2px 2px 8px 0px rgba(38, 38, 38, 0.20)',
                'hard-2': '0px 3px 10px 0px rgba(38, 38, 38, 0.20)',
                'hard-3': '2px 2px 8px 0px rgba(38, 38, 38, 0.20)',
                'hard-4': '0px -3px 10px 0px rgba(38, 38, 38, 0.20)',
                'hard-5': '0px 2px 10px 0px rgba(38, 38, 38, 0.10)',
                'soft-1': '0px 0px 10px rgba(38, 38, 38, 0.1)',
                'soft-2': '0px 0px 20px rgba(38, 38, 38, 0.2)',
                'soft-3': '0px 0px 30px rgba(38, 38, 38, 0.1)',
                'soft-4': '0px 0px 40px rgba(38, 38, 38, 0.1)',
            },
        },
    },
    plugins: [],
};
