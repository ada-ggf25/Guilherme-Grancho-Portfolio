import { Text } from "@once-ui-system/core";

export default function NotFound() {
  return (
    <section style={{ 
      minHeight: "100vh", 
      width: "100%", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      paddingBottom: "160px",
      gap: "var(--static-space-l)"
    }}>
      <Text variant="display-strong-xl">
        404
      </Text>
      <Text variant="display-default-xs">
        Page Not Found
      </Text>
      <Text onBackground="neutral-weak">The page you are looking for does not exist.</Text>
    </section>
  );
}
