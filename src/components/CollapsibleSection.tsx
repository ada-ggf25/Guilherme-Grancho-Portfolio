"use client";

import React, { useState } from "react";
import { Column, Flex, Icon } from "@once-ui-system/core";
import styles from "./CollapsibleSection.module.scss";

interface CollapsibleSectionProps {
  header: React.ReactNode;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  className?: string;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  header,
  children,
  defaultExpanded = false,
  className = "",
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleHeaderClick = (e: React.MouseEvent) => {
    // If clicking on a link, don't toggle
    const target = e.target as HTMLElement;
    if (target.closest('a')) {
      return;
    }
    toggleExpanded();
  };

  return (
    <Column className={`${styles.collapsibleSection} ${className}`} style={{ width: "100%" }}>
      <button
        className={styles.headerButton}
        onClick={handleHeaderClick}
        aria-expanded={isExpanded}
        type="button"
      >
        <Flex
          horizontal="between"
          vertical="center"
          style={{ width: "100%", gap: "12px" }}
        >
          <Flex style={{ flex: 1 }}>
            {header}
          </Flex>
          <Icon
            name={isExpanded ? "chevronUp" : "chevronDown"}
            size="20"
            onBackground="neutral-weak"
            className={styles.chevron}
            style={{
              transition: "transform 0.3s ease",
            }}
          />
        </Flex>
      </button>
      <div
        className={`${styles.content} ${isExpanded ? styles.expanded : styles.collapsed}`}
        aria-hidden={!isExpanded}
      >
        {children}
      </div>
    </Column>
  );
};

