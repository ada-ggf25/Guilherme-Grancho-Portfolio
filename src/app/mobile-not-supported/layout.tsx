import { Flex } from "@once-ui-system/core";
import { RouteGuard } from '@/components';

export default async function MobileNotSupportedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      zIndex={0}
      fillWidth
      padding="l"
      horizontal="center"
      flex={1}
    >
      <Flex horizontal="center" fillWidth minHeight="0">
        <RouteGuard>
          {children}
        </RouteGuard>
      </Flex>
    </Flex>
  );
}
