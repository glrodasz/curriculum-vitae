/**
 * Utility functions for managing dynamic web manifest theme colors
 */

interface ThemeColor {
  theme_color: string;
  background_color: string;
}

// Theme color definitions
export const THEME_COLORS: Record<'light' | 'dark', ThemeColor> = {
  light: {
    theme_color: '#FFFFFF', // white
    background_color: '#FFFFFF' // white
  },
  dark: {
    theme_color: '#1A1A1A', // bunker
    background_color: '#1A1A1A' // bunker
  }
};

/**
 * Updates the web manifest theme colors based on the current theme
 * @param isDarkMode - Whether dark mode is active
 */
export const updateManifestTheme = (isDarkMode: boolean): void => {
  const colors = isDarkMode ? THEME_COLORS.dark : THEME_COLORS.light;

  // Find the manifest link element
  const manifestLink = document.querySelector('link[rel="manifest"]');

  if (manifestLink) {
    // Update the href to include a cache-busting parameter
    const currentHref = manifestLink.getAttribute('href');
    const separator = currentHref?.includes('?') ? '&' : '?';
    manifestLink.setAttribute('href', `${currentHref}${separator}v=${Date.now()}`);
  }

  // Update the theme-color meta tag
  updateThemeColorMeta(colors.theme_color);

  // Update the manifest content dynamically
  updateManifestContent(colors);
};

/**
 * Updates the theme-color meta tag
 * @param color - The theme color to set
 */
const updateThemeColorMeta = (color: string): void => {
  let themeColorMeta = document.querySelector('meta[name="theme-color"]');

  if (!themeColorMeta) {
    themeColorMeta = document.createElement('meta');
    themeColorMeta.setAttribute('name', 'theme-color');
    document.head.appendChild(themeColorMeta);
  }

  themeColorMeta.setAttribute('content', color);
};

/**
 * Updates the manifest content by fetching and modifying it
 * @param colors - The colors to apply
 */
const updateManifestContent = async (colors: ThemeColor): Promise<void> => {
  try {
    // Fetch the current manifest
    const response = await fetch('/site.webmanifest');
    const manifest = await response.json();

    // Update the colors
    manifest.theme_color = colors.theme_color;
    manifest.background_color = colors.background_color;

    // Create a new blob with the updated manifest
    const blob = new Blob([JSON.stringify(manifest, null, 4)], {
      type: 'application/json'
    });

    // Create a new URL for the blob
    const manifestUrl = URL.createObjectURL(blob);

    // Update the manifest link
    const manifestLink = document.querySelector('link[rel="manifest"]');
    if (manifestLink) {
      manifestLink.setAttribute('href', manifestUrl);
    }
  } catch (error) {
    console.warn('Failed to update manifest theme colors:', error);
  }
};

/**
 * Initializes the manifest with the correct theme colors based on current theme
 */
export const initializeManifestTheme = (): void => {
  const isDarkMode = document.documentElement.classList.contains('dark');
  updateManifestTheme(isDarkMode);
};
