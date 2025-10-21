import { updateManifestTheme } from './manifest';

/**
 * Theme management utility
 * Handles theme detection, persistence, and DOM updates
 */

const THEME_STORAGE_KEY = 'theme';
const DARK_CLASS = 'dark';
const USER_THEME_CLASS = 'user-theme';

type Theme = 'light' | 'dark';

/**
 * Gets the current theme preference
 * @returns The current theme
 */
export const getCurrentTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light';

  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
  if (savedTheme) {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

/**
 * Gets whether the user has manually set a theme preference
 * @returns True if user has set a preference
 */
export const hasUserThemePreference = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(THEME_STORAGE_KEY) !== null;
};

/**
 * Applies theme to the DOM
 * @param isDark - Whether to apply dark theme
 * @param isUserPreference - Whether this is a user preference
 */
const applyThemeToDOM = (isDark: boolean, isUserPreference: boolean = false): void => {
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
 * @returns The initial theme state (true = dark)
 */
export const initializeTheme = (): boolean => {
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
 * @param isDark - Whether to set dark theme
 */
export const setTheme = (isDark: boolean): void => {
  localStorage.setItem(THEME_STORAGE_KEY, isDark ? 'dark' : 'light');
  applyThemeToDOM(isDark, true);
};

/**
 * Toggles between light and dark theme
 * @param currentIsDark - Current theme state
 * @returns New theme state
 */
export const toggleTheme = (currentIsDark: boolean): boolean => {
  const newTheme = !currentIsDark;
  setTheme(newTheme);
  return newTheme;
};

/**
 * Creates a system theme change listener
 * @param callback - Callback function that receives the new theme state
 * @returns Cleanup function to remove the listener
 */
export const createSystemThemeListener = (callback: (isDark: boolean) => void): (() => void) => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  const handleChange = (e: MediaQueryListEvent) => {
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
export const clearThemePreference = (): boolean => {
  localStorage.removeItem(THEME_STORAGE_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyThemeToDOM(prefersDark, false);
  return prefersDark;
};
