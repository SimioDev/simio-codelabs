"use client";
import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check localStorage or system preference
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialTheme = stored || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);

    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="group relative inline-flex items-center justify-center w-14 h-7 rounded-full bg-muted transition-colors hover:bg-muted/80"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute left-1 w-5 h-5 rounded-full bg-foreground shadow-lg transition-transform duration-300 ${
          theme === 'dark' ? 'translate-x-7' : 'translate-x-0'
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center text-[10px]">
          {theme === 'light' ? '☀️' : '🌙'}
        </div>
      </div>
    </button>
  );
};
