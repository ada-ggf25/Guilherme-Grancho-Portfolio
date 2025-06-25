import { Flex, IconButton, Text, SmartLink } from "@once-ui-system/core";
import ThemeToggle from "./ThemeToggle";
import { routes } from "@/resources";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <Flex
      className={styles.position}
      as="header"
      zIndex={9}
      fillWidth
      padding="8"
      horizontal="center"
    >
      <Flex
        background="surface"
        border="neutral-medium"
        borderStyle="solid"
        radius="m-4"
        shadow="l"
        padding="4"
        horizontal="center"
        hide="s"
      >
        <Flex
          paddingX="16"
          gap="20"
          horizontal="center"
          vertical="center"
        >
          {routes['/'] && (
            <SmartLink
              href="/"
              style={{ textDecoration: 'none' }}
            >
              <Text
                variant="label-default-s"
                onBackground="neutral-strong"
              >
                Home
              </Text>
            </SmartLink>
          )}
          {routes['/about'] && (
            <SmartLink
              href="/about"
              style={{ textDecoration: 'none' }}
            >
              <Text
                variant="label-default-s"
                onBackground="neutral-strong"
              >
                About
              </Text>
            </SmartLink>
          )}
          {routes['/work'] && (
            <SmartLink
              href="/work"
              style={{ textDecoration: 'none' }}
            >
              <Text
                variant="label-default-s"
                onBackground="neutral-strong"
              >
                Work
              </Text>
            </SmartLink>
          )}
          <ThemeToggle />
        </Flex>
      </Flex>

      {/* Mobile Navigation */}
      <Flex
        className={styles.mask}
        position="fixed"
        background="surface"
        border="neutral-medium"
        borderStyle="solid"
        radius="m-4"
        shadow="l"
        padding="4"
        horizontal="center"
        hide="m"
        bottom="24"
        style={{ 
          left: '50%', 
          transform: 'translateX(-50%)' 
        }}
      >
        <Flex
          paddingX="12"
          gap="16"
          horizontal="center"
          vertical="center"
        >
          {routes['/'] && (
            <IconButton
              href="/"
              icon="homeOutline"
              variant="ghost"
              size="l"
            />
          )}
          {routes['/about'] && (
            <IconButton
              href="/about"
              icon="personOutline"
              variant="ghost"
              size="l"
            />
          )}
          {routes['/work'] && (
            <IconButton
              href="/work"
              icon="gridOutline"
              variant="ghost"
              size="l"
            />
          )}
          <ThemeToggle />
        </Flex>
      </Flex>
    </Flex>
  );
};
