"use client";

import { usePathname } from "next/navigation";
import { Header, Footer } from "@/components";

export function ConditionalHeaderFooter({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isMobileNotSupportedPage = pathname === '/mobile-not-supported';

  return (
    <>
      {!isMobileNotSupportedPage && <Header />}
      {children}
      {!isMobileNotSupportedPage && <Footer />}
    </>
  );
}

