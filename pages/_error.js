// pages/_error.js
import * as Sentry from '@sentry/nextjs';

const CustomErrorPage = ({ statusCode, hasGetInitialPropsRun, err }) => {
  // If an error occurred, Sentry will have already been notified.
  // We can also manually capture the error if needed.
  if (err) {
    Sentry.captureException(err);
  }

  return (
    <div>
      <h1>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </h1>
      <style jsx global>{`
        body {
          font-family: Arial, sans-serif;
        }
      `}</style>
    </div>
  );
};

export default CustomErrorPage;