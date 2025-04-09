import constate from 'constate';
import { useEffect, useState } from 'react';

export const THEMES = {
  DARK: 'dark',
  LIGHT: 'light',
};
Object.freeze(THEMES);

const savedTheme = localStorage.getItem('todo-app-theme');
const useTheme = () => {
  const [theme, setTheme] = useState(savedTheme || THEMES.LIGHT);

  const toggleTheme = () => {
    setTheme(theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK);
  };

  useEffect(() => {
    if (theme === THEMES.DARK) {
      document.documentElement.classList.add(THEMES.DARK);
    } else {
      document.documentElement.classList.remove(THEMES.DARK);
    }
    localStorage.setItem('todo-app-theme', theme);
  }, [theme]);

  return { theme, setTheme, toggleTheme };
};

const [ThemeProvider, useThemeContext] = constate(useTheme);
export { ThemeProvider, useThemeContext };
