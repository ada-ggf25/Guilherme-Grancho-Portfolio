"use client";

import React from "react";
import styles from "./PresentIndicator.module.scss";

/**
 * A pulsing green dot indicator to show that an item is currently active (Present)
 */
export const PresentIndicator: React.FC = () => {
  return (
    <span className={styles.indicator} aria-label="Currently active">
      <span className={styles.dot} />
    </span>
  );
};

