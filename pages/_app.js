// pages/_app.js
import ErrorBoundary from '../components/ErrorBoundary';
import * as Sentry from '@sentry/nextjs';

function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;