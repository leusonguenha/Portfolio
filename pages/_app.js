import "../styles/styles.css";
import "../styles/menuStyle.css";
import "../styles/cardStyle.css";
import "../styles/footerStyle.css";
import "../styles/findmeStyle.css";
import "../styles/sobreMimStyle.css";

// The CSS in ErrorBoundary depends on the global CSS in styles.css,
// so we import it after styles.css.

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
