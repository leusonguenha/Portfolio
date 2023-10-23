import "../styles/styles.css";
// The CSS in ErrorBoundary depends on the global CSS in styles.css,
// so we import it after styles.css.

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
