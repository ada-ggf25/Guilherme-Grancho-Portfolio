// Store the callback function globally so scrollToSection can trigger immediate highlighting
let activeSectionCallback: ((index: number) => void) | null = null;
let sectionsList: Array<{ id: string }> = [];
// Track the last clicked section and suppress scroll detection temporarily
let lastClickedSectionIndex: number | null = null;
let suppressScrollDetectionUntil: number = 0;

/**
 * Utility function to scroll to a section with header offset
 * @param sectionId - The ID of the section to scroll to
 * @param headerOffset - The offset in pixels to account for fixed header (default: 100)
 */
export function scrollToSection(sectionId: string, headerOffset = 100): void {
  const element = document.getElementById(sectionId);
  if (element) {
    // Find the section index to immediately highlight it
    const sectionIndex = sectionsList.findIndex((s) => s.id === sectionId);
    if (sectionIndex !== -1 && activeSectionCallback) {
      // Immediately highlight the clicked section
      activeSectionCallback(sectionIndex);
      // Suppress scroll detection for 1 second to prevent override
      lastClickedSectionIndex = sectionIndex;
      suppressScrollDetectionUntil = Date.now() + 1000;
    }

    const elementTop = element.getBoundingClientRect().top + window.pageYOffset;

    // If the element is at or near the top of the page, scroll to 0
    // This handles the Intro section which should be at the very top
    if (elementTop < 200) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      // Ensure highlighting is set after scroll completes
      setTimeout(() => {
        if (sectionIndex !== -1 && activeSectionCallback) {
          activeSectionCallback(sectionIndex);
          lastClickedSectionIndex = sectionIndex;
          suppressScrollDetectionUntil = Date.now() + 500;
        }
      }, 300);
      return;
    }

    const offsetPosition = elementTop - headerOffset;

    window.scrollTo({
      top: Math.max(0, offsetPosition), // Ensure we don't scroll to negative position
      behavior: "smooth",
    });

    // Ensure highlighting is set after scroll completes (multiple checks for reliability)
    setTimeout(() => {
      if (sectionIndex !== -1 && activeSectionCallback) {
        activeSectionCallback(sectionIndex);
        lastClickedSectionIndex = sectionIndex;
        suppressScrollDetectionUntil = Date.now() + 500;
      }
    }, 300);

    // Additional check after scroll animation completes
    setTimeout(() => {
      if (sectionIndex !== -1 && activeSectionCallback) {
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
          const rect = targetElement.getBoundingClientRect();
          // If element is visible in viewport, ensure it's highlighted
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            activeSectionCallback(sectionIndex);
            lastClickedSectionIndex = sectionIndex;
            suppressScrollDetectionUntil = Date.now() + 300;
          }
        }
      }
    }, 800);
  }
}

/**
 * Throttle function to limit how often a function can be called
 */
function throttle<T extends (...args: unknown[]) => void>(
  func: T,
  limit: number,
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function (...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
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
  callback: (index: number) => void,
): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  // Store callback and sections globally for scrollToSection to use
  activeSectionCallback = callback;
  sectionsList = sections;

  // Use Intersection Observer for better performance
  if ("IntersectionObserver" in window) {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section, index) => {
      const element = document.getElementById(section.id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            // If at the very top of the page, always prioritize first section (Intro)
            // This check must happen before processing entries to prevent wrong highlighting
            if (window.scrollY < 100) {
              const firstSectionElement = document.getElementById(
                sections[0]?.id,
              );
              if (firstSectionElement) {
                const rect = firstSectionElement.getBoundingClientRect();
                const elementTop = rect.top + window.scrollY;
                const elementBottom =
                  elementTop + firstSectionElement.offsetHeight;

                // If scroll position is within first section bounds, set it as active and return
                if (
                  window.scrollY >= elementTop - 100 &&
                  window.scrollY < elementBottom
                ) {
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
              // If we recently clicked a section, don't override it unless we've scrolled away
              if (
                Date.now() < suppressScrollDetectionUntil &&
                lastClickedSectionIndex !== null
              ) {
                if (index === lastClickedSectionIndex) {
                  // Allow the clicked section to be set
                  const clickedElement = document.getElementById(
                    sections[lastClickedSectionIndex]?.id,
                  );
                  if (clickedElement) {
                    const rect = clickedElement.getBoundingClientRect();
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                      callback(index);
                      return;
                    }
                  }
                } else {
                  // Don't override the clicked section
                  return;
                }
              }

              // Lower threshold for better detection of small sections
              // Also check if element is near the bottom of the page (last section)
              const isLastSection = index === sections.length - 1;
              const isNearBottom =
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 50;
              const minRatio = isLastSection && isNearBottom ? 0.1 : 0.2;

              if (entry.isIntersecting && entry.intersectionRatio > minRatio) {
                // Double-check we're not at the top before setting non-first section as active
                if (index === 0 || window.scrollY >= 100) {
                  callback(index);
                }
              }
            });
          },
          {
            rootMargin: "-20% 0px -60% 0px",
            threshold: [0, 0.1, 0.2, 0.3, 0.5, 1], // More thresholds for better small section detection
          },
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

          if (
            window.scrollY >= elementTop - 100 &&
            window.scrollY < elementBottom
          ) {
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
          if (
            window.scrollY >= elementTop - 100 &&
            window.scrollY < elementBottom
          ) {
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

        // If we recently clicked a section, respect that choice for a short time
        if (
          Date.now() < suppressScrollDetectionUntil &&
          lastClickedSectionIndex !== null
        ) {
          const clickedElement = document.getElementById(
            sectionsList[lastClickedSectionIndex]?.id,
          );
          if (clickedElement) {
            const rect = clickedElement.getBoundingClientRect();
            // If the clicked section is still visible, keep it highlighted
            if (rect.top < window.innerHeight && rect.bottom > 0) {
              callback(lastClickedSectionIndex);
              rafId = null;
              return;
            }
          }
        }

        // If at the very top of the page, default to first section (Intro)
        if (currentScrollY < 100) {
          const firstSectionElement = document.getElementById(sections[0]?.id);
          if (firstSectionElement) {
            const rect = firstSectionElement.getBoundingClientRect();
            const elementTop = rect.top + currentScrollY;
            const elementBottom = elementTop + firstSectionElement.offsetHeight;

            // If scroll position is within first section bounds, set it as active
            if (
              currentScrollY >= elementTop - 100 &&
              currentScrollY < elementBottom
            ) {
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

        // Check if we're near the bottom of the page - prioritize last section
        const isNearBottom =
          window.innerHeight + currentScrollY >=
          document.documentElement.scrollHeight - 100;
        if (isNearBottom && sections.length > 0) {
          const lastSectionElement = document.getElementById(
            sections[sections.length - 1]?.id,
          );
          if (lastSectionElement) {
            const rect = lastSectionElement.getBoundingClientRect();
            const elementTop = rect.top + currentScrollY;

            // If last section is visible in viewport and we're near bottom, highlight it
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            if (
              isVisible &&
              (currentScrollY >= elementTop - 300 || isNearBottom)
            ) {
              callback(sections.length - 1);
              rafId = null;
              return;
            }
          }
        }

        // Check all sections to find which one is currently active
        // This is important during fast scrolling when Intersection Observer might lag
        let foundActive = false;

        // Check sections in reverse order (bottom to top) to find the most relevant one
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          const element = document.getElementById(section.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + currentScrollY;
            const elementBottom = elementTop + rect.height;

            // For small sections, use a more lenient check
            const sectionHeight = rect.height;
            const isSmallSection = sectionHeight < 300; // Consider sections < 300px as small
            const checkOffset = isSmallSection
              ? window.innerHeight / 2
              : window.innerHeight / 3;
            const adjustedScrollPosition = currentScrollY + checkOffset;

            // Check if scroll position is within this section's bounds
            // For small sections, also check if element is visible in viewport
            const isInBounds =
              adjustedScrollPosition >= elementTop &&
              adjustedScrollPosition <= elementBottom;
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

            if (
              isInBounds ||
              (isSmallSection &&
                isVisible &&
                rect.top < window.innerHeight * 0.6)
            ) {
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
    win.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observers.forEach((observer) => observer.disconnect());
      win.removeEventListener("scroll", handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      // Clean up global references
      if (activeSectionCallback === callback) {
        activeSectionCallback = null;
        sectionsList = [];
        lastClickedSectionIndex = null;
        suppressScrollDetectionUntil = 0;
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

      // If we recently clicked a section, respect that choice for a short time
      if (
        Date.now() < suppressScrollDetectionUntil &&
        lastClickedSectionIndex !== null
      ) {
        const clickedElement = document.getElementById(
          sectionsList[lastClickedSectionIndex]?.id,
        );
        if (clickedElement) {
          const rect = clickedElement.getBoundingClientRect();
          // If the clicked section is still visible, keep it highlighted
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            callback(lastClickedSectionIndex);
            fallbackRafId = null;
            return;
          }
        }
      }

      // Check if we're at the very top - prioritize first section
      if (currentScrollY < 100) {
        const firstSectionElement = document.getElementById(sections[0]?.id);
        if (firstSectionElement) {
          const rect = firstSectionElement.getBoundingClientRect();
          const elementTop = rect.top + currentScrollY;
          const elementBottom = elementTop + firstSectionElement.offsetHeight;

          // If scroll position is within first section bounds, set it as active
          if (
            currentScrollY >= elementTop - 100 &&
            currentScrollY < elementBottom
          ) {
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

      // Check if we're near the bottom of the page - prioritize last section
      const isNearBottom =
        window.innerHeight + currentScrollY >=
        document.documentElement.scrollHeight - 100;
      if (isNearBottom && sections.length > 0) {
        const lastSectionElement = document.getElementById(
          sections[sections.length - 1]?.id,
        );
        if (lastSectionElement) {
          const rect = lastSectionElement.getBoundingClientRect();
          const elementTop = rect.top + currentScrollY;

          // If last section is visible in viewport and we're near bottom, highlight it
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          if (
            isVisible &&
            (currentScrollY >= elementTop - 300 || isNearBottom)
          ) {
            callback(sections.length - 1);
            fallbackRafId = null;
            return;
          }
        }
      }

      let foundActive = false;

      // Check sections in reverse order (bottom to top) to find the most relevant one
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + currentScrollY;
          const elementBottom = elementTop + rect.height;

          // For small sections, use a more lenient check
          const sectionHeight = rect.height;
          const isSmallSection = sectionHeight < 300; // Consider sections < 300px as small
          const checkOffset = isSmallSection
            ? window.innerHeight / 2
            : window.innerHeight / 3;
          const adjustedScrollPosition = currentScrollY + checkOffset;

          // Check if scroll position is within this section's bounds
          // For small sections, also check if element is visible in viewport
          const isInBounds =
            adjustedScrollPosition >= elementTop &&
            adjustedScrollPosition <= elementBottom;
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

          if (
            isInBounds ||
            (isSmallSection && isVisible && rect.top < window.innerHeight * 0.6)
          ) {
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
  win.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll(); // Initial check

  return () => {
    win.removeEventListener("scroll", handleScroll);
    if (fallbackRafId !== null) {
      cancelAnimationFrame(fallbackRafId);
    }
    // Clean up global references
    if (activeSectionCallback === callback) {
      activeSectionCallback = null;
      sectionsList = [];
    }
  };
}
