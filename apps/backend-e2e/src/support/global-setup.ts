/* eslint-disable */
var __TEARDOWN_MESSAGE__: string;

/**
 * Sets up services required for the application to run.
 * This function is responsible for initializing necessary services
 * such as databases, docker-compose, etc. It also sets up a global
 * teardown message for use in the global teardown process.
 * @returns {Promise<void>} A promise that resolves when setup is complete.
 */
module.exports = async function () {
  // Start services that that the app needs to run (e.g. database, docker-compose, etc.).
  console.log('\nSetting up...\n');

  // Hint: Use `globalThis` to pass variables to global teardown.
  globalThis.__TEARDOWN_MESSAGE__ = '\nTearing down...\n';
};
