'use client';

import React from "react";
import { 
  Heading, 
  Flex, 
  Text, 
  Button, 
  Column, 
  Badge,
  RevealFx,
  SmartLink
} from "@once-ui-system/core";
import { home, social, work } from "@/resources";

export default function Home() {
  return (
    <Column fillWidth maxWidth="xl" gap="xl">
      {/* Hero Section */}
      <Column fillWidth gap="l" paddingY="xl">
        <RevealFx translateY="16" delay={0.1}>
          <Column gap="m" horizontal="center">
            <Badge>
              Available for work
            </Badge>
          </Column>
        </RevealFx>

        <RevealFx translateY="16" delay={0.2}>
          <Column gap="s" horizontal="center">
            <Heading
              as="h1" 
              variant="display-strong-l"
              wrap="balance"
            >
              {home.headline}
            </Heading>
            <Text
              variant="display-default-s"
              onBackground="neutral-weak"
              wrap="balance"
            >
              {home.subline}
            </Text>
          </Column>
        </RevealFx>

        <RevealFx translateY="16" delay={0.3}>
          <Flex gap="16" horizontal="center" wrap>
            <Button
              href="#work"
              variant="primary"
              size="l"
            >
              View my work
            </Button>
            <Button
              href="#contact"
              variant="secondary"
              size="l"
            >
              Get in touch
            </Button>
          </Flex>
        </RevealFx>

        {social.length > 0 && (
          <RevealFx translateY="16" delay={0.4}>
            <Flex gap="16" horizontal="center" wrap>
              {social.map(
                (item) =>
                  item.link && (
                    <SmartLink
                      key={item.name}
                      href={item.link}
                      style={{ textDecoration: 'none' }}
                    >
                      <Text 
                        variant="body-default-s" 
                        onBackground="neutral-weak"
                      >
                        {item.name}
                      </Text>
                    </SmartLink>
                  ),
              )}
            </Flex>
          </RevealFx>
        )}
      </Column>

      {/* Work Section */}
      <Column id="work" fillWidth gap="l" paddingY="xl">
        <Heading 
          as="h2" 
          variant="display-strong-s"
        >
          Featured Projects
        </Heading>
        
        <Column gap="l">
          {work.projects.map((project, index) => (
            <RevealFx 
              key={project.title} 
              translateY="16" 
              delay={0.1 * (index + 1)}
            >
              <Column 
                gap="m" 
                padding="l" 
                border="neutral-medium" 
                borderStyle="solid"
                radius="l"
                background="surface"
              >
                <Heading as="h3" variant="heading-strong-l">
                  {project.title}
                </Heading>
                <Text 
                  variant="body-default-m" 
                  onBackground="neutral-weak"
                >
                  {project.description}
                </Text>
                <Flex gap="12">
                  <Button variant="tertiary" size="s">
                    View project
                  </Button>
                  <Button variant="secondary" size="s">
                    Source code
                  </Button>
                </Flex>
              </Column>
            </RevealFx>
          ))}
        </Column>
      </Column>

      {/* Contact Section */}
      <Column id="contact" fillWidth gap="l" paddingY="xl">
        <Column gap="m" horizontal="center">
          <Heading 
            as="h2" 
            variant="display-strong-s"
          >
            Let&apos;s work together
          </Heading>
          <Text 
            variant="body-default-l" 
            onBackground="neutral-weak"
            wrap="balance"
          >
            I&apos;m always interested in new opportunities and exciting projects.
          </Text>
        </Column>
        
        <RevealFx translateY="16" delay={0.2}>
          <Flex gap="16" horizontal="center" wrap>
            {social.find(item => item.name === 'Email') && (
              <Button
                href={social.find(item => item.name === 'Email')?.link}
                variant="primary"
                size="l"
                prefixIcon="mailOutline"
              >
                Send message
              </Button>
            )}
            <Button
              href="/about"
              variant="secondary"
              size="l"
            >
              Learn more about me
            </Button>
          </Flex>
        </RevealFx>
      </Column>
    </Column>
  );
}
