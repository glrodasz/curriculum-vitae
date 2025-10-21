import "minireset.css/minireset.css";
import '../styles/main.scss'
import useFooterVisibility from '../hooks/useFooterVisibility'
import { initializeManifestTheme } from '../utils/manifest'
import { useEffect } from 'react'

function App({ Component, pageProps }) {
  useFooterVisibility();
  
  useEffect(() => {
    // Initialize manifest theme colors on app load
    initializeManifestTheme();
  }, []);
  
  return <Component {...pageProps} />;
}

export default App;
