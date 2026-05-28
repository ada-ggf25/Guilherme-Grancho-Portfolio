import { Column, Flex, Heading, Text } from "@once-ui-system/core";

export default function MobileNotSupported() {
  return (
    <Flex
      fillWidth
      fillHeight
      horizontal="center"
      vertical="center"
      padding="xl"
      style={{ minHeight: "100vh" }}
    >
      <Column
        maxWidth={32}
        gap="l"
        horizontal="center"
        padding="xl"
        style={{
          textAlign: "center",
        }}
      >
        <Heading align="center" wrap="balance" size="xl">
          Mobile Device Detected
        </Heading>
        <Text align="center" wrap="balance" size="l">
          This page is not yet configured for mobile devices and needs to be
          opened on a PC or in PC format to be viewed properly.
        </Text>
        <Text align="center" wrap="balance" size="m" style={{ opacity: 0.7 }}>
          Please access this website from a desktop or laptop computer, or
          switch to desktop view in your mobile browser settings.
        </Text>
      </Column>
    </Flex>
  );
}
