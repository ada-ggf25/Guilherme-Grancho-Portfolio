"use client";

import { useState, useEffect } from "react";
import styles from "./SectionNavigation.module.scss";
import { useNavigation } from "@/contexts/NavigationContext";

interface SectionNavigationProps {
  sections: Array<{
    id: string;
    label: string;
  }>;
}

export const SectionNavigation: React.FC<SectionNavigationProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(0);
  const { setSections, isScrolled, setIsScrolled } = useNavigation();

  // Update context with sections
  useEffect(() => {
    setSections(sections);
  }, [sections, setSections]);

  // Detect scroll position to determine if navigation should be in header
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 200; // Scroll threshold to move navigation to header
      setIsScrolled(scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setIsScrolled]);

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Hide navigation when scrolled (it will be shown in header)
  if (isScrolled) {
    return null;
  }

  return (
    <nav className={styles.navigation}>
      {sections.map((section, index) => (
        <button
          key={section.id}
          className={`${styles.navItem} ${activeSection === index ? styles.active : ''}`}
          onClick={() => scrollToSection(section.id)}
        >
          {section.label}
        </button>
      ))}
    </nav>
  );
};
