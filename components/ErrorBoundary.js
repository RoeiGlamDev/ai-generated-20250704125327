// components/ErrorBoundary.js
import * as Sentry from '@sentry/react';

const ErrorBoundary = ({ children }) => {
  return (
    <Sentry.ErrorBoundary
      fallback={({ error, componentStack }) => (
        <div>
          <h1>An error occurred.</h1>
          <p>{error.message}</p>
          <p>{componentStack}</p>
        </div>
      )}
    >
      {children}
    </Sentry.ErrorBoundary>
  );
};

export default ErrorBoundary;