import { updateManifestTheme } from './manifest';

/**
 * Theme management utility
 * Handles theme detection, persistence, and DOM updates
 */

const THEME_STORAGE_KEY = 'theme';
const DARK_CLASS = 'dark';
const USER_THEME_CLASS = 'user-theme';

/**
 * Gets the current theme preference
 * @returns {'light' | 'dark'} The current theme
 */
export const getCurrentTheme = () => {
  if (typeof window === 'undefined') return 'light';

  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme) {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

/**
 * Gets whether the user has manually set a theme preference
 * @returns {boolean} True if user has set a preference
 */
export const hasUserThemePreference = () => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(THEME_STORAGE_KEY) !== null;
};

/**
 * Applies theme to the DOM
 * @param {boolean} isDark - Whether to apply dark theme
 * @param {boolean} isUserPreference - Whether this is a user preference
 */
const applyThemeToDOM = (isDark, isUserPreference = false) => {
  if (typeof document === 'undefined') return;

  document.documentElement.classList.toggle(DARK_CLASS, isDark);

  if (isUserPreference) {
    document.documentElement.classList.add(USER_THEME_CLASS);
  } else {
    document.documentElement.classList.remove(USER_THEME_CLASS);
  }

  updateManifestTheme(isDark);
};

/**
 * Initializes the theme based on saved preference or system preference
 * @returns {boolean} The initial theme state (true = dark)
 */
export const initializeTheme = () => {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

  if (savedTheme) {
    const isDark = savedTheme === 'dark';
    applyThemeToDOM(isDark, true);
    return isDark;
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyThemeToDOM(prefersDark, false);
  return prefersDark;
};

/**
 * Sets the theme and persists the preference
 * @param {boolean} isDark - Whether to set dark theme
 */
export const setTheme = (isDark) => {
  localStorage.setItem(THEME_STORAGE_KEY, isDark ? 'dark' : 'light');
  applyThemeToDOM(isDark, true);
};

/**
 * Toggles between light and dark theme
 * @param {boolean} currentIsDark - Current theme state
 * @returns {boolean} New theme state
 */
export const toggleTheme = (currentIsDark) => {
  const newTheme = !currentIsDark;
  setTheme(newTheme);
  return newTheme;
};

/**
 * Creates a system theme change listener
 * @param {Function} callback - Callback function that receives the new theme state
 * @returns {Function} Cleanup function to remove the listener
 */
export const createSystemThemeListener = (callback) => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  const handleChange = (e) => {
    // Only respond to system changes if user hasn't set a preference
    if (!hasUserThemePreference()) {
      const isDark = e.matches;
      applyThemeToDOM(isDark, false);
      callback(isDark);
    }
  };

  mediaQuery.addEventListener('change', handleChange);

  // Return cleanup function
  return () => mediaQuery.removeEventListener('change', handleChange);
};

/**
 * Clears the user's theme preference and reverts to system preference
 */
export const clearThemePreference = () => {
  localStorage.removeItem(THEME_STORAGE_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyThemeToDOM(prefersDark, false);
  return prefersDark;
};
