"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface NavigationSection {
  id: string;
  label: string;
}

interface NavigationContextType {
  sections: NavigationSection[];
  setSections: (sections: NavigationSection[]) => void;
  showInHeader: boolean;
  setShowInHeader: (show: boolean) => void;
  transitionProgress: number;
  setTransitionProgress: (progress: number) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sections, setSections] = useState<NavigationSection[]>([]);
  const [showInHeader, setShowInHeader] = useState(false);
  const [transitionProgress, setTransitionProgress] = useState(0);

  return (
    <NavigationContext.Provider value={{ 
      sections, 
      setSections, 
      showInHeader, 
      setShowInHeader,
      transitionProgress,
      setTransitionProgress
    }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};

