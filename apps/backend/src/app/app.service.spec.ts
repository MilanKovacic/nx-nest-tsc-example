import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

/**
 * Test suite for AppService
 * This describe block sets up and runs tests for the AppService class.
 * It creates a test module, initializes the service, and contains test cases for the getData method.
 * @returns {void} This method does not return a value
 */
describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      expect(service.getData()).toEqual({ message: 'Hello API' });
    });
  });
});
