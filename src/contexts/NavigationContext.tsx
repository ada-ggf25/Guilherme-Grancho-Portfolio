"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface NavigationSection {
  id: string;
  label: string;
}

interface NavigationContextType {
  sections: NavigationSection[];
  setSections: (sections: NavigationSection[]) => void;
  isScrolled: boolean;
  setIsScrolled: (isScrolled: boolean) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sections, setSections] = useState<NavigationSection[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <NavigationContext.Provider value={{ sections, setSections, isScrolled, setIsScrolled }}>
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

