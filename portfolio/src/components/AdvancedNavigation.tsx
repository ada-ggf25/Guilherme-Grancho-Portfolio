'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdvancedNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
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
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/10 dark:bg-black/10 backdrop-blur-2xl border-b border-white/20 dark:border-white/10 shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo with Animated Gradient */}
            <Link 
              href="/" 
              className="relative group"
            >
              <div className="relative z-10 text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Guilherme Grancho
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
            </Link>
            
            {/* Desktop Navigation with Floating Pills */}
            <div className="hidden md:flex space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-6 py-3 rounded-full transition-all duration-300 group ${
                    activeSection === item.href.slice(1)
                      ? 'bg-white/20 text-blue-600 shadow-lg'
                      : 'text-foreground hover:bg-white/10 hover:text-blue-600'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  {activeSection === item.href.slice(1) && (
                    <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse"></div>
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button with Morphing Animation */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative w-8 h-8 flex items-center justify-center group"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 origin-center ${
                  isMenuOpen ? 'rotate-45 translate-y-2.5' : 'rotate-0'
                }`}></span>
                <span className={`absolute top-2.5 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute top-5 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 origin-center ${
                  isMenuOpen ? '-rotate-45 -translate-y-2.5' : 'rotate-0'
                }`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation with Slide Animation */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="pt-6 pb-4 border-t border-white/20 mt-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-6 py-4 rounded-2xl transition-all duration-500 group ${
                      activeSection === item.href.slice(1)
                        ? 'bg-white/20 text-blue-600'
                        : 'text-foreground hover:bg-white/10 hover:text-blue-600'
                    }`}
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="relative z-10 text-lg font-medium">{item.label}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Animated Border */}
        <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-opacity duration-500 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}></div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}
