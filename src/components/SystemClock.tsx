"use client";

import { memo, useEffect, useState, useRef } from "react";
import { Text } from "@once-ui-system/core";

export const SystemClock = memo(() => {
  const [currentTime, setCurrentTime] = useState("");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-GB", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentTime(timeString);
    };

    // Initial update
    updateTime();
    
    // Use requestAnimationFrame for smoother updates and reduce re-renders
    const scheduleUpdate = () => {
      const now = Date.now();
      const delay = 1000 - (now % 1000);
      intervalRef.current = setTimeout(() => {
        updateTime();
        scheduleUpdate();
      }, delay);
    };
    
    scheduleUpdate();

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, []);

  return (
    <Text variant="body-default-s" onBackground="neutral-strong">
      {currentTime}
    </Text>
  );
});

SystemClock.displayName = "SystemClock";
