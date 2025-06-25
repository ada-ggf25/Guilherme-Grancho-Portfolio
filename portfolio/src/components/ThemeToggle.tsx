'use client';

import React, { useEffect, useState } from 'react';
import { IconButton } from "@once-ui-system/core";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<string>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('data-theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('data-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  if (!mounted) {
    return (
      <IconButton
        icon="lightMode"
        variant="ghost"
        size="s"
        onClick={() => {}}
      />
    );
  }

  return (
    <IconButton
      icon={theme === 'dark' ? 'lightMode' : 'darkMode'}
      variant="ghost"
      size="s"
      onClick={toggleTheme}
    />
  );
};

export default ThemeToggle;
