/**
 * Calculates the duration between two dates in a human-readable format
 * @param {string} startDate - The start date in a human-readable format (e.g., "August 2021")
 * @param {string|null} endDate - The end date in a human-readable format or null for current date
 * @returns {string} A human-readable duration (e.g., "5 months", "3 years", "2 years 10 months")
 */
export const calculateDuration = (startDate, endDate) => {
  // Parse the dates
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
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