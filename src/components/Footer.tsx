import { Flex, Button, SmartLink, Text } from "@once-ui-system/core";
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
        className={styles.mobile}
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
        <Flex gap="12">
          {social.map(
            (item) =>
              item.link && (
                <Button
                  key={item.name}
                  href={item.link}
                  prefixIcon={item.icon}
                  size="s"
                  variant="ghost"
                  className={styles.socialButton}
                  style={{
                    minWidth: "auto",
                    padding: "8px",
                    borderRadius: "8px",
                  }}
                />
              ),
          )}
        </Flex>
      </Flex>
      <Flex height="80" show="s"></Flex>
    </Flex>
  );
};
