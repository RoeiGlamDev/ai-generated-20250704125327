// pages/sentry-example-page.js
import * as Sentry from '@sentry/nextjs';

const SentryExamplePage = () => {
  const handleError = () => {
    try {
      // This will throw an error
      throw new Error('Something went wrong');
    } catch (error) {
      // Capture the error manually
      Sentry.captureException(error);
    }
  };

  const handlePromiseRejection = () => {
    // This will throw a promise rejection
    Promise.reject(new Error('Something went wrong')).catch((error) => {
      // Capture the error manually
      Sentry.captureException(error);
    });
  };

  return (
    <div>
      <h1>Sentry Example Page</h1>
      <button onClick={handleError}>Throw Error</button>
      <button onClick={handlePromiseRejection}>Throw Promise Rejection</button>
    </div>
  );
};

export default SentryExamplePage;