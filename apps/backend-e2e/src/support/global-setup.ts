/* eslint-disable */
var __TEARDOWN_MESSAGE__: string;

/**
 * Asynchronous setup function for initializing application services.
 * This function is responsible for starting necessary services
 * such as databases or docker-compose, which are required for
 * the application to run properly.
 * 
 * @returns {Promise<void>} A promise that resolves when all services are started
 * @throws {Error} If there's an issue starting any of the required services
 */
module.exports = async function () {
  // Start services that that the app needs to run (e.g. database, docker-compose, etc.).
  console.log('\nSetting up...\n');

  // Hint: Use `globalThis` to pass variables to global teardown.
  globalThis.__TEARDOWN_MESSAGE__ = '\nTearing down...\n';
};
