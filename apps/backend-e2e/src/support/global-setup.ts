/* eslint-disable */
var __TEARDOWN_MESSAGE__: string;

/**
 * Sets up services required for the application to run.
 * This function is intended to be used as a global setup in a testing or development environment.
 * It logs a setup message and sets a global teardown message for later use.
 * @returns {Promise<void>} A promise that resolves when setup is complete
 */
module.exports = async function () {
  // Start services that that the app needs to run (e.g. database, docker-compose, etc.).
  console.log('\nSetting up...\n');

  // Hint: Use `globalThis` to pass variables to global teardown.
  globalThis.__TEARDOWN_MESSAGE__ = '\nTearing down...\n';
};
