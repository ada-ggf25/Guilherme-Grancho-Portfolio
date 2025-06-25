import '@once-ui-system/core/css/styles.css';
import '@once-ui-system/core/css/tokens.css';
import './globals.css';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Background, Column, Flex } from "@once-ui-system/core";
import { Header, Footer } from '@/components/index';
import { style } from '@/resources';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guilherme Grancho - Portfolio",
  description: "Professional portfolio of Guilherme Grancho - Software Developer, Engineer, and Technology Enthusiast",
  keywords: "Guilherme Grancho, Software Developer, Portfolio, Web Development, Technology",
  authors: [{ name: "Guilherme Grancho" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      as="html"
      lang="en"
      fillWidth
      className={inter.variable}
      suppressHydrationWarning
    >
      <head>
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const root = document.documentElement;
                  
                  // Set defaults from config
                  const config = ${JSON.stringify({
                    theme: style.theme,
                    neutral: style.neutral,
                    brand: style.brand,
                    accent: style.accent,
                    solid: style.solid,
                    'solid-style': style.solidStyle,
                    border: style.border,
                    surface: style.surface,
                    transition: style.transition,
                    scaling: style.scaling,
                  })};
                  
                  // Apply default values
                  Object.entries(config).forEach(([key, value]) => {
                    root.setAttribute('data-' + key, value);
                  });
                  
                  // Resolve theme
                  const resolveTheme = (themeValue) => {
                    if (!themeValue || themeValue === 'system') {
                      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    }
                    return themeValue;
                  };
                  
                  // Apply saved theme
                  const savedTheme = localStorage.getItem('data-theme');
                  const resolvedTheme = resolveTheme(savedTheme);
                  root.setAttribute('data-theme', resolvedTheme);
                  
                } catch (e) {
                  console.error('Failed to initialize theme:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <Column as="body" fillWidth style={{minHeight: "100vh"}} margin="0" padding="0" horizontal="center">
        <Background
          position="fixed"
          gradient={{
            display: true,
            opacity: 30,
            x: 50,
            y: -25,
            width: 100,
            height: 100,
            tilt: 0,
            colorStart: 'brand-background-strong',
            colorEnd: 'static-transparent',
          }}
          dots={{
            display: true,
            opacity: 20,
            size: '2',
            color: 'brand-on-background-weak',
          }}
        />
        <Flex fillWidth minHeight="16" hide="s"/>
        <Header />
        <Flex
          zIndex={0}
          fillWidth
          padding="l"
          horizontal="center"
          flex={1}
        >
          <Flex horizontal="center" fillWidth minHeight="0">
            {children}
          </Flex>
        </Flex>
        <Footer/>
      </Column>
    </Flex>
  );
}
