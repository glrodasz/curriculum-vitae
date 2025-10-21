import "minireset.css/minireset.css";
import '../styles/main.scss'
import useFooterVisibility from '../hooks/useFooterVisibility'

function App({ Component, pageProps }) {
  useFooterVisibility();
  
  return <Component {...pageProps} />;
}

export default App;
