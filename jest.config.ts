import { getJestProjectsAsync } from '@nx/jest';

/**
 * Retrieves Jest projects asynchronously.
 * @returns {Promise<Object>} An object containing a 'projects' property with the retrieved Jest projects.
 */
export default async () => ({
  projects: await getJestProjectsAsync(),
});
