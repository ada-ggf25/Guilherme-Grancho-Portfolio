'use client';

import React from "react";
import { 
  Heading, 
  Flex, 
  Text, 
  Button, 
  Column, 
  RevealFx,
  Media
} from "@once-ui-system/core";
import { work } from "@/resources";

export default function Work() {
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
              {work.title}
            </Heading>
            <Text
              variant="display-default-s"
              onBackground="neutral-weak"
            >
              {work.description}
            </Text>
          </Column>
        </RevealFx>
      </Column>

      {/* Projects */}
      <Column fillWidth gap="xl" paddingY="l">
        {work.projects.map((project, index) => (
          <RevealFx 
            key={project.title} 
            translateY="16" 
            delay={0.1 * (index + 1)}
          >
            <Column 
              gap="l" 
              padding="xl" 
              border="neutral-medium" 
              borderStyle="solid"
              radius="l"
              background="surface"
            >
              {/* Project Images */}
              {project.images && project.images.length > 0 && (
                <Column gap="m">
                  {project.images.map((image, imageIndex) => (
                    <Media
                      key={imageIndex}
                      src={image.src}
                      alt={image.alt}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      aspectRatio={`${image.width}/${image.height}`}
                      radius="m"
                    />
                  ))}
                </Column>
              )}
              
              {/* Project Content */}
              <Column gap="m">
                <Heading as="h2" variant="display-strong-m">
                  {project.title}
                </Heading>
                <Text 
                  variant="body-default-l" 
                  onBackground="neutral-weak"
                >
                  {project.description}
                </Text>
                
                {/* Action Buttons */}
                <Flex gap="12" wrap>
                  <Button variant="primary" size="m">
                    View Live Project
                  </Button>
                  <Button variant="secondary" size="m">
                    View Source Code
                  </Button>
                  <Button variant="tertiary" size="m">
                    Case Study
                  </Button>
                </Flex>
              </Column>
            </Column>
          </RevealFx>
        ))}
      </Column>

      {/* Call to Action */}
      <Column fillWidth gap="l" paddingY="xl">
        <Column gap="m" horizontal="center">
          <Heading 
            as="h2" 
            variant="display-strong-s"
          >
            Interested in working together?
          </Heading>
          <Text 
            variant="body-default-l" 
            onBackground="neutral-weak"
            wrap="balance"
          >
            I&apos;m always excited to take on new challenges and collaborate on interesting projects.
          </Text>
        </Column>
        
        <RevealFx translateY="16" delay={0.2}>
          <Flex gap="16" horizontal="center" wrap>
            <Button
              href="/about"
              variant="primary"
              size="l"
            >
              Learn more about me
            </Button>
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
