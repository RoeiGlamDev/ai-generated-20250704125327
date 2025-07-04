// next.config.js
module.exports = {
  // Sentry configuration
  sentry: {
    // Your Sentry project (required for `@sentry/nextjs`)
    dsn: process.env.SENTRY_DSN,
    // Adjust this value in production, or use tracesSampler for finer control
    tracesSampleRate: 1.0,
  },
  // Other Next.js configurations...
}