# Next.js Sentry Example

This is an example of a Next.js application with Sentry error monitoring.

## Setup

1. Clone the repository: `git clone https://github.com/your-repo/nextjs-sentry-example.git`
2. Install dependencies: `npm install`
3. Create a `.env.local` file and add your Sentry DSN: `SENTRY_DSN=https://examplePublicKey@o0.ingest.sentry.io/0`
4. Start the application: `npm run dev`

## Usage

1. Open the application in your browser: `http://localhost:3000`
2. Navigate to the Sentry example page: `http://localhost:3000/sentry-example-page`
3. Click the "Throw Error" or "Throw Promise Rejection" buttons to trigger an error
4. Check your Sentry dashboard to see the error reported