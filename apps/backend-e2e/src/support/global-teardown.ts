/* eslint-disable */

/**
 * Performs teardown operations for the application.
 * This asynchronous function is responsible for executing cleanup logic,
 * such as stopping services or docker-compose processes.
 * It logs a predefined teardown message stored in the global scope.
 * @returns {Promise<void>} A promise that resolves when teardown is complete
 */
module.exports = async function () {
  // Put clean up logic here (e.g. stopping services, docker-compose, etc.).
  // Hint: `globalThis` is shared between setup and teardown.
  console.log(globalThis.__TEARDOWN_MESSAGE__);
};
