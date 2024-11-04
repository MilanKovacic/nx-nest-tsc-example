import axios from 'axios';

/**
 * Performs a GET request to the '/api' endpoint and verifies the response
 * @returns {Object} An object containing the test results
 */
describe('GET /api', () => {
  it('should return a message', async () => {
    const res = await axios.get(`/api`);

    expect(res.status).toBe(200);
    expect(res.data).toEqual({ message: 'Hello API' });
  });
});
