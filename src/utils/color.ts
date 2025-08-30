import { useColorScheme } from 'nativewind';

export const useColors = () => {
  const { colorScheme } = useColorScheme();

  const themes = {
    light: {
      mutedForeground: '#b5b5b5',
      cardBg: '#f7f7f8',
      border: 'rgba(0,0,0,0.4)',
      loader: '#000',
      altCardBg: '#fff',
      editorButton: '#000',
      primary: '#0163dc',
      icon: '#000',
      trashIcon: '#EF4444',
      blue: '#0063db',
      green: '#22c55e',
      grey: '#b5b5b5',
    },
    dark: {
      mutedForeground: '#5c5c5c',
      cardBg: '#18181b',
      altCardBg: '#18181b',
      border: 'rgba(255, 255, 255, 0.4)',
      loader: '#fff',
      editorButton: '#fff',
      primary: '#0163dc',
      icon: '#fff',
      trashIcon: '#F87171',
      blue: '#0063db',
      green: '#22c55e',
      grey: '#6b7280',
    },
  } as const;
  const scheme = colorScheme ?? 'light';
  return themes[scheme];
};
