/**
 * Utility function to scroll to a section with header offset
 * @param sectionId - The ID of the section to scroll to
 * @param headerOffset - The offset in pixels to account for fixed header (default: 100)
 */
export function scrollToSection(sectionId: string, headerOffset = 100): void {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
    
    // If the element is at or near the top of the page, scroll to 0
    // This handles the Intro section which should be at the very top
    if (elementTop < 200) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    
    const offsetPosition = elementTop - headerOffset;

    window.scrollTo({
      top: Math.max(0, offsetPosition), // Ensure we don't scroll to negative position
      behavior: 'smooth'
    });
  }
}

/**
 * Throttle function to limit how often a function can be called
 */
function throttle<T extends (...args: any[]) => void>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function (this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Hook-like utility to detect active section based on scroll position
 * Uses Intersection Observer API for better performance
 * @param sections - Array of section IDs to track
 * @param callback - Callback function called with the active section index
 * @returns Cleanup function to remove event listener
 */
export function trackActiveSection(
  sections: Array<{ id: string }>,
  callback: (index: number) => void
): () => void {
  if (typeof window === 'undefined') {
    return () => {};
  }

  // Use Intersection Observer for better performance
  if ('IntersectionObserver' in window) {
    const observers: IntersectionObserver[] = [];
    let currentActiveIndex = 0;

    sections.forEach((section, index) => {
      const element = document.getElementById(section.id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            // If at the very top of the page, always prioritize first section (Intro)
            // This check must happen before processing entries to prevent wrong highlighting
            if (window.scrollY < 100) {
              const firstSectionElement = document.getElementById(sections[0]?.id);
              if (firstSectionElement) {
                const rect = firstSectionElement.getBoundingClientRect();
                const elementTop = rect.top + window.scrollY;
                const elementBottom = elementTop + firstSectionElement.offsetHeight;
                
                // If scroll position is within first section bounds, set it as active and return
                if (window.scrollY >= elementTop - 100 && window.scrollY < elementBottom) {
                  callback(0);
                  return;
                }
              }
              // Fallback: if at very top (scrollY < 50), always default to first section
              if (window.scrollY < 50) {
                callback(0);
                return;
              }
            }
            
            entries.forEach((entry) => {
              if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                // Double-check we're not at the top before setting non-first section as active
                if (index === 0 || window.scrollY >= 100) {
                  currentActiveIndex = index;
                  callback(index);
                }
              }
            });
          },
          {
            rootMargin: '-20% 0px -60% 0px',
            threshold: [0, 0.3, 0.5, 1],
          }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    // Immediate synchronous check for initial state (especially when at top)
    const immediateCheck = () => {
      if (window.scrollY < 100) {
        const firstSectionElement = document.getElementById(sections[0]?.id);
        if (firstSectionElement) {
          const rect = firstSectionElement.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + firstSectionElement.offsetHeight;
          
          if (window.scrollY >= elementTop - 100 && window.scrollY < elementBottom) {
            callback(0);
            return;
          }
        }
        if (window.scrollY < 50) {
          callback(0);
          return;
        }
      }
    };
    immediateCheck();

    // Initial check (throttled for performance)
    const initialCheck = throttle(() => {
      // Check if we're at the very top - prioritize first section
      if (window.scrollY < 100) {
        const firstSectionElement = document.getElementById(sections[0]?.id);
        if (firstSectionElement) {
          const rect = firstSectionElement.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + firstSectionElement.offsetHeight;
          
          // If scroll position is within first section bounds, set it as active
          if (window.scrollY >= elementTop - 100 && window.scrollY < elementBottom) {
            callback(0);
            return;
          }
        }
        // If at very top (scrollY < 50) and first section check didn't work, default to 0
        if (window.scrollY < 50) {
          callback(0);
          return;
        }
      }
      
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let foundActive = false;
      
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            callback(index);
            foundActive = true;
          }
        }
      });
      
      // If no section found and we're near the top, default to first section
      if (!foundActive && window.scrollY < 200) {
        callback(0);
      }
    }, 100);
    initialCheck();

    // Add scroll listener using requestAnimationFrame for smooth updates during fast scrolling
    // This ensures sections are correctly highlighted even during rapid scrolling
    let rafId: number | null = null;
    
    const handleScroll = () => {
      // Cancel any pending animation frame
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      
      rafId = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        
        // If at the very top of the page, default to first section (Intro)
        if (currentScrollY < 100) {
          const firstSectionElement = document.getElementById(sections[0]?.id);
          if (firstSectionElement) {
            const rect = firstSectionElement.getBoundingClientRect();
            const elementTop = rect.top + currentScrollY;
            const elementBottom = elementTop + firstSectionElement.offsetHeight;
            
            // If scroll position is within first section bounds, set it as active
            if (currentScrollY >= elementTop - 100 && currentScrollY < elementBottom) {
              callback(0);
              rafId = null;
              return;
            }
          }
          if (currentScrollY < 50) {
            callback(0);
            rafId = null;
            return;
          }
        }
        
        // Check all sections to find which one is currently active
        // This is important during fast scrolling when Intersection Observer might lag
        const scrollPosition = currentScrollY + window.innerHeight / 3;
        let foundActive = false;
        
        // Check sections in reverse order (bottom to top) to find the most relevant one
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          const element = document.getElementById(section.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + currentScrollY;
            const elementBottom = elementTop + rect.height;
            
            // Check if scroll position is within this section's bounds
            if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
              // Special handling for first section at top
              if (i === 0 && currentScrollY < 100) {
                callback(0);
              } else {
                callback(i);
              }
              foundActive = true;
              break;
            }
          }
        }
        
        // If no section found and we're near the top, default to first section
        if (!foundActive && currentScrollY < 200) {
          callback(0);
        }
        
        rafId = null;
      });
    };
    
    const win = window as Window & typeof globalThis;
    win.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observers.forEach((observer) => observer.disconnect());
      win.removeEventListener('scroll', handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }

  // Fallback to scroll event using requestAnimationFrame for smooth updates
  let fallbackRafId: number | null = null;
  
  const handleScroll = () => {
    // Cancel any pending animation frame
    if (fallbackRafId !== null) {
      cancelAnimationFrame(fallbackRafId);
    }
    
    fallbackRafId = requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      
      // Check if we're at the very top - prioritize first section
      if (currentScrollY < 100) {
        const firstSectionElement = document.getElementById(sections[0]?.id);
        if (firstSectionElement) {
          const rect = firstSectionElement.getBoundingClientRect();
          const elementTop = rect.top + currentScrollY;
          const elementBottom = elementTop + firstSectionElement.offsetHeight;
          
          // If scroll position is within first section bounds, set it as active
          if (currentScrollY >= elementTop - 100 && currentScrollY < elementBottom) {
            callback(0);
            fallbackRafId = null;
            return;
          }
        }
        // If at very top (scrollY < 50) and first section check didn't work, default to 0
        if (currentScrollY < 50) {
          callback(0);
          fallbackRafId = null;
          return;
        }
      }
      
      const scrollPosition = currentScrollY + window.innerHeight / 3;
      let foundActive = false;
      
      // Check sections in reverse order (bottom to top) to find the most relevant one
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + currentScrollY;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            // Special handling for first section at top
            if (i === 0 && currentScrollY < 100) {
              callback(0);
            } else {
              callback(i);
            }
            foundActive = true;
            break;
          }
        }
      }
      
      // If no section found and we're near the top, default to first section
      if (!foundActive && currentScrollY < 200) {
        callback(0);
      }
      
      fallbackRafId = null;
    });
  };

  const win = window as Window & typeof globalThis;
  win.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
  
  return () => {
    win.removeEventListener('scroll', handleScroll);
    if (fallbackRafId !== null) {
      cancelAnimationFrame(fallbackRafId);
    }
  };
}

