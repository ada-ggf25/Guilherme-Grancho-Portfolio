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
import { baseURL, about, person, social } from "@/resources";
import styles from "@/components/about/about.module.scss";
import { SectionNavigation } from "@/components/SectionNavigation";
import { CollapsibleSection } from "@/components/CollapsibleSection";
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
    { id: about.intro.title, label: "Intro" },
    { id: about.work.title, label: "Experience" },
    { id: about.studies.title, label: "Education" },
    { id: about.publications.title, label: "Publications" },
    { id: about.extracurricular.title, label: "Extracurricular" },
    { id: about.keyProjects.title, label: "Projects" },
    { id: about.awards.title, label: "Awards" },
    { id: about.values.title, label: "Values" },
    { id: about.hobbies.title, label: "Hobbies" }
  ];

  return (
    <Column style={{ maxWidth: "800px", margin: "0 auto", padding: "0 var(--static-space-l)" }}>
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
      
      {/* Avatar and Introduction Section at Top */}
      <div id={about.intro.title}>
      <Column
        style={{
          width: "100%",
          marginTop: "0px",
          marginBottom: "12px",
        }}
        horizontal="center"
      >
        {about.avatar.display && (
          <Column
            style={{
              gap: "var(--static-space-m)",
              marginBottom: "12px",
            }}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
          </Column>
        )}

        <Heading 
          className={styles.textAlign} 
          variant="display-strong-xl"
          style={{ textAlign: "center", marginBottom: "8px" }}
        >
          {person.name}
        </Heading>
        <Text
          className={styles.textAlign}
          variant="display-default-xs"
          onBackground="neutral-weak"
          style={{ textAlign: "center", marginBottom: "6px" }}
        >
          {person.degree}
        </Text>
        <Text
          className={styles.textAlign}
          variant="display-default-xs"
          onBackground="neutral-weak"
          style={{ textAlign: "center", marginBottom: "16px" }}
        >
          {person.role}
        </Text>
        
        {social.length > 0 && (
          <Flex 
            horizontal="center"
            style={{
              paddingTop: "8px",
              paddingBottom: "8px",
              gap: "8px",
              flexWrap: "wrap",
              width: "fit-content",
              margin: "0 auto 16px",
            }}
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

        {about.intro.display && (
          <Column 
            style={{
              gap: "var(--static-space-m)",
              marginBottom: "16px",
              width: "100%",
            }}
          >
            <Text
              style={{
                fontSize: "var(--font-size-body-default-l)",
                lineHeight: "var(--line-height-body-default-l)",
                textAlign: "justify",
              }}
            >
              {about.intro.description}
            </Text>
            {about.intro.finalStatement && (
              <Text
                style={{
                  fontSize: "var(--font-size-body-default-l)",
                  lineHeight: "var(--line-height-body-default-l)",
                  textAlign: "center",
                  marginTop: "20px",
                  fontWeight: "bold",
                }}
              >
                {about.intro.finalStatement}
              </Text>
            )}
          </Column>
        )}
      </Column>
      </div>

      {/* Navigation Bar */}
      <SectionNavigation sections={sections} />

      {/* Main Content Sections */}
      <Column 
        className={styles.blockAlign} 
        style={{
          width: "100%",
          paddingTop: "0px",
        }}
      >

          {about.work.display && (
            <>
              <Heading 
                as="h2" 
                id={about.work.title} 
                variant="display-strong-s" 
                style={{ marginTop: "20px", marginBottom: "12px", scrollMarginTop: "140px" }}
              >
                {about.work.title}
              </Heading>
              <Column 
                style={{
                  gap: "var(--static-space-s)",
                  marginBottom: "20px",
                  width: "100%",
                  position: "relative",
                  overflow: "visible",
                }}
              >
                {about.work.experiences.map((experience, index) => {
                  const nextExperience = about.work.experiences[index + 1];
                  const prevExperience = about.work.experiences[index - 1];
                  
                  // Check for Instituto Superior Técnico teaching positions
                  const isISTTeaching = experience.company === "Instituto Superior Técnico" && 
                    (experience.role.includes("Teacher Assistant") || experience.role.includes("Lab Coordinator"));
                  
                  // Find the other IST teaching position
                  const otherISTTeachingIndex = about.work.experiences.findIndex((exp, idx) => 
                    idx !== index && 
                    exp.company === "Instituto Superior Técnico" && 
                    (exp.role.includes("Teacher Assistant") || exp.role.includes("Lab Coordinator"))
                  );
                  
                  const otherISTTeaching = otherISTTeachingIndex !== -1 ? about.work.experiences[otherISTTeachingIndex] : null;
                  const isISTFirst = isISTTeaching && otherISTTeaching && index < otherISTTeachingIndex;
                  const isISTLast = isISTTeaching && otherISTTeaching && index > otherISTTeachingIndex;
                  
                  // Standard consecutive same-company check
                  const isConnectedToNext = nextExperience && nextExperience.company === experience.company;
                  const isConnectedToPrev = prevExperience && prevExperience.company === experience.company;
                  
                  // Combined check: either consecutive same company OR IST teaching positions
                  const shouldShowConnection = (isConnectedToNext || isConnectedToPrev) || isISTTeaching;
                  // For IST positions: first one extends down, last one extends up
                  // For consecutive: use standard logic
                  const shouldExtendLineDown = isISTFirst ? true : (isConnectedToNext || false);
                  const shouldExtendLineUp = isISTLast ? true : (isConnectedToPrev || false);
                  
                  return (
                    <React.Fragment key={`${experience.company}-${experience.role}-${index}`}>
                      <Flex
                        style={{
                          position: "relative",
                          width: "100%",
                          overflow: "visible",
                        }}
                      >
                        {shouldShowConnection && (
                          <>
                            {/* Vertical line - extends to connect IST positions */}
                            <Flex
                              style={{
                                position: "absolute",
                                left: "-16px",
                                top: shouldExtendLineUp ? (isISTLast ? "-2000px" : "0") : "12px",
                                bottom: shouldExtendLineDown ? (isISTFirst ? "-2000px" : "calc(-1 * var(--static-space-s))") : "0",
                                width: "2px",
                                backgroundColor: "var(--color-neutral-medium)",
                                zIndex: 0,
                                pointerEvents: "none",
                              }}
                            />
                            {/* Circle/bullet point */}
                            <Flex
                              style={{
                                position: "absolute",
                                left: "-20px",
                                top: "12px",
                                width: "10px",
                                height: "10px",
                                borderRadius: "50%",
                                backgroundColor: "var(--color-neutral-strong)",
                                border: "2px solid var(--color-background)",
                                zIndex: 1,
                              }}
                            />
                          </>
                        )}
                        <CollapsibleSection
                          header={
                            <Flex 
                              horizontal="between" 
                              vertical="end" 
                              style={{ width: "100%", paddingRight: "8px" }}
                            >
                              <Column style={{ flex: 1, gap: "4px" }}>
                                <Text id={experience.role} variant="heading-strong-l" onBackground="neutral-strong">
                                  {experience.role}
                                </Text>
                                <Text 
                                  variant="body-default-s" 
                                  onBackground="brand-weak" 
                                  style={{ marginBottom: "8px" }}
                                >
                                  {experience.company}
                                </Text>
                                <Text variant="body-default-xs" onBackground="neutral-weak">
                                  {experience.location}
                                </Text>
                              </Column>
                              <Column style={{ alignItems: "flex-end", gap: "4px" }}>
                                <Text variant="heading-default-xs" onBackground="neutral-weak">
                                  {experience.timeframe}
                                </Text>
                              </Column>
                            </Flex>
                          }
                        >
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
                              {(experience.images as Array<{ width?: number; height?: number; alt?: string; src?: string }>).map((image, index) => (
                                <Flex
                                  key={index}
                                  style={{
                                    border: "1px solid var(--color-neutral-medium)",
                                    borderRadius: "var(--static-space-m)",
                                    minWidth: `${image.width ?? 0}rem`,
                                    height: `${image.height ?? 0}rem`,
                                  }}
                                >
                                  <Media
                                    enlarge
                                    style={{
                                      borderRadius: "var(--static-space-m)",
                                    }}
                                    sizes={image.width?.toString() ?? "100"}
                                    alt={image.alt ?? ""}
                                    src={image.src ?? ""}
                                  />
                                </Flex>
                              ))}
                            </Flex>
                          )}
                        </CollapsibleSection>
                      </Flex>
                    </React.Fragment>
                  );
                })}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading 
                as="h2" 
                id={about.studies.title} 
                variant="display-strong-s" 
                style={{ marginTop: "20px", marginBottom: "12px", scrollMarginTop: "140px" }}
              >
                {about.studies.title}
              </Heading>
              <Column 
                style={{
                  gap: "var(--static-space-s)",
                  marginBottom: "20px",
                  width: "100%",
                }}
              >
                {about.studies.institutions.map((institution, index) => (
                  <CollapsibleSection
                    key={`${institution.name}-${index}`}
                    header={
                      <Flex 
                        horizontal="between" 
                        vertical="end" 
                        style={{ width: "100%", paddingRight: "8px" }}
                      >
                        <Column style={{ flex: 1, gap: "6px" }}>
                          <Text id={institution.name} variant="heading-strong-l" onBackground="neutral-strong">
                            {institution.name}
                          </Text>
                          <Text variant="body-default-s" onBackground="brand-weak">
                            {institution.degree}
                          </Text>
                          <Text variant="body-default-xs" onBackground="neutral-weak">
                            {institution.location}
                          </Text>
                        </Column>
                        <Column style={{ alignItems: "flex-end", gap: "4px" }}>
                          <Text variant="heading-default-xs" onBackground="neutral-weak">
                            {institution.timeframe}
                          </Text>
                          <Text variant="body-default-xs" onBackground="neutral-weak">
                            {institution.gpa}
                          </Text>
                        </Column>
                      </Flex>
                    }
                  >
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </CollapsibleSection>
                ))}
              </Column>
            </>
          )}

          {/* Publications Section */}
          {about.publications.display && (
            <>
              <Heading
                as="h2"
                id={about.publications.title}
                variant="display-strong-s"
                style={{ marginTop: "20px", marginBottom: "12px", scrollMarginTop: "140px" }}
              >
                {about.publications.title}
              </Heading>
              <Column style={{ gap: "12px", marginBottom: "20px" }}>
                {about.publications.papers.map((paper, index) => (
                  <CollapsibleSection
                    key={index}
                    header={
                      <Flex
                        horizontal="between"
                        vertical="end"
                        style={{ width: "100%", paddingRight: "8px" }}
                      >
                        <Column style={{ flex: 1, gap: "6px" }}>
                          <Heading variant="heading-strong-l" onBackground="neutral-strong">
                            <SmartLink
                              href={paper.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ textDecoration: "none", color: "inherit" }}
                            >
                              {paper.title}
                            </SmartLink>
                          </Heading>
                          <Text variant="body-default-s" onBackground="brand-weak">
                            {paper.authors}
                          </Text>
                          <Text variant="body-default-xs" onBackground="neutral-weak">
                            {paper.venue} • {paper.date}
                          </Text>
                        </Column>
                        <Column style={{ alignItems: "flex-end", gap: "6px" }}>
                          <Tag variant="brand" size="s">
                            {paper.category}
                          </Tag>
                          <Text variant="body-default-xs" onBackground="neutral-weak">
                            {paper.type}
                          </Text>
                        </Column>
                      </Flex>
                    }
                  >
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {paper.description}
                    </Text>
                    {paper.highlights && (
                      <Text variant="body-default-s" onBackground="neutral-weak" style={{ fontStyle: "italic" }}>
                        Key highlights: {paper.highlights}
                      </Text>
                    )}
                  </CollapsibleSection>
                ))}
              </Column>
            </>
          )}

          {/* Extracurricular Section */}
          {about.extracurricular.display && (
            <>
              <Heading
                as="h2"
                id={about.extracurricular.title}
                variant="display-strong-s"
                style={{ marginTop: "20px", marginBottom: "12px", scrollMarginTop: "140px" }}
              >
                {about.extracurricular.title}
              </Heading>
              <Column style={{ gap: "12px", marginBottom: "20px" }}>
                {about.extracurricular.activities.length > 0 ? (
                  about.extracurricular.activities.map((activity, index) => (
                    <CollapsibleSection
                      key={index}
                      header={
                        <Flex
                          horizontal="between"
                          vertical="end"
                          style={{ width: "100%", paddingRight: "8px" }}
                        >
                          <Column style={{ flex: 1, gap: "6px" }}>
                            <Text variant="heading-strong-l" onBackground="neutral-strong">
                              {activity.title}
                            </Text>
                            {activity.organisation && (
                              <Text variant="body-default-s" onBackground="brand-weak">
                                {activity.organisation}
                              </Text>
                            )}
                            {activity.location && (
                              <Text variant="body-default-xs" onBackground="neutral-weak">
                                {activity.location}
                              </Text>
                            )}
                          </Column>
                          {activity.timeframe && (
                            <Column style={{ alignItems: "flex-end", gap: "6px" }}>
                              <Text variant="heading-default-xs" onBackground="neutral-weak">
                                {activity.timeframe}
                              </Text>
                              {activity.category && (
                                <Tag size="s" background="brand-alpha-weak" onBackground="brand-weak">
                                  {activity.category}
                                </Tag>
                              )}
                            </Column>
                          )}
                        </Flex>
                      }
                    >
                      {activity.description && (
                        <Text variant="body-default-m" onBackground="neutral-weak">
                          {activity.description}
                        </Text>
                      )}
                    </CollapsibleSection>
                  ))
                ) : (
                  <Text variant="body-default-m" onBackground="neutral-weak" style={{ fontStyle: "italic" }}>
                    No extracurricular activities listed yet.
                  </Text>
                )}
              </Column>
            </>
          )}

          {/* Key Projects Section */}
          {about.keyProjects.display && (
            <>
              <Heading
                as="h2"
                id={about.keyProjects.title}
                variant="display-strong-s"
                style={{ marginTop: "20px", marginBottom: "12px", scrollMarginTop: "140px" }}
              >
                {about.keyProjects.title}
              </Heading>
              <Column style={{ gap: "12px", marginBottom: "20px" }}>
                {about.keyProjects.projects.length > 0 ? (
                  about.keyProjects.projects.map((project, index) => (
                    <CollapsibleSection
                      key={index}
                      header={
                        <Flex
                          horizontal="between"
                          vertical="end"
                          style={{ width: "100%", paddingRight: "8px" }}
                        >
                          <Column style={{ flex: 1, gap: "6px" }}>
                            <Heading variant="heading-strong-l" onBackground="neutral-strong">
                              {project.link ? (
                                <SmartLink
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{ textDecoration: "none", color: "inherit" }}
                                >
                                  {project.title}
                                </SmartLink>
                              ) : (
                                project.title
                              )}
                            </Heading>
                            {project.technologies && (
                              <Text variant="body-default-s" onBackground="brand-weak">
                                {project.technologies}
                              </Text>
                            )}
                            {project.timeframe && (
                              <Text variant="body-default-xs" onBackground="neutral-weak">
                                {project.timeframe}
                              </Text>
                            )}
                          </Column>
                          {project.category && (
                            <Column style={{ alignItems: "flex-end", gap: "6px" }}>
                              <Tag variant="brand" size="s">
                                {project.category}
                              </Tag>
                            </Column>
                          )}
                        </Flex>
                      }
                    >
                      {project.description && (
                        <Text variant="body-default-m" onBackground="neutral-weak">
                          {project.description}
                        </Text>
                      )}
                      {project.highlights && (
                        <Text variant="body-default-s" onBackground="neutral-weak" style={{ fontStyle: "italic", marginTop: "8px" }}>
                          Key highlights: {project.highlights}
                        </Text>
                      )}
                      {project.github && (
                        <Text variant="body-default-s" onBackground="neutral-weak" style={{ marginTop: "8px" }}>
                          <SmartLink
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none" }}
                          >
                            View on GitHub →
                          </SmartLink>
                        </Text>
                      )}
                    </CollapsibleSection>
                  ))
                ) : (
                  <Text variant="body-default-m" onBackground="neutral-weak" style={{ fontStyle: "italic" }}>
                    No key projects listed yet.
                  </Text>
                )}
              </Column>
            </>
          )}

          {about.awards.display && (
            <>
              <Heading
                as="h2"
                id={about.awards.title}
                variant="display-strong-s"
                style={{ marginTop: "20px", marginBottom: "12px", scrollMarginTop: "140px" }}
              >
                {about.awards.title}
              </Heading>
              <Column 
                style={{ gap: "var(--static-space-s)", marginBottom: "20px", width: "100%" }}
              >
                {about.awards.accomplishments.map((award, index) => (
                  <CollapsibleSection
                    key={`${award.title}-${index}`}
                    header={
                      <Flex 
                        horizontal="between" 
                        vertical="end" 
                        style={{ width: "100%", paddingRight: "8px" }}
                      >
                        <Column style={{ flex: 1, gap: "6px" }}>
                          <Text id={award.title} variant="heading-strong-l" onBackground="neutral-strong">
                            {award.title}
                          </Text>
                          <Text variant="body-default-s" onBackground="brand-weak">
                            {award.issuer}
                          </Text>
                        </Column>
                        <Column style={{ alignItems: "flex-end", gap: "6px" }}>
                          {award.category && (
                            <Tag size="s" background="brand-alpha-weak" onBackground="brand-weak">
                              {award.category}
                            </Tag>
                          )}
                          <Text variant="heading-default-xs" onBackground="neutral-weak">
                            {award.year}
                          </Text>
                        </Column>
                      </Flex>
                    }
                  >
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {award.description}
                    </Text>
                    {award.associated_with && (
                      <Text variant="body-default-s" onBackground="neutral-weak" style={{ fontStyle: "italic" }}>
                        Associated with: {award.associated_with}
                      </Text>
                    )}
                  </CollapsibleSection>
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
                style={{ marginTop: "20px", marginBottom: "12px", scrollMarginTop: "140px" }}
              >
                {about.certifications.title}
              </Heading>
              <Column 
                style={{ gap: "var(--static-space-s)", marginBottom: "20px", width: "100%" }}
              >
                {about.certifications.accomplishments.map((certification, index) => (
                  <CollapsibleSection
                    key={`${certification.title}-${index}`}
                    header={
                      <Flex 
                        horizontal="between" 
                        vertical="end" 
                        style={{ width: "100%", paddingRight: "8px" }}
                      >
                        <Column style={{ flex: 1, gap: "6px" }}>
                          <Text id={certification.title} variant="heading-strong-l" onBackground="neutral-strong">
                            {certification.title}
                          </Text>
                          <Text variant="body-default-s" onBackground="brand-weak">
                            {certification.issuer}
                          </Text>
                        </Column>
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
                    }
                  >
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {certification.description}
                    </Text>
                    {(certification.associated_with || certification.credential_id) && (
                      <Text variant="body-default-s" onBackground="neutral-weak" style={{ fontStyle: "italic" }}>
                        {certification.associated_with && `Associated with: ${certification.associated_with}`}
                        {certification.associated_with && certification.credential_id && ` • `}
                        {certification.credential_id && `Credential ID: ${certification.credential_id}`}
                      </Text>
                    )}
                  </CollapsibleSection>
                ))}
              </Column>
            </>
          )}

          {/* Values & Principles Section */}
          {about.values.display && (
            <>
              <Heading
                as="h2"
                id={about.values.title}
                variant="display-strong-s"
                style={{ marginTop: "20px", marginBottom: "12px", scrollMarginTop: "140px" }}
              >
                {about.values.title}
              </Heading>
              <Text
                variant="body-default-m"
                onBackground="neutral-weak"
                style={{ marginBottom: "12px", textAlign: "justify" }}
              >
                {about.values.description}
              </Text>
            </>
          )}

          {/* Hobbies & Passions Section */}
          {about.hobbies.display && (
            <>
              <Heading
                as="h2"
                id={about.hobbies.title}
                variant="display-strong-s"
                style={{ marginTop: "20px", marginBottom: "12px", scrollMarginTop: "140px" }}
              >
                {about.hobbies.title}
              </Heading>
              <Text
                variant="body-default-m"
                onBackground="neutral-weak"
                style={{ marginBottom: "12px" }}
              >
                {about.hobbies.description}
              </Text>
              <Column style={{ gap: "12px", marginBottom: "20px" }}>
                {about.hobbies.categories.map((category, index) => (
                  <CollapsibleSection
                    key={index}
                    header={
                      <Heading variant="heading-strong-m" onBackground="neutral-strong">
                        {category.title}
                      </Heading>
                    }
                  >
                    <Flex
                      direction="row"
                      style={{ 
                        gap: "12px",
                        flexWrap: "wrap"
                      }}
                    >
                      {category.skills.map((skill, skillIndex) => (
                        <Tag 
                          key={skillIndex}
                          size="s" 
                          background="brand-alpha-weak" 
                          onBackground="brand-weak"
                        >
                          {skill}
                        </Tag>
                      ))}
                    </Flex>
                  </CollapsibleSection>
                ))}
              </Column>
            </>
          )}

      </Column>
    </Column>
  );
}
