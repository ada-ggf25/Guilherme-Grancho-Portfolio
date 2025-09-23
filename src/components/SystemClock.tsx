"use client";

import { useEffect, useState } from "react";
import { Text } from "@once-ui-system/core";

export const SystemClock = () => {
  const [currentTime, setCurrentTime] = useState("");

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

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Text variant="body-default-s" onBackground="neutral-strong">
      {currentTime}
    </Text>
  );
};
