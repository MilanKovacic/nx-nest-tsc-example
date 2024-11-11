/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { BackendLibraryModule } from '@backend/library';

/**
 * Bootstraps the NestJS application
 * @returns {Promise<void>} A promise that resolves when the application is successfully started
 * @throws {Error} If there's an error during the application startup
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
  console.log(BackendLibraryModule);
}

bootstrap();
