/**
 * Utility function to scroll to a section with header offset
 * @param sectionId - The ID of the section to scroll to
 * @param headerOffset - The offset in pixels to account for fixed header (default: 100)
 */
export function scrollToSection(sectionId: string, headerOffset = 100): void {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
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
  // Use Intersection Observer for better performance
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
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
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            callback(index);
          }
        }
      });
    }, 100);
    initialCheck();

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }

  // Fallback to scroll event with throttling
  const handleScroll = throttle(() => {
    const scrollPosition = window.scrollY + window.innerHeight / 3;
    
    sections.forEach((section, index) => {
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = elementTop + rect.height;
        
        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          callback(index);
        }
      }
    });
  }, 100);

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
  
  return () => window.removeEventListener('scroll', handleScroll);
}

