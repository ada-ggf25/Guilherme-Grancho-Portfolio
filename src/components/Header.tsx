"use client";

import { useState, useEffect } from "react";
import { Fade, Flex } from "@once-ui-system/core";

import { display, person } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import { SystemClock } from "./SystemClock";
import { useNavigation } from "@/contexts/NavigationContext";
import styles from "./Header.module.scss";
import navStyles from "./SectionNavigation.module.scss";


export const Header = () => {
  const { sections, isScrolled } = useNavigation();
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    if (!isScrolled || sections.length === 0) return;

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
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, isScrolled]);

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
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Flex
        fitHeight
        position="unset"
        className={`${styles.position} ${isScrolled && sections.length > 0 ? styles.withNavigation : ''}`}
        as="header"
        zIndex={9}
        fillWidth
        padding="16"
        horizontal="center"
        data-border="rounded"
      >
        <Flex paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          <Flex>{person.name}</Flex>
        </Flex>
        {isScrolled && sections.length > 0 && (
          <Flex fillWidth horizontal="center" vertical="center" style={{ position: "absolute", left: 0, right: 0 }}>
            <nav className={navStyles.navigationInHeader}>
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  className={`${navStyles.navItem} ${activeSection === index ? navStyles.active : ''}`}
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </Flex>
        )}
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            <SystemClock />
            {display.themeSwitcher && <ThemeToggle />}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
