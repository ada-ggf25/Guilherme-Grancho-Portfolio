"use client";

import { Fade, Flex } from "@once-ui-system/core";

import { display, person } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import { SystemClock } from "./SystemClock";
import styles from "./Header.module.scss";


export const Header = () => {

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Flex
        fitHeight
        position="unset"
        className={styles.position}
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
