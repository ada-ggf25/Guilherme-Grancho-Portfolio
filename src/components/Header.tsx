"use client";

import { useState, useEffect } from "react";
import { Fade, Flex } from "@once-ui-system/core";

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

  useEffect(() => {
    if (!showInHeader || sections.length === 0) return;
    return trackActiveSection(sections, setActiveSection);
  }, [sections, showInHeader]);

  const shouldShow = showInHeader && sections.length > 0;
  const opacity = transitionProgress;
  const scale = 0.85 + (transitionProgress * 0.15); // Scale from 0.85 to 1.0
  const translateY = (1 - transitionProgress) * -10; // Slide up from -10px to 0

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Flex
        fitHeight
        position="unset"
        className={`${styles.position} ${shouldShow ? styles.withNavigation : ''}`}
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
        {shouldShow && (
          <Flex 
            fillWidth 
            horizontal="center" 
            vertical="center" 
            style={{ 
              position: "absolute", 
              left: 0, 
              right: 0,
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
