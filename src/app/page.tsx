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
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
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
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
    {
      title: about.achievements.title,
      display: about.achievements.display,
      items: about.achievements.accomplishments.map((achievement) => achievement.title),
    },
    {
      title: publications.title,
      display: publications.display,
      items: publications.papers.map((paper) => paper.title),
    },
    {
      title: certifications.title,
      display: certifications.display,
      items: certifications.certifications.map((cert) => cert.name),
    },
    {
      title: github.title,
      display: github.display,
      items: github.achievements.map((achievement) => achievement.name),
    },
  ];
  return (
    <Column maxWidth="m">
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
      {about.tableOfContent.display && (
        <Column
          style={{
            top: "50%",
            transform: "translateY(-50%)",
            left: "0",
            paddingLeft: "24px",
            gap: "32px",
          }}
          position="fixed"
          className="hide-s"
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Flex fillWidth mobileDirection="column" horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            position="sticky"
            style={{
              minWidth: "160px",
              paddingLeft: "var(--static-space-l)",
              paddingRight: "var(--static-space-l)",
              paddingBottom: "var(--static-space-xl)",
              gap: "var(--static-space-m)",
              flex: 3,
            }}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Flex 
              style={{ gap: "8px" }}
              vertical="center"
            >
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Flex>
            {person.languages.length > 0 && (
              <Flex 
                style={{ 
                  flexWrap: "wrap",
                  gap: "8px" 
                }}
              >
                {person.languages.map((language, index) => (
                  <Tag key={language} size="l">
                    {language}
                  </Tag>
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
          }}
        >
          <Column
            id={about.intro.title}
            fillWidth
            style={{
              minHeight: "160px",
              marginBottom: "32px",
            }}
            vertical="center"
          >
            {about.calendar.display && (
              <Flex
                fitWidth
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                  background: "var(--color-brand-alpha-weak)",
                  borderRadius: "9999px",
                  padding: "4px",
                  gap: "8px",
                  marginBottom: "var(--static-space-m)",
                  border: "1px solid var(--color-brand-alpha-medium)",
                }}
                vertical="center"
              >
                <Icon 
                  style={{ paddingLeft: "12px" }}
                  name="calendar" 
                  onBackground="brand-weak" 
                />
                <Flex style={{ paddingLeft: "8px", paddingRight: "8px" }}>
                  Talk to me
                </Flex>
                <IconButton
                  href={`mailto:${person.email}`}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Flex>
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
                }}
                horizontal="center" 
                fitWidth 
                data-border="rounded"
              >
                {social.map(
                  (item) =>
                    item.link && (
                        <React.Fragment key={item.name}>
                            <Button
                                className="s-flex-hide"
                                key={item.name}
                                href={item.link}
                                prefixIcon={item.icon}
                                label={item.name}
                                size="s"
                                weight="default"
                                variant="secondary"
                            />
                            <IconButton
                                className="s-flex-show"
                                size="l"
                                key={`${item.name}-icon`}
                                href={item.link}
                                icon={item.icon}
                                variant="secondary"
                            />
                        </React.Fragment>
                    ),
                )}
              </Flex>
            )}
          </Column>

          {about.intro.display && (
            <Column 
              textVariant="body-default-l" 
              fillWidth 
              style={{
                gap: "var(--static-space-m)",
                marginBottom: "48px",
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
                fillWidth 
                style={{
                  gap: "var(--static-space-l)",
                  marginBottom: "64px",
                }}
              >
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth style={{ marginBottom: "32px" }}>
                    <Flex 
                      fillWidth 
                      horizontal="space-between" 
                      vertical="end" 
                      style={{ marginBottom: "4px" }}
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
                fillWidth 
                style={{
                  gap: "var(--static-space-l)",
                  marginBottom: "64px",
                }}
              >
                {about.studies.institutions.map((institution, index) => (
                  <Column 
                    key={`${institution.name}-${index}`} 
                    fillWidth 
                    style={{ gap: "8px", marginBottom: "24px" }}
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

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                style={{ marginTop: "64px", marginBottom: "32px" }}
              >
                {about.technical.title}
              </Heading>
              <Column 
                fillWidth 
                style={{ gap: "var(--static-space-l)", marginBottom: "64px" }}
              >
                {about.technical.skills.map((skill, index) => (
                  <Column 
                    key={`${skill}-${index}`} 
                    fillWidth 
                    style={{ gap: "8px", marginBottom: "32px" }}
                  >
                    <Text variant="heading-strong-l">{skill.title}</Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {skill.images && skill.images.length > 0 && (
                      <Flex 
                        fillWidth 
                        style={{
                          paddingTop: "var(--static-space-m)",
                          gap: "12px",
                          flexWrap: "wrap",
                        }}
                      >
                        {skill.images.map((image, index) => (
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
                fillWidth 
                style={{ gap: "var(--static-space-l)", marginBottom: "64px" }}
              >
                {about.achievements.accomplishments.map((achievement, index) => (
                  <Column 
                    key={`${achievement.title}-${index}`} 
                    fillWidth 
                    style={{ gap: "8px", marginBottom: "24px" }}
                  >
                    <Flex 
                      fillWidth 
                      horizontal="space-between" 
                      vertical="end" 
                      style={{ marginBottom: "4px" }}
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
                      justifyContent="space-between"
                      alignItems="flex-start"
                      style={{ gap: "16px" }}
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
                          alignItems="center"
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
                      justifyContent="space-between"
                      alignItems="flex-start"
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
                          alignItems="center"
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
                      justifyContent="flex-start"
                      alignItems="center"
                      style={{ gap: "16px" }}
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
