import { useState, useLayoutEffect } from 'react';

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Set dark theme if it's saved in local storage or it is system preference
  useLayoutEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDarkMode(true);
    }
  }, []);

  const handleToggleDarkMode = () => {
    if (darkMode) localStorage.theme = 'light';
    else localStorage.theme = 'dark';
    setDarkMode(!darkMode);
  };

  return { darkMode, toggleDarkMode: handleToggleDarkMode };
};

export default useDarkMode;
