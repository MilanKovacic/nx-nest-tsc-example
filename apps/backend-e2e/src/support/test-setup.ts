/* eslint-disable */

import axios from 'axios';

/**
 * Configures axios defaults for tests
 * @returns {void} This function doesn't return a value
 */
module.exports = async function () {
  // Configure axios for tests to use.
  const host = process.env.HOST ?? 'localhost';
  const port = process.env.PORT ?? '3000';
  axios.defaults.baseURL = `http://${host}:${port}`;
};
