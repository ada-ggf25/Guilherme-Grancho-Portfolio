'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function CleanNavigation() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#work', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center space-x-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-full border border-slate-200/50 dark:border-slate-700/50 p-2 shadow-lg">
        {navItems.map((item) => (
          <button
            key={item.href}
            onClick={() => {
              const element = document.getElementById(item.href.slice(1));
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              activeSection === item.href.slice(1)
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {item.label}
          </button>
        ))}
        
        {/* Theme Toggle integrated */}
        <div className="ml-2 pl-2 border-l border-slate-200 dark:border-slate-700">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
