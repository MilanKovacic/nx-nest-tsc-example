import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

/**
 * Test suite for AppController
 * @description Sets up a testing module and runs tests for the AppController
 */

/**
 * Set up the testing module before running tests
 * @description Creates a TestingModule with AppController and AppService
 */

/**
 * Test the getData method of AppController
 * @description Verifies that getData returns the expected message
 * @returns {Object} An object containing the message "Hello API"
 */
describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData()).toEqual({ message: 'Hello API' });
    });
  });
});
