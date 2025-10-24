import "minireset.css/minireset.css";
import '../styles/main.scss'
import useFooterVisibility from '../hooks/useFooterVisibility'
import { initializeManifestTheme } from '../utils/manifest'
import { ViewModeProvider, ViewMode } from '../contexts/ViewModeContext'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'

interface CustomPageProps {
  viewMode?: ViewMode;
}

function App({ Component, pageProps }: AppProps<CustomPageProps>) {
  useFooterVisibility();

  useEffect(() => {
    // Initialize manifest theme colors on app load
    initializeManifestTheme();
  }, []);

  const viewMode = pageProps.viewMode ?? 'normal';

  return (
    <ViewModeProvider mode={viewMode}>
      <Component {...pageProps} />
    </ViewModeProvider>
  );
}

export default App;
