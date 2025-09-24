"use client";

import { useState, useEffect } from "react";
import styles from "./SectionNavigation.module.scss";

interface SectionNavigationProps {
  sections: Array<{
    id: string;
    label: string;
  }>;
}

export const SectionNavigation: React.FC<SectionNavigationProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
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
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className={styles.navigation}>
      {sections.map((section, index) => (
        <button
          key={section.id}
          className={`${styles.navItem} ${activeSection === index ? styles.active : ''}`}
          onClick={() => scrollToSection(section.id)}
          title={section.label}
        />
      ))}
    </div>
  );
};
