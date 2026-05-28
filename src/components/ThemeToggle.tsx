"use client";

import React, { useSyncExternalStore } from "react";
import { ToggleButton, useTheme } from "@once-ui-system/core";

function subscribeToTheme(callback: () => void): () => void {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getThemeSnapshot(): "light" | "dark" {
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

function getThemeServerSnapshot(): "light" {
  return "light";
}

export const ThemeToggle: React.FC = () => {
  const { setTheme } = useTheme();
  const currentTheme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getThemeServerSnapshot,
  );

  const icon = currentTheme === "dark" ? "light" : "dark";
  const nextTheme = currentTheme === "light" ? "dark" : "light";

  return (
    <ToggleButton
      prefixIcon={icon}
      onClick={() => setTheme(nextTheme)}
      aria-label={`Switch to ${nextTheme} mode`}
    />
  );
};
