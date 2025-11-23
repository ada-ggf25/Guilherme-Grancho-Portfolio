import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
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
import { PresentIndicator } from "@/components/PresentIndicator";
import { isPresent } from "@/utils/timeframeUtils";
import React from "react";

// Type definitions for optional properties
type PaperWithHighlights = typeof about.publications.papers[number] & { highlights?: string };
type ProjectWithHighlights = typeof about.keyProjects.projects[number] & { highlights?: string };
type CertificationWithCredential = typeof about.certifications.accomplishments[number] & { credential_id?: string };

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
    { id: about.certifications.title, label: "Certifications" },
    { id: about.podcasts.title, label: "Podcasts" },
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
                                <Text 
                                  id={experience.company === "Independent Research" && experience.role === "Quantitative Researcher" ? "Quantitative-Researcher-Independent" : experience.company === "Universidade Federal de Ouro Preto" && experience.role === "Machine Learning Researcher" ? "ML-Researcher-UFOP" : experience.company === "Brazilian Center for Research in Physics" && experience.role === "Artificial Intelligence Researcher" ? "AI-Researcher-CBPF" : experience.company === "Eco AI.ly" && experience.role === "Machine Learning Engineer" ? "ML-Engineer-EcoAI" : experience.company === "Ernst & Young" && experience.role === "Artificial Intelligence & Data Engineer" ? "AI-Data-Engineer-EY" : experience.company === "KU Leuven" && experience.role === "Virtual Reality Development Intern" ? "VR-Intern-KULeuven" : experience.company === "Instituto Superior Técnico" && experience.role === "Teacher Assistant & Lab Coordinator" ? "Teacher-Assistant-Lab-Coordinator-IST" : experience.role} 
                                  variant="heading-strong-l" 
                                  onBackground="neutral-strong"
                                  style={(experience.company === "Independent Research" && experience.role === "Quantitative Researcher") || (experience.company === "Universidade Federal de Ouro Preto" && experience.role === "Machine Learning Researcher") || (experience.company === "Brazilian Center for Research in Physics" && experience.role === "Artificial Intelligence Researcher") || (experience.company === "Eco AI.ly" && experience.role === "Machine Learning Engineer") || (experience.company === "Ernst & Young" && experience.role === "Artificial Intelligence & Data Engineer") || (experience.company === "KU Leuven" && experience.role === "Virtual Reality Development Intern") || (experience.company === "Instituto Superior Técnico" && experience.role === "Teacher Assistant & Lab Coordinator") ? { scrollMarginTop: "140px" } : {}}
                                >
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
                                <Flex style={{ alignItems: "center", gap: "4px" }}>
                                  <Text variant="heading-default-xs" onBackground="neutral-weak">
                                    {experience.timeframe}
                                  </Text>
                                  {isPresent(experience.timeframe) && <PresentIndicator />}
                                </Flex>
                              </Column>
                            </Flex>
                          }
                        >
                          <Column 
                            as="ul" 
                            style={{ gap: "20px", marginTop: "16px" }}
                          >
                            {experience.achievements.map((achievement: React.ReactElement, index: number) => {
                              // Check if this is the Prometheus-related achievement
                              // It's the first achievement (index 0) in the "Independent Research" experience
                              const isPrometheusAchievement = experience.company === "Independent Research" && index === 0;
                              // Check if this is the FTH paper-related achievement
                              // It's the second achievement (index 1) in the "Independent Research" experience
                              const isFTHPaperAchievement = experience.company === "Independent Research" && index === 1;
                              // Check if this is the GAIA-related achievement
                              // It's the first achievement (index 0) in the "Eco AI.ly" experience
                              const isGAIAAchievement = experience.company === "Eco AI.ly" && index === 0;
                              // Check if this is the Athens Mobility Grant-related achievement
                              // It's the first achievement (index 0) in the "KU Leuven" experience
                              const isAthensGrantAchievement = experience.company === "KU Leuven" && index === 0;
                              // Check if this is the ENIAC paper-related achievement
                              // It's the first achievement (index 0) in the "Universidade Federal de Ouro Preto" experience
                              const isENIACPaperAchievement = experience.company === "Universidade Federal de Ouro Preto" && index === 0;
                              // Check if this is the Teaching Excellence award-related achievement
                              // It's the second achievement (index 1) in the "Instituto Superior Técnico" experience with role "Teacher Assistant & Lab Coordinator"
                              const isTeachingExcellenceAchievement = experience.company === "Instituto Superior Técnico" && 
                                experience.role === "Teacher Assistant & Lab Coordinator" && 
                                index === 1;
                              // Check if this is the Ocean Floor paper-related achievement
                              // It's the first achievement (index 0) in the "Brazilian Center for Research in Physics" experience
                              const isOceanFloorPaperAchievement = experience.company === "Brazilian Center for Research in Physics" && index === 0;
                              // Check if this is the GraphRAG project-related achievement
                              // It's the first achievement (index 0) in the "Ernst & Young" experience
                              const isGraphRAGProjectAchievement = experience.company === "Ernst & Young" && index === 0;
                              
                              return (
                                <Text
                                  as="li"
                                  variant="body-default-m"
                                  key={`${experience.company}-${index}`}
                                  style={{ textAlign: "justify" }}
                                >
                                  {achievement}
                                  {isPrometheusAchievement && (
                                    <>{" "}
                                      <SmartLink
                                        href="#Prometheus"
                                        style={{ 
                                          color: "#0066cc",
                                          textDecoration: "underline"
                                        }}
                                      >
                                        View Prometheus Project
                                      </SmartLink>
                                    </>
                                  )}
                                  {isFTHPaperAchievement && (
                                    <>
                                      {" "}
                                      <SmartLink
                                        href="#FTH-Paper"
                                        style={{ 
                                          color: "#0066cc",
                                          textDecoration: "underline"
                                        }}
                                      >
                                        View Publication
                                      </SmartLink>
                                      {" "}
                                      <SmartLink
                                        href="#SSRN-Top-Paper-Award"
                                        style={{ 
                                          color: "#0066cc",
                                          textDecoration: "underline"
                                        }}
                                      >
                                        View Award
                                      </SmartLink>
                                    </>
                                  )}
                                  {isGAIAAchievement && (
                                    <>{" "}
                                      <SmartLink
                                        href="#GAIA"
                                        style={{ 
                                          color: "#0066cc",
                                          textDecoration: "underline"
                                        }}
                                      >
                                        View GAIA Project
                                      </SmartLink>
                                    </>
                                  )}
                                  {isAthensGrantAchievement && (
                                    <>{" "}
                                      <SmartLink
                                        href="#Athens-Mobility-Grant"
                                        style={{ 
                                          color: "#0066cc",
                                          textDecoration: "underline"
                                        }}
                                      >
                                        View Award
                                      </SmartLink>
                                    </>
                                  )}
                                  {isENIACPaperAchievement && (
                                    <>{" "}
                                      <SmartLink
                                        href="#ENIAC-Paper"
                                        style={{ 
                                          color: "#0066cc",
                                          textDecoration: "underline"
                                        }}
                                      >
                                        View Publication
                                      </SmartLink>
                                    </>
                                  )}
                                  {isTeachingExcellenceAchievement && (
                                    <>{" "}
                                      <SmartLink
                                        href="#Teaching-Excellence-Award"
                                        style={{ 
                                          color: "#0066cc",
                                          textDecoration: "underline"
                                        }}
                                      >
                                        View Award
                                      </SmartLink>
                                    </>
                                  )}
                                  {isOceanFloorPaperAchievement && (
                                    <>
                                      {" "}
                                      <SmartLink
                                        href="#Ocean-Floor-Paper"
                                        style={{ 
                                          color: "#0066cc",
                                          textDecoration: "underline"
                                        }}
                                      >
                                        View Publication
                                      </SmartLink>
                                      {" "}
                                      <SmartLink
                                        href="#Brazilian-Center-Physics-Grant"
                                        style={{ 
                                          color: "#0066cc",
                                          textDecoration: "underline"
                                        }}
                                      >
                                        View Related Award
                                      </SmartLink>
                                    </>
                                  )}
                                  {isGraphRAGProjectAchievement && (
                                    <>
                                      {" "}
                                      <SmartLink
                                        href="#GraphRAG-Project"
                                        style={{ 
                                          color: "#0066cc",
                                          textDecoration: "underline"
                                        }}
                                      >
                                        View GraphRAG Project
                                      </SmartLink>
                                      {" "}
                                      <SmartLink
                                        href="#Compliance-Protocols-EY"
                                        style={{ 
                                          color: "#0066cc",
                                          textDecoration: "underline"
                                        }}
                                      >
                                        View Related Certification
                                      </SmartLink>
                                    </>
                                  )}
                                </Text>
                              );
                            })}
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
                          <Flex style={{ alignItems: "center", gap: "4px" }}>
                            <Text variant="heading-default-xs" onBackground="neutral-weak">
                              {institution.timeframe}
                            </Text>
                            {isPresent(institution.timeframe) && <PresentIndicator />}
                          </Flex>
                          <Text variant="body-default-xs" onBackground="neutral-weak">
                            {institution.gpa}
                          </Text>
                        </Column>
                      </Flex>
                    }
                  >
                    <Text variant="body-default-m" onBackground="neutral-weak" style={{ textAlign: "justify" }}>
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
                          <Flex style={{ gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
                            <Heading 
                              id={paper.title === "The Financial Torque Hypothesis: Predicting Short-Term Stock Price Movements Using LSTM Neural Networks" ? "FTH-Paper" : paper.title === "Enhancing Multi-Objective Machine Learning with an Optimized Lexicographic Approach: Determining the Tolerance Threshold" ? "ENIAC-Paper" : paper.title === "Mapping the Layers of the Ocean Floor with a Convolutional Neural Network" ? "Ocean-Floor-Paper" : undefined}
                              variant="heading-strong-l" 
                              onBackground="neutral-strong"
                              style={(paper.title === "The Financial Torque Hypothesis: Predicting Short-Term Stock Price Movements Using LSTM Neural Networks" || paper.title === "Enhancing Multi-Objective Machine Learning with an Optimized Lexicographic Approach: Determining the Tolerance Threshold" || paper.title === "Mapping the Layers of the Ocean Floor with a Convolutional Neural Network") ? { scrollMarginTop: "140px" } : {}}
                            >
                              <em>{paper.title}</em>
                            </Heading>
                            {paper.link && (
                              <SmartLink
                                href={paper.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none" }}
                              >
                                <Tag size="s" background="brand-alpha-weak" onBackground="brand-weak">
                                  View Paper
                                </Tag>
                              </SmartLink>
                            )}
                          </Flex>
                          <Text variant="body-default-s" onBackground="brand-weak">
                            {paper.authors}
                          </Text>
                          <Text variant="body-default-xs" onBackground="neutral-weak">
                            {paper.venue}
                          </Text>
                        </Column>
                        <Column style={{ alignItems: "flex-end", gap: "6px" }}>
                          {paper.date && (
                            <Text variant="heading-default-xs" onBackground="neutral-weak">
                              {paper.date}
                            </Text>
                          )}
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
                    <Text variant="body-default-m" onBackground="neutral-weak" style={{ textAlign: "justify" }}>
                      {paper.description}
                      {paper.title === "The Financial Torque Hypothesis: Predicting Short-Term Stock Price Movements Using LSTM Neural Networks" && (
                        <>
                          {" "}
                          <SmartLink
                            href="#SSRN-Top-Paper-Award"
                            style={{ 
                              color: "#0066cc",
                              textDecoration: "underline"
                            }}
                          >
                            View Related Award
                          </SmartLink>
                          {" "}
                          <SmartLink
                            href="#Quantitative-Researcher-Independent"
                            style={{ 
                              color: "#0066cc",
                              textDecoration: "underline"
                            }}
                          >
                            View Related Experience
                          </SmartLink>
                        </>
                      )}
                      {paper.title === "Enhancing Multi-Objective Machine Learning with an Optimized Lexicographic Approach: Determining the Tolerance Threshold" && (
                        <>{" "}
                          <SmartLink
                            href="#ML-Researcher-UFOP"
                            style={{ 
                              color: "#0066cc",
                              textDecoration: "underline"
                            }}
                          >
                            View Related Experience
                          </SmartLink>
                        </>
                      )}
                      {paper.title === "Mapping the Layers of the Ocean Floor with a Convolutional Neural Network" && (
                        <>{" "}
                          <SmartLink
                            href="#AI-Researcher-CBPF"
                            style={{ 
                              color: "#0066cc",
                              textDecoration: "underline"
                            }}
                          >
                            View Related Experience
                          </SmartLink>
                        </>
                      )}
                    </Text>
                    {((paper as PaperWithHighlights).highlights) && (
                      <Text variant="body-default-s" onBackground="neutral-weak" style={{ fontStyle: "italic", textAlign: "justify" }}>
                        Key highlights: {(paper as PaperWithHighlights).highlights}
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
                            {activity.organization && (
                              <Text variant="body-default-s" onBackground="brand-weak">
                                {activity.organization}
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
                              <Flex style={{ alignItems: "center", gap: "4px" }}>
                                <Text variant="heading-default-xs" onBackground="neutral-weak">
                                  {activity.timeframe}
                                </Text>
                                {isPresent(activity.timeframe) && <PresentIndicator />}
                              </Flex>
                              {"category" in activity && (activity as { category?: string }).category && (
                                <Tag size="s" background="brand-alpha-weak" onBackground="brand-weak">
                                  {(activity as { category: string }).category}
                                </Tag>
                              )}
                            </Column>
                          )}
                        </Flex>
                      }
                    >
                      {activity.description && (
                        <Text variant="body-default-m" onBackground="neutral-weak" style={{ textAlign: "justify" }}>
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
                            <Flex style={{ gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
                              <Heading 
                                id={project.title === "Prometheus" ? "Prometheus" : project.title === "GAIA" ? "GAIA" : project.title === "GraphRAG Workflow for AI Agents" ? "GraphRAG-Project" : project.title === "LXthon" ? "LXthon-Project" : project.title === "Ernst & Young AI Hackathon" ? "EY-AI-Hackathon-Project" : undefined}
                                variant="heading-strong-l" 
                                onBackground="neutral-strong"
                                style={(project.title === "Prometheus" || project.title === "GAIA" || project.title === "GraphRAG Workflow for AI Agents" || project.title === "LXthon" || project.title === "Ernst & Young AI Hackathon") ? { scrollMarginTop: "140px" } : {}}
                              >
                                {project.title}
                              </Heading>
                              {project.github && (
                                <SmartLink
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{ textDecoration: "none" }}
                                >
                                  <Tag size="s" background="brand-alpha-weak" onBackground="brand-weak">
                                    View on GitHub
                                  </Tag>
                                </SmartLink>
                              )}
                              {project.link && (
                                <SmartLink
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{ textDecoration: "none" }}
                                >
                                  <Tag size="s" background="brand-alpha-weak" onBackground="brand-weak">
                                    {project.category === "Academic Research" ? "View Paper" : "View Website"}
                                  </Tag>
                                </SmartLink>
                              )}
                            </Flex>
                            {project.location && (
                              <Text variant="body-default-s" onBackground="brand-weak" style={{ marginBottom: "8px" }}>
                                {project.location}
                              </Text>
                            )}
                          </Column>
                          <Column style={{ alignItems: "flex-end", gap: "6px" }}>
                            {project.timeframe && (
                              <Flex style={{ alignItems: "center", gap: "4px" }}>
                                <Text variant="heading-default-xs" onBackground="neutral-weak">
                                  {project.timeframe}
                                </Text>
                                {isPresent(project.timeframe) && <PresentIndicator />}
                              </Flex>
                            )}
                            {project.category && (
                              <Tag variant="brand" size="s">
                                {project.category}
                              </Tag>
                            )}
                          </Column>
                        </Flex>
                      }
                    >
                      {project.description && (
                        <Text variant="body-default-m" onBackground="neutral-weak" style={{ textAlign: "justify" }}>
                          {project.description}
                          {project.title === "Prometheus" && (
                            <>
                              {" "}
                              <SmartLink
                                href={`#${about.work.title}`}
                                style={{ 
                                  color: "#0066cc",
                                  textDecoration: "underline"
                                }}
                              >
                                View Related Experience
                              </SmartLink>
                              {" "}
                              <SmartLink
                                href="#SSRN-Top-Paper-Award"
                                style={{ 
                                  color: "#0066cc",
                                  textDecoration: "underline"
                                }}
                              >
                                View Related Award
                              </SmartLink>
                              {" "}
                              <SmartLink
                                href="#FTH-Paper"
                                style={{ 
                                  color: "#0066cc",
                                  textDecoration: "underline"
                                }}
                              >
                                View Publication
                              </SmartLink>
                            </>
                          )}
                          {project.title === "GAIA" && (
                            <>{" "}
                              <SmartLink
                                href="#ML-Engineer-EcoAI"
                                style={{ 
                                  color: "#0066cc",
                                  textDecoration: "underline"
                                }}
                              >
                                View Related Experience
                              </SmartLink>
                            </>
                          )}
                          {project.title === "GraphRAG Workflow for AI Agents" && (
                            <>{" "}
                              <SmartLink
                                href="#AI-Data-Engineer-EY"
                                style={{ 
                                  color: "#0066cc",
                                  textDecoration: "underline"
                                }}
                              >
                                View Related Experience
                              </SmartLink>
                            </>
                          )}
                          {project.title === "LXthon" && (
                            <>{" "}
                              <SmartLink
                                href="#LXthon-Award"
                                style={{ 
                                  color: "#0066cc",
                                  textDecoration: "underline"
                                }}
                              >
                                View Related Award
                              </SmartLink>
                            </>
                          )}
                          {project.title === "Ernst & Young AI Hackathon" && (
                            <>{" "}
                              <SmartLink
                                href="#EY-AI-Challenge-Award"
                                style={{ 
                                  color: "#0066cc",
                                  textDecoration: "underline"
                                }}
                              >
                                View Related Award
                              </SmartLink>
                            </>
                          )}
                        </Text>
                      )}
                      {((project as ProjectWithHighlights).highlights) && (
                        <Text variant="body-default-s" onBackground="neutral-weak" style={{ fontStyle: "italic", marginTop: "8px", textAlign: "justify" }}>
                          Key highlights: {(project as ProjectWithHighlights).highlights}
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
                          <Text 
                            id={award.title === "Athens Mobility Grant" ? "Athens-Mobility-Grant" : award.title === "Diploma of Teaching Excellence" ? "Teaching-Excellence-Award" : award.title === "SSRN Financial Economics Network e Journal Top Paper - 4-day Streak" ? "SSRN-Top-Paper-Award" : award.title === "LXthon Hackathon — 1º Winner" ? "LXthon-Award" : award.title === "EY AI Challenge — Category 1º Place Winner" ? "EY-AI-Challenge-Award" : award.title === "Brazilian Center of Physics Research — Mobility Grant" ? "Brazilian-Center-Physics-Grant" : award.title} 
                            variant="heading-strong-l" 
                            onBackground="neutral-strong"
                            style={(award.title === "Athens Mobility Grant" || award.title === "Diploma of Teaching Excellence" || award.title === "SSRN Financial Economics Network e Journal Top Paper - 4-day Streak" || award.title === "LXthon Hackathon — 1º Winner" || award.title === "EY AI Challenge — Category 1º Place Winner" || award.title === "Brazilian Center of Physics Research — Mobility Grant") ? { scrollMarginTop: "140px" } : {}}
                          >
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
                    <Text variant="body-default-m" onBackground="neutral-weak" style={{ textAlign: "justify" }}>
                      {award.description}
                      {award.title === "LXthon Hackathon — 1º Winner" && (
                        <>{" "}
                          <SmartLink
                            href="#LXthon-Project"
                            style={{ 
                              color: "#0066cc",
                              textDecoration: "underline"
                            }}
                          >
                            View LXthon Project
                          </SmartLink>
                        </>
                      )}
                      {award.title === "EY AI Challenge — Category 1º Place Winner" && (
                        <>{" "}
                          <SmartLink
                            href="#EY-AI-Hackathon-Project"
                            style={{ 
                              color: "#0066cc",
                              textDecoration: "underline"
                            }}
                          >
                            View EY AI Hackathon Project
                          </SmartLink>
                        </>
                      )}
                      {award.title === "SSRN Financial Economics Network e Journal Top Paper - 4-day Streak" && (
                        <>
                          {" "}
                          <SmartLink
                            href="#Prometheus"
                            style={{ 
                              color: "#0066cc",
                              textDecoration: "underline"
                            }}
                          >
                            View Prometheus Project
                          </SmartLink>
                          {" "}
                          <SmartLink
                            href="#FTH-Paper"
                            style={{ 
                              color: "#0066cc",
                              textDecoration: "underline"
                            }}
                          >
                            View Publication
                          </SmartLink>
                          {" "}
                          <SmartLink
                            href="#Quantitative-Researcher-Independent"
                            style={{ 
                              color: "#0066cc",
                              textDecoration: "underline"
                            }}
                          >
                            View Related Experience
                          </SmartLink>
                        </>
                      )}
                      {award.title === "Athens Mobility Grant" && (
                        <>{" "}
                          <SmartLink
                            href="#VR-Intern-KULeuven"
                            style={{ 
                              color: "#0066cc",
                              textDecoration: "underline"
                            }}
                          >
                            View Related Experience
                          </SmartLink>
                        </>
                      )}
                      {award.title === "Diploma of Teaching Excellence" && (
                        <>{" "}
                          <SmartLink
                            href="#Teacher-Assistant-Lab-Coordinator-IST"
                            style={{ 
                              color: "#0066cc",
                              textDecoration: "underline"
                            }}
                          >
                            View Related Experience
                          </SmartLink>
                        </>
                      )}
                      {award.title === "Brazilian Center of Physics Research — Mobility Grant" && (
                        <>
                          {" "}
                          <SmartLink
                            href="#AI-Researcher-CBPF"
                            style={{ 
                              color: "#0066cc",
                              textDecoration: "underline"
                            }}
                          >
                            View Related Experience
                          </SmartLink>
                          {" "}
                          <SmartLink
                            href="#Ocean-Floor-Paper"
                            style={{ 
                              color: "#0066cc",
                              textDecoration: "underline"
                            }}
                          >
                            View Publication
                          </SmartLink>
                        </>
                      )}
                    </Text>
                    {award.associated_with && award.associated_with.trim() && (
                      <Text variant="body-default-s" onBackground="neutral-weak" style={{ fontStyle: "italic", textAlign: "justify" }}>
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
                          <Text 
                            id={certification.title === "Compliance & Protocols for Global Clients" ? "Compliance-Protocols-EY" : certification.title} 
                            variant="heading-strong-l" 
                            onBackground="neutral-strong"
                            style={certification.title === "Compliance & Protocols for Global Clients" ? { scrollMarginTop: "140px" } : {}}
                          >
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
                    <Text variant="body-default-m" onBackground="neutral-weak" style={{ textAlign: "justify" }}>
                      {certification.description}
                      {certification.title === "Compliance & Protocols for Global Clients" && (
                        <>{" "}
                          <SmartLink
                            href="#AI-Data-Engineer-EY"
                            style={{ 
                              color: "#0066cc",
                              textDecoration: "underline"
                            }}
                          >
                            View Related Experience
                          </SmartLink>
                        </>
                      )}
                    </Text>
                    {(certification.associated_with?.trim() || (certification as CertificationWithCredential).credential_id?.trim()) && (
                      <Text variant="body-default-s" onBackground="neutral-weak" style={{ fontStyle: "italic", textAlign: "justify" }}>
                        {certification.associated_with?.trim() && `Associated with: ${certification.associated_with}`}
                        {certification.associated_with?.trim() && (certification as CertificationWithCredential).credential_id?.trim() && ` • `}
                        {(certification as CertificationWithCredential).credential_id?.trim() && `Credential ID: ${(certification as CertificationWithCredential).credential_id}`}
                      </Text>
                    )}
                  </CollapsibleSection>
                ))}
              </Column>
            </>
          )}

          {/* Podcasts Section */}
          {about.podcasts.display && (
            <>
              <Heading
                as="h2"
                id={about.podcasts.title}
                variant="display-strong-s"
                style={{ marginTop: "20px", marginBottom: "12px", scrollMarginTop: "140px" }}
              >
                {about.podcasts.title}
              </Heading>
              <Column style={{ gap: "12px", marginBottom: "20px" }}>
                {about.podcasts.episodes.map((episode, index) => (
                  <CollapsibleSection
                    key={index}
                    header={
                      <Flex
                        horizontal="between"
                        vertical="end"
                        style={{ width: "100%", paddingRight: "8px" }}
                      >
                        <Column style={{ flex: 1, gap: "6px" }}>
                          <Flex style={{ gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
                            <Heading 
                              variant="heading-strong-l" 
                              onBackground="neutral-strong"
                            >
                              <em>{episode.title}</em>
                            </Heading>
                            {episode.link && (
                              <SmartLink
                                href={episode.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none" }}
                              >
                                <Tag size="s" background="brand-alpha-weak" onBackground="brand-weak">
                                  View Podcast
                                </Tag>
                              </SmartLink>
                            )}
                          </Flex>
                          <Text variant="body-default-s" onBackground="brand-weak">
                            {episode.authors}
                          </Text>
                          <Text variant="body-default-xs" onBackground="neutral-weak">
                            {episode.venue}
                          </Text>
                        </Column>
                        <Column style={{ alignItems: "flex-end", gap: "6px" }}>
                          {episode.date && (
                            <Text variant="heading-default-xs" onBackground="neutral-weak">
                              {episode.date}
                            </Text>
                          )}
                          <Tag variant="brand" size="s">
                            {episode.category}
                          </Tag>
                          <Text variant="body-default-xs" onBackground="neutral-weak">
                            {episode.type}
                          </Text>
                        </Column>
                      </Flex>
                    }
                  >
                    <Text variant="body-default-m" onBackground="neutral-weak" style={{ textAlign: "justify" }}>
                      {episode.description}
                    </Text>
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
                {about.hobbies.categories.map((category: { title: string; skills: string[] }, index) => (
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
