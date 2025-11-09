"use client";

import { useState, useEffect, useRef } from "react";
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
  const { setSections, setShowInHeader, setTransitionProgress } = useNavigation();
  const navRef = useRef<HTMLElement>(null);

  // Update context with sections
  useEffect(() => {
    setSections(sections);
  }, [sections, setSections]);

  // Use Intersection Observer to detect when navigation is passed
  useEffect(() => {
    if (!navRef.current) return;

    let scrollHandler: (() => void) | null = null;
    let navOriginalTop: number | null = null;

    // Store original position when component mounts
    const updateOriginalPosition = () => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        navOriginalTop = rect.top + window.scrollY;
      }
    };
    updateOriginalPosition();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When navigation leaves the viewport from the top (was scrolled past)
          if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
            // Update original position if not set
            if (navOriginalTop === null) {
              updateOriginalPosition();
            }
            
            // Start showing in header gradually
            setShowInHeader(true);
            
            // Remove previous scroll handler if exists
            if (scrollHandler) {
              window.removeEventListener('scroll', scrollHandler);
            }
            
            // Calculate transition progress based on scroll position
            scrollHandler = () => {
              if (!navRef.current || navOriginalTop === null) return;
              
              const currentScroll = window.scrollY;
              const headerHeight = 80;
              const navHeight = navRef.current.offsetHeight || 0;
              
              // Calculate when nav bottom passes header bottom
              const navBottom = navOriginalTop + navHeight;
              const headerBottom = headerHeight;
              
              // Progress: 0 when nav bottom is at header bottom, 1 when nav is fully past
              const distancePastHeader = currentScroll - (navBottom - headerHeight);
              const transitionDistance = 120; // Distance over which transition happens (in pixels)
              const progress = Math.min(Math.max(distancePastHeader / transitionDistance, 0), 1);
              
              setTransitionProgress(progress);
            };

            window.addEventListener('scroll', scrollHandler, { passive: true });
            scrollHandler(); // Initial calculation
          } else if (entry.isIntersecting) {
            // Navigation is visible again, hide from header
            if (scrollHandler) {
              window.removeEventListener('scroll', scrollHandler);
              scrollHandler = null;
            }
            setShowInHeader(false);
            setTransitionProgress(0);
            navOriginalTop = null; // Reset for next time
          }
        });
      },
      {
        threshold: [0, 0.1, 0.5, 1],
        rootMargin: '-80px 0px 0px 0px' // Account for header height
      }
    );

    observer.observe(navRef.current);

    // Update original position on resize
    const handleResize = () => {
      updateOriginalPosition();
    };
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      if (scrollHandler) {
        window.removeEventListener('scroll', scrollHandler);
      }
    };
  }, [setShowInHeader, setTransitionProgress]);

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

    window.addEventListener('scroll', handleScroll, { passive: true });
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

  return (
    <nav ref={navRef} className={styles.navigation}>
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
