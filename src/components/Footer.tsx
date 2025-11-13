"use client";

import { Flex, Text, Icon } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      fillWidth
      padding="8"
      horizontal="center"
    >
      <Flex
        className={styles.footerContent}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="space-between"
        vertical="center"
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">{person.name}</Text>
        </Text>
        <Flex 
          gap="16"
        >
          {social.map(
            (item) =>
              item.link && (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialButton}
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "12px",
                    borderRadius: "8px",
                    border: "1px solid transparent",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                    minWidth: "44px",
                    height: "44px",
                    position: "relative",
                    zIndex: 1,
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(item.link, '_blank', 'noopener,noreferrer');
                  }}
                >
                  <Icon
                    name={item.icon}
                    size="20"
                    onBackground="neutral-strong"
                    style={{
                      pointerEvents: "none",
                    }}
                  />
                </a>
              ),
          )}
        </Flex>
      </Flex>
      <Flex height="80" show="s"></Flex>
    </Flex>
  );
};
