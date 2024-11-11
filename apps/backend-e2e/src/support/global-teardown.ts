/* eslint-disable */

/**
 * Performs cleanup operations after test execution.
 * This asynchronous function is responsible for cleaning up any resources or
 * stopping services that were initialized during the test setup.
 * It logs a teardown message stored in the global context.
 * 
 * @returns {Promise<void>} A promise that resolves when the cleanup is complete.
 */
module.exports = async function () {
  // Put clean up logic here (e.g. stopping services, docker-compose, etc.).
  // Hint: `globalThis` is shared between setup and teardown.
  console.log(globalThis.__TEARDOWN_MESSAGE__);
};
