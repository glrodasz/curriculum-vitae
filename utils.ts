/**
 * Calculates the duration between two dates in a human-readable format
 * @param startDate - The start date in a human-readable format (e.g., "August 2021")
 * @param endDate - The end date in a human-readable format or null for current date
 * @returns A human-readable duration (e.g., "5 months", "3 years", "2 years 10 months")
 */
export const calculateDuration = (startDate: string, endDate: string | null): string => {
  // Parse the dates more reliably
  const parseDate = (dateStr: string | null): Date => {
    if (!dateStr) return new Date();

    // Handle month names
    const months: Record<string, number> = {
      'January': 0, 'February': 1, 'March': 2, 'April': 3, 'May': 4, 'June': 5,
      'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11
    };

    const parts = dateStr.split(' ');
    if (parts.length === 2 && months[parts[0]] !== undefined) {
      const month = months[parts[0]];
      const year = parseInt(parts[1], 10);
      return new Date(year, month, 1);
    }

    // Fallback to standard parsing
    return new Date(dateStr);
  };

  const start = parseDate(startDate);
  const end = parseDate(endDate);

  // Ensure we have valid dates
  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return "";
  }

  // Calculate the difference in years and months
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  // Adjust for negative months
  if (months < 0) {
    years--;
    months += 12;
  }

  // Round up months (add 1 month)
  months += 1;

  // Adjust if months exceed 12
  if (months >= 12) {
    years += Math.floor(months / 12);
    months = months % 12;
  }

  // Format the duration string
  if (years === 0) {
    return `${months} ${months === 1 ? 'month' : 'months'}`;
  } else if (months === 0) {
    return `${years} ${years === 1 ? 'year' : 'years'}`;
  } else {
    return `${years} ${years === 1 ? 'year' : 'years'} ${months} ${months === 1 ? 'month' : 'months'}`;
  }
};
