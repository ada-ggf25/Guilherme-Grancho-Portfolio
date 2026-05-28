/**
 * Parses the end date from a timeframe string
 * @param timeframe - The timeframe string (e.g., "Jan 2025 - Present" or "Sep 2025 - Sep 2026")
 * @returns Date object representing the end date, or null if parsing fails
 */
function parseEndDate(timeframe: string): Date | null {
  const monthNames: Record<string, number> = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
  };

  if (!timeframe) {
    return null;
  }

  // If it contains " - ", extract the end date part
  if (timeframe.includes(" - ")) {
    const parts = timeframe.split(" - ");
    const endPart = parts[1].trim();

    // If it's "Present", use a very future date
    if (endPart === "Present") {
      return new Date(9999, 11, 31);
    }

    const endParts = endPart.split(" ");
    if (endParts.length >= 2) {
      const month = monthNames[endParts[0]];
      const year = parseInt(endParts[1]);
      if (month && year) {
        // Use the first day of the month for comparison (consistent with existing codebase)
        // month is 1-indexed from monthNames, but Date uses 0-indexed months
        return new Date(year, month - 1, 1);
      }
    }
  } else {
    // Single date, use it as both start and end
    const parts = timeframe.split(" ");
    if (parts.length >= 2) {
      const month = monthNames[parts[0]];
      const year = parseInt(parts[1]);
      if (month && year) {
        return new Date(year, month - 1, 1);
      }
    }
  }

  return null;
}

/**
 * Checks if a timeframe represents an active/current period
 * This includes timeframes with "Present" or those ending in the future
 * @param timeframe - The timeframe string to check (e.g., "Jan 2025 - Present" or "Sep 2025 - Sep 2026")
 * @returns true if the timeframe is currently active (contains "Present" or ends in the future), false otherwise
 */
export function isPresent(timeframe: string | undefined): boolean {
  if (!timeframe) return false;

  // Check if it explicitly says "Present"
  if (timeframe.includes("Present")) {
    return true;
  }

  // Check if the end date is in the future
  const endDate = parseEndDate(timeframe);
  if (!endDate) {
    return false;
  }

  const today = new Date();
  // Set today to start of day for accurate comparison
  today.setHours(0, 0, 0, 0);

  // Compare dates (end date should be >= today)
  return endDate >= today;
}
