"use client";

import React, { useRef } from "react";
import { Heading, Tag, Text, SmartLink } from "@once-ui-system/core";
import { PresentIndicator } from "./PresentIndicator";
import styles from "./CurrentWorkCarousel.module.scss";

export type CurrentWorkItem = {
  id: string;
  title: string;
  subtitle?: string;
  timeframe?: string;
  category: string;
  href?: string;
};

type CurrentWorkCarouselProps = {
  items: CurrentWorkItem[];
};

export const CurrentWorkCarousel: React.FC<CurrentWorkCarouselProps> = ({ items }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  if (!items.length) {
    return null;
  }

  const handleScroll = (direction: "backward" | "forward") => {
    const node = scrollRef.current;
    if (!node) {
      return;
    }

    const scrollAmount = node.clientWidth * 0.85;
    node.scrollBy({
      left: direction === "forward" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.wrapper} aria-label="Currently active work">
      <header className={styles.header}>
        <div>
          <Text variant="label-default-s" onBackground="neutral-weak">
            Active focus
          </Text>
          <Heading variant="display-strong-xs" as="h3">
            What I&apos;m working on
          </Heading>
        </div>
        <div className={styles.controls}>
          <button
            type="button"
            onClick={() => handleScroll("backward")}
            className={styles.controlButton}
            aria-label="Scroll highlights backward"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={() => handleScroll("forward")}
            className={styles.controlButton}
            aria-label="Scroll highlights forward"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </header>
      <div className={styles.carousel} ref={scrollRef}>
        {items.map((item) => (
          <article key={item.id} className={styles.card}>
            <div className={styles.cardTop}>
              <Tag size="s" background="brand-alpha-weak" border="neutral-alpha-medium" onBackground="brand-weak">
                {item.category}
              </Tag>
              {item.timeframe && (
                <div className={styles.timeframe}>
                  <Text variant="body-default-xs" onBackground="neutral-weak">
                    {item.timeframe}
                  </Text>
                  <PresentIndicator />
                </div>
              )}
            </div>
            <Heading as="h4" variant="heading-strong-m" className={styles.cardTitle}>
              {item.title}
            </Heading>
            {item.subtitle && (
              <Text variant="body-default-s" onBackground="neutral-weak" className={styles.subtitle}>
                {item.subtitle}
              </Text>
            )}
            {item.href && (
              <SmartLink href={item.href} className={styles.cta}>
                View details →
              </SmartLink>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};


