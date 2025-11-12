"use client";

import { useState, useEffect } from "react";
import { Fade, Flex, Icon } from "@once-ui-system/core";

import { display, person } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import { SystemClock } from "./SystemClock";
import { useNavigation } from "@/contexts/NavigationContext";
import { scrollToSection, trackActiveSection } from "@/utils/scrollUtils";
import styles from "./Header.module.scss";
import navStyles from "./SectionNavigation.module.scss";


export const Header = () => {
  const { sections, showInHeader, transitionProgress } = useNavigation();
  const [activeSection, setActiveSection] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (!showInHeader || sections.length === 0) return;
    return trackActiveSection(sections, setActiveSection);
  }, [sections, showInHeader]);

  // Track scroll position to blur content under header
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const shouldShow = showInHeader && sections.length > 0;
  const opacity = transitionProgress;
  const scale = 0.85 + (transitionProgress * 0.15); // Scale from 0.85 to 1.0
  const translateY = (1 - transitionProgress) * -10; // Slide up from -10px to 0

  return (
    <>
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Flex
        fitHeight
        position="unset"
        className={`${styles.position} ${shouldShow ? styles.withNavigation : ''} ${styles.bar} ${scrollY > 0 ? styles.blurred : ''}`}
        as="header"
        zIndex={9}
        fillWidth
        padding="16"
        horizontal="center"
        data-border="rounded"
      >
        <Flex paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          <Flex 
            className="display-flex position-relative"
            gap="8"
            vertical="center"
            style={{ alignItems: "center" }}
          >
            <a
              href="https://github.com/ada-ggf25/Guilherme-Grancho-Portfolio/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.7";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              <Icon
                name="github"
                size="20"
                onBackground="neutral-strong"
                style={{
                  pointerEvents: "none",
                }}
              />
            </a>
            <span>/</span>
            <span>{person.name}</span>
          </Flex>
        </Flex>
        {shouldShow && (
          <Flex 
            horizontal="center" 
            vertical="center" 
            style={{ 
              opacity: opacity,
              transform: `scale(${scale}) translateY(${translateY}px)`,
              transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              pointerEvents: opacity > 0.3 ? 'auto' : 'none',
              willChange: 'opacity, transform'
            }}
          >
            <nav className={navStyles.navigationInHeader}>
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  className={`${navStyles.navItem} ${activeSection === index ? navStyles.active : ''}`}
                  onClick={() => scrollToSection(section.id, 100)}
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
