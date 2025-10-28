import { useState, useEffect } from 'react';

// Función para inicializar el modo oscuro basado en localStorage o la preferencia del sistema
const getInitialMode = () => {
  if (typeof window !== 'undefined') {
    const savedTheme = window.localStorage.getItem('theme');
    
    // Prioridad: 1. Guardado en localStorage, 2. Preferencia del sistema (si no hay guardado)
    const initialMode = savedTheme === 'dark' || 
                        (savedTheme === null && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    return initialMode;
  }
  return false; // Por defecto a modo claro en el servidor (SSR)
};


const useDarkMode = () => {
  // Inicializa el estado usando la función de obtención de modo
  const [isDarkMode, setIsDarkMode] = useState(getInitialMode);

  // Efecto para aplicar/quitar la clase 'dark' y guardar la preferencia
  useEffect(() => {
    const root = window.document.documentElement;

    if (isDarkMode) {
      root.classList.add('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      window.localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // La función toggle simplemente cambia el estado
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // El hook devuelve el estado actual y la función para cambiarlo
  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;