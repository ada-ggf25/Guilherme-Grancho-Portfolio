import { Column, Text } from "@once-ui-system/core";

export default function NotFound() {
  return (
    <Column as="section" fillWidth horizontal="center" vertical="center" paddingBottom="160" style={{ minHeight: "100vh" }}>
      <Text marginBottom="s" variant="display-strong-xl">
        404
      </Text>
      <Text marginBottom="l" variant="display-default-xs">
        Page Not Found
      </Text>
      <Text onBackground="neutral-weak">The page you are looking for does not exist.</Text>
    </Column>
  );
}
