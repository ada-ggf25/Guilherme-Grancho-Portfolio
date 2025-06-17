'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-primary">
            Guilherme Grancho
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-foreground hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-foreground hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link 
                href="#about" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link 
                href="#skills" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={closeMenu}
              >
                Skills
              </Link>
              <Link 
                href="#projects" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={closeMenu}
              >
                Projects
              </Link>
              <Link 
                href="#contact" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
