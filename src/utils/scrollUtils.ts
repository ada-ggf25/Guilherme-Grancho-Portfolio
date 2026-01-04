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
            entries.forEach((entry) => {
              if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                currentActiveIndex = index;
                callback(index);
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

    // Initial check
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

    // Add scroll listener to handle top case when Intersection Observer might not trigger
    // This ensures the first section is highlighted when at the very top
    const handleScroll = throttle(() => {
      // If at the very top of the page, default to first section (Intro)
      if (window.scrollY < 100) {
        // Check if we're actually in the first section's bounds
        const firstSectionElement = document.getElementById(sections[0]?.id);
        if (firstSectionElement) {
          const rect = firstSectionElement.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + firstSectionElement.offsetHeight;
          
          // If scroll position is within first section bounds, set it as active
          if (window.scrollY >= elementTop - 100 && window.scrollY < elementBottom) {
            callback(0);
          }
        } else if (window.scrollY < 50) {
          // Fallback: if at very top and first section element not found, default to 0
          callback(0);
        }
      }
    }, 50);
    
    const win = window as Window & typeof globalThis;
    win.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observers.forEach((observer) => observer.disconnect());
      win.removeEventListener('scroll', handleScroll);
    };
  }

  // Fallback to scroll event with throttling
  const handleScroll = throttle(() => {
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

  const win = window as Window & typeof globalThis;
  win.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
  
  return () => win.removeEventListener('scroll', handleScroll);
}

