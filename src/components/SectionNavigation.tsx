"use client";

import { useEffect } from "react";
import { useNavigation } from "@/contexts/NavigationContext";
import { trackActiveSection } from "@/utils/scrollUtils";

interface SectionNavigationProps {
  sections: Array<{
    id: string;
    label: string;
  }>;
}

export const SectionNavigation: React.FC<SectionNavigationProps> = ({ sections }) => {
  const { setSections, setShowInHeader, setTransitionProgress } = useNavigation();

  // Ensure header always shows navigation for these sections
  useEffect(() => {
    setSections(sections);
    setShowInHeader(true);
    setTransitionProgress(1);

    return () => {
      setShowInHeader(false);
      setTransitionProgress(0);
    };
  }, [sections, setSections, setShowInHeader, setTransitionProgress]);

  // Keep intersection tracking active in header for button highlighting
  useEffect(() => {
    return trackActiveSection(sections, () => {});
  }, [sections]);

  // Render nothing; navigation is rendered in the header
  return null;
};
