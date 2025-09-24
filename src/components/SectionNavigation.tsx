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

  console.log('SectionNavigation rendering with sections:', sections);
  
  return (
    <div 
      className={styles.navigation}
      style={{
        position: 'fixed',
        left: '50px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1000,
        background: 'rgba(255, 0, 0, 0.3)', // Temporary red background for debugging
        padding: '20px',
        borderRadius: '10px'
      }}
    >
      {sections.map((section, index) => (
        <button
          key={section.id}
          className={`${styles.navItem} ${activeSection === index ? styles.active : ''}`}
          onClick={() => scrollToSection(section.id)}
          title={section.label}
          style={{
            border: '2px solid rgba(255, 255, 255, 0.8)',
            minWidth: '20px',
            minHeight: '60px',
            display: 'block',
            background: activeSection === index ? 'white' : 'rgba(255, 255, 255, 0.3)',
            margin: '10px 0'
          }}
        />
      ))}
    </div>
  );
};
