import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  HeadingLink,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  SmartLink
} from "@once-ui-system/core";
import { baseURL, about, person, social, publications, certifications, github } from "@/resources";
import styles from "@/components/about/about.module.scss";
import { SectionNavigation } from "@/components/SectionNavigation";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const sections = [
    { id: about.intro.title, label: "Introduction" },
    { id: about.work.title, label: "Professional Experience" },
    { id: about.studies.title, label: "Education" },
    { id: about.awards.title, label: "Awards & Honours" },
    { id: about.certifications.title, label: "Certifications" },
    { id: about.achievements.title, label: "Achievements" },
    { id: "publications", label: "Publications" },
    { id: "github-achievements", label: "GitHub Achievements" }
  ];

  return (
    <Column style={{ maxWidth: "var(--static-space-m)" }}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <SectionNavigation sections={sections} />
      <Flex style={{ width: "100%", gap: "48px" }} horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            position="sticky"
            style={{
              minWidth: "160px",
              paddingLeft: "var(--static-space-l)",
              paddingRight: "var(--static-space-xl)",
              paddingBottom: "var(--static-space-xl)",
              gap: "var(--static-space-m)",
              flex: 3,
            }}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Flex 
              style={{ gap: "8px", marginTop: "16px" }}
              vertical="center"
            >
              <Text style={{ fontSize: "16px" }}>📍</Text>
              {person.location}
            </Flex>
            {person.languages.length > 0 && (
              <Flex 
                style={{ 
                  flexWrap: "wrap",
                  gap: "8px",
                  marginTop: "20px"
                }}
              >
                {person.languages.map((language, index) => (
                  <Button
                    key={language}
                    size="s"
                    weight="default"
                    variant="secondary"
                    style={{
                      borderRadius: "8px",
                      padding: "6px 12px",
                      fontSize: "14px",
                      fontWeight: "500",
                      border: "1px solid var(--color-neutral-alpha-medium)",
                      background: "var(--color-neutral-alpha-weak)",
                      color: "var(--color-neutral-strong)",
                      transition: "all 0.2s ease"
                    }}
                  >
                    {language}
                  </Button>
                ))}
              </Flex>
            )}
          </Column>
        )}
        <Column 
          className={styles.blockAlign} 
          style={{
            flex: 9,
            maxWidth: "40rem",
            paddingLeft: "var(--static-space-l)",
          }}
        >
          <Column
            id={about.intro.title}
            style={{
              minHeight: "160px",
              marginBottom: "32px",
              width: "100%",
            }}
            vertical="center"
          >
            {about.calendar.display && (
              <SmartLink
                href={`mailto:${person.email}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Flex
                  className={`${styles.blockAlign} ${styles.talkToMeButton}`}
                  style={{
                    backdropFilter: "blur(var(--static-space-1))",
                    background: "var(--color-brand-alpha-weak)",
                    borderRadius: "9999px",
                    padding: "8px 16px",
                    gap: "12px",
                    marginBottom: "var(--static-space-m)",
                    border: "1px solid var(--color-brand-alpha-medium)",
                    width: "fit-content",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  }}
                  vertical="center"
                >
                  <Icon 
                    name="calendar" 
                    onBackground="brand-weak" 
                  />
                  <Text 
                    variant="body-default-s"
                    style={{ 
                      fontWeight: "500",
                      color: "var(--color-neutral-strong)",
                      lineHeight: "1",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Talk to me
                  </Text>
                  <Icon 
                    name="chevronRight" 
                    onBackground="brand-weak"
                    style={{ 
                      width: "16px", 
                      height: "16px" 
                    }}
                  />
                </Flex>
              </SmartLink>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Flex 
                className={styles.blockAlign} 
                style={{
                  paddingTop: "20px",
                  paddingBottom: "8px",
                  gap: "8px",
                  flexWrap: "wrap",
                  width: "fit-content",
                }}
                horizontal="center"
              >
                {social.map(
                  (item) =>
                    item.link && (
                        <Button
                            key={item.name}
                            href={item.link}
                            prefixIcon={item.icon}
                            label={item.name}
                            size="s"
                            weight="default"
                            variant="secondary"
                        />
                    ),
                )}
              </Flex>
            )}
          </Column>

          {about.intro.display && (
            <Column 
              style={{
                gap: "var(--static-space-m)",
                marginBottom: "48px",
                width: "100%",
                fontSize: "var(--font-size-body-default-l)",
                lineHeight: "var(--line-height-body-default-l)",
              }}
            >
              {about.intro.description}
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading 
                as="h2" 
                id={about.work.title} 
                variant="display-strong-s" 
                style={{ marginTop: "64px", marginBottom: "32px" }}
              >
                {about.work.title}
              </Heading>
              <Column 
                style={{
                  gap: "var(--static-space-l)",
                  marginBottom: "64px",
                  width: "100%",
                }}
              >
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} style={{ marginBottom: "32px", width: "100%" }}>
                    <Flex 
                      horizontal="space-between" 
                      vertical="end" 
                      style={{ marginBottom: "4px", width: "100%" }}
                    >
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Flex>
                    <Text 
                      variant="body-default-s" 
                      onBackground="brand-weak" 
                      style={{ marginBottom: "var(--static-space-m)" }}
                    >
                      {experience.role}
                    </Text>
                    <Column 
                      as="ul" 
                      style={{ gap: "20px", marginTop: "16px" }}
                    >
                      {experience.achievements.map((achievement: JSX.Element, index: number) => (
                        <Text
                          as="li"
                          variant="body-default-m"
                          key={`${experience.company}-${index}`}
                        >
                          {achievement}
                        </Text>
                      ))}
                    </Column>
                    {experience.images.length > 0 && (
                      <Flex 
                        fillWidth 
                        style={{
                          paddingTop: "var(--static-space-m)",
                          paddingLeft: "40px",
                          gap: "12px",
                          flexWrap: "wrap",
                        }}
                      >
                        {experience.images.map((image, index) => (
                          <Flex
                            key={index}
                            style={{
                              border: "1px solid var(--color-neutral-medium)",
                              borderRadius: "var(--static-space-m)",
                              minWidth: `${image.width}rem`,
                              height: `${image.height}rem`,
                            }}
                          >
                            <Media
                              enlarge
                              style={{
                                borderRadius: "var(--static-space-m)",
                              }}
                              //@ts-ignore
                              sizes={image.width.toString()}
                              //@ts-ignore
                              alt={image.alt}
                              //@ts-ignore
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading 
                as="h2" 
                id={about.studies.title} 
                variant="display-strong-s" 
                style={{ marginTop: "64px", marginBottom: "32px" }}
              >
                {about.studies.title}
              </Heading>
              <Column 
                style={{
                  gap: "var(--static-space-l)",
                  marginBottom: "64px",
                  width: "100%",
                }}
              >
                {about.studies.institutions.map((institution, index) => (
                  <Column 
                    key={`${institution.name}-${index}`} 
                    style={{ gap: "8px", marginBottom: "24px", width: "100%" }}
                  >
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.awards.display && (
            <>
              <Heading
                as="h2"
                id={about.awards.title}
                variant="display-strong-s"
                style={{ marginTop: "64px", marginBottom: "32px" }}
              >
                {about.awards.title}
              </Heading>
              <Column 
                style={{ gap: "var(--static-space-l)", marginBottom: "64px", width: "100%" }}
              >
                {about.awards.accomplishments.map((award, index) => (
                  <Column 
                    key={`${award.title}-${index}`} 
                    style={{ gap: "8px", marginBottom: "24px", width: "100%" }}
                  >
                    <Flex 
                      horizontal="space-between" 
                      vertical="end" 
                      style={{ marginBottom: "4px", width: "100%" }}
                    >
                      <Text id={award.title} variant="heading-strong-l">
                        {award.title}
                      </Text>
                      <Flex 
                        style={{ gap: "8px" }}
                        vertical="center"
                      >
                        <Tag size="s" background="brand-alpha-weak" onBackground="brand-weak">
                          {award.category}
                        </Tag>
                        <Text variant="heading-default-xs" onBackground="neutral-weak">
                          {award.year}
                        </Text>
                      </Flex>
                    </Flex>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {award.description}
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-weak" style={{ fontStyle: "italic" }}>
                      Issued by: {award.issuer}
                      {award.associated_with && ` • Associated with: ${award.associated_with}`}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.certifications.display && (
            <>
              <Heading
                as="h2"
                id={about.certifications.title}
                variant="display-strong-s"
                style={{ marginTop: "64px", marginBottom: "32px" }}
              >
                {about.certifications.title}
              </Heading>
              <Column 
                style={{ gap: "var(--static-space-l)", marginBottom: "64px", width: "100%" }}
              >
                {about.certifications.accomplishments.map((certification, index) => (
                  <Column 
                    key={`${certification.title}-${index}`} 
                    style={{ gap: "8px", marginBottom: "24px", width: "100%" }}
                  >
                    <Flex 
                      horizontal="space-between" 
                      vertical="end" 
                      style={{ marginBottom: "4px", width: "100%" }}
                    >
                      <Text id={certification.title} variant="heading-strong-l">
                        {certification.title}
                      </Text>
                      <Flex 
                        style={{ gap: "8px" }}
                        vertical="center"
                      >
                        <Tag size="s" background="brand-alpha-weak" onBackground="brand-weak">
                          {certification.category}
                        </Tag>
                        <Text variant="heading-default-xs" onBackground="neutral-weak">
                          {certification.year}
                        </Text>
                      </Flex>
                    </Flex>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {certification.description}
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-weak" style={{ fontStyle: "italic" }}>
                      Issued by: {certification.issuer}
                      {certification.associated_with && ` • Associated with: ${certification.associated_with}`}
                      {certification.credential_id && ` • Credential ID: ${certification.credential_id}`}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.achievements.display && (
            <>
              <Heading
                as="h2"
                id={about.achievements.title}
                variant="display-strong-s"
                style={{ marginTop: "64px", marginBottom: "32px" }}
              >
                {about.achievements.title}
              </Heading>
              <Column 
                style={{ gap: "var(--static-space-l)", marginBottom: "64px", width: "100%" }}
              >
                {about.achievements.accomplishments.map((achievement, index) => (
                  <Column 
                    key={`${achievement.title}-${index}`} 
                    style={{ gap: "8px", marginBottom: "24px", width: "100%" }}
                  >
                    <Flex 
                      horizontal="space-between" 
                      vertical="end" 
                      style={{ marginBottom: "4px", width: "100%" }}
                    >
                      <Text id={achievement.title} variant="heading-strong-l">
                        {achievement.title}
                      </Text>
                      <Flex 
                        style={{ gap: "8px" }}
                        vertical="center"
                      >
                        <Tag size="s" background="brand-alpha-weak" onBackground="brand-weak">
                          {achievement.category}
                        </Tag>
                        <Text variant="heading-default-xs" onBackground="neutral-weak">
                          {achievement.year}
                        </Text>
                      </Flex>
                    </Flex>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {achievement.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {/* Publications Section */}
          {publications.display && (
            <>
              <HeadingLink
                as="h2"
                id="publications"
                style={{
                  marginTop: "80px",
                  marginBottom: "32px",
                }}
              >
                {publications.title}
              </HeadingLink>
              <Text
                variant="body-default-m"
                onBackground="neutral-weak"
                style={{ marginBottom: "40px" }}
              >
                {publications.description}
              </Text>
              <Column style={{ gap: "32px", marginBottom: "64px" }}>
                {publications.papers.map((paper, index) => (
                  <Column key={index} style={{ gap: "12px", marginBottom: "24px" }}>
                    <Flex
                      direction="row"
                      style={{ 
                        gap: "16px",
                        justifyContent: "space-between",
                        alignItems: "flex-start"
                      }}
                    >
                      <Column 
                        style={{ 
                          flex: 1,
                          gap: "8px",
                        }}
                      >
                        <Heading variant="heading-default-s">
                          <SmartLink
                            href={paper.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
                            {paper.title}
                          </SmartLink>
                        </Heading>
                        <Text variant="body-default-s" onBackground="neutral-weak">
                          {paper.authors}
                        </Text>
                        <Flex 
                          direction="row" 
                          style={{ gap: "16px" }}
                        >
                          <Tag variant="neutral" size="s">
                            {paper.venue}
                          </Tag>
                          <Tag variant="brand" size="s">
                            {paper.category}
                          </Tag>
                          <Text variant="body-default-xs" onBackground="neutral-weak">
                            {paper.year}
                          </Text>
                        </Flex>
                      </Column>
                    </Flex>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {paper.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {/* Certifications Section */}
          {certifications.display && (
            <>
              <HeadingLink
                as="h2"
                id="certifications"
                style={{
                  marginTop: "80px",
                  marginBottom: "32px",
                }}
              >
                {certifications.title}
              </HeadingLink>
              <Column style={{ gap: "32px", marginBottom: "64px" }}>
                {certifications.certifications.map((cert, index) => (
                  <Column key={index} style={{ gap: "12px", marginBottom: "24px" }}>
                    <Flex
                      direction="row"
                      style={{ gap: "16px" }}
                    >
                      <Column 
                        style={{ 
                          flex: 1,
                          gap: "8px",
                        }}
                      >
                        <Heading variant="heading-default-s">
                          {cert.name}
                        </Heading>
                        <Text variant="body-default-s" onBackground="neutral-weak">
                          {cert.issuer}
                        </Text>
                        <Flex 
                          direction="row" 
                          style={{ gap: "16px" }}
                        >
                          <Tag variant="neutral" size="s">
                            {cert.date}
                          </Tag>
                          <Text variant="body-default-xs" onBackground="neutral-weak">
                            ID: {cert.credential_id}
                          </Text>
                        </Flex>
                      </Column>
                    </Flex>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {cert.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {/* GitHub Achievements Section */}
          {github.display && (
            <>
              <HeadingLink
                as="h2"
                id="github-achievements"
                style={{
                  marginTop: "80px",
                  marginBottom: "32px",
                }}
              >
                {github.title}
              </HeadingLink>
              <Text
                variant="body-default-m"
                onBackground="neutral-weak"
                style={{ marginBottom: "40px" }}
              >
                {github.description}
              </Text>
              <Column style={{ gap: "32px", marginBottom: "64px" }}>
                {github.achievements.map((achievement, index) => (
                  <Column key={index} style={{ gap: "12px", marginBottom: "24px" }}>
                    <Flex
                      direction="row"
                      style={{ 
                        gap: "16px",
                        justifyContent: "flex-start",
                        alignItems: "center"
                      }}
                    >
                      <Text variant="display-default-l">
                        {achievement.icon}
                      </Text>
                      <Column style={{ flex: 1, gap: "4px" }}>
                        <Heading variant="heading-default-s">
                          {achievement.name}
                        </Heading>
                        <Text variant="body-default-m" onBackground="neutral-weak">
                          {achievement.description}
                        </Text>
                      </Column>
                    </Flex>
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Flex>
    </Column>
  );
}
