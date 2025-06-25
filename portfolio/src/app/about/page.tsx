'use client';

import React from "react";
import { 
  Heading, 
  Flex, 
  Text, 
  Button, 
  Column, 
  Badge,
  RevealFx
} from "@once-ui-system/core";
import { about, person, social } from "@/resources";

export default function About() {
  return (
    <Column fillWidth maxWidth="xl" gap="xl">
      {/* Hero Section */}
      <Column fillWidth gap="l" paddingY="xl">
        <RevealFx translateY="16" delay={0.1}>
          <Column gap="m" horizontal="center">
            <Heading
              as="h1" 
              variant="display-strong-l"
            >
              {person.name}
            </Heading>
            <Text
              variant="display-default-s"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Flex gap="16" horizontal="center" wrap>
                {social.map(
                  (item) =>
                    item.link && (
                      <Button
                        key={item.name}
                        href={item.link}
                        variant="secondary"
                        size="s"
                        prefixIcon={item.icon}
                      >
                        {item.name}
                      </Button>
                    ),
                )}
              </Flex>
            )}
          </Column>
        </RevealFx>
      </Column>

      {/* Introduction */}
      {about.intro.display && (
        <Column fillWidth gap="m" paddingY="l">
          <Heading as="h2" variant="display-strong-s">
            {about.intro.title}
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            {about.intro.description}
          </Text>
        </Column>
      )}

      {/* Work Experience */}
      {about.work.display && (
        <Column fillWidth gap="l" paddingY="l">
          <Heading as="h2" variant="display-strong-s">
            {about.work.title}
          </Heading>
          <Column gap="l">
            {about.work.experiences.map((experience, index) => (
              <RevealFx 
                key={`${experience.company}-${index}`} 
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
                  <Flex horizontal="space-between" vertical="end">
                    <Column gap="4">
                      <Heading as="h3" variant="heading-strong-l">
                        {experience.company}
                      </Heading>
                      <Text variant="body-default-m" onBackground="neutral-weak">
                        {experience.role}
                      </Text>
                    </Column>
                    <Badge>
                      {experience.timeframe}
                    </Badge>
                  </Flex>
                  <Column gap="8">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <Text 
                        key={achievementIndex}
                        variant="body-default-s" 
                        onBackground="neutral-weak"
                      >
                        • {achievement}
                      </Text>
                    ))}
                  </Column>
                </Column>
              </RevealFx>
            ))}
          </Column>
        </Column>
      )}

      {/* Education */}
      {about.studies.display && (
        <Column fillWidth gap="l" paddingY="l">
          <Heading as="h2" variant="display-strong-s">
            {about.studies.title}
          </Heading>
          <Column gap="l">
            {about.studies.institutions.map((institution, index) => (
              <RevealFx 
                key={`${institution.name}-${index}`} 
                translateY="16" 
                delay={0.1 * (index + 1)}
              >
                <Column 
                  gap="s" 
                  padding="l" 
                  border="neutral-medium" 
                  borderStyle="solid"
                  radius="l"
                  background="surface"
                >
                  <Heading as="h3" variant="heading-strong-m">
                    {institution.name}
                  </Heading>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {institution.description}
                  </Text>
                </Column>
              </RevealFx>
            ))}
          </Column>
        </Column>
      )}

      {/* Technical Skills */}
      {about.technical.display && (
        <Column fillWidth gap="l" paddingY="l">
          <Heading as="h2" variant="display-strong-s">
            {about.technical.title}
          </Heading>
          <Column gap="l">
            {about.technical.skills.map((skill, index) => (
              <RevealFx 
                key={`${skill.title}-${index}`} 
                translateY="16" 
                delay={0.1 * (index + 1)}
              >
                <Column 
                  gap="s" 
                  padding="l" 
                  border="neutral-medium" 
                  borderStyle="solid"
                  radius="l"
                  background="surface"
                >
                  <Heading as="h3" variant="heading-strong-m">
                    {skill.title}
                  </Heading>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {skill.description}
                  </Text>
                </Column>
              </RevealFx>
            ))}
          </Column>
        </Column>
      )}

      {/* Contact Section */}
      <Column fillWidth gap="l" paddingY="xl">
        <Column gap="m" horizontal="center">
          <Heading 
            as="h2" 
            variant="display-strong-s"
          >
            Get in touch
          </Heading>
          <Text 
            variant="body-default-l" 
            onBackground="neutral-weak"
            wrap="balance"
          >
            I&apos;m always open to discussing new opportunities.
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
              href="/"
              variant="secondary"
              size="l"
            >
              Back to home
            </Button>
          </Flex>
        </RevealFx>
      </Column>
    </Column>
  );
}
