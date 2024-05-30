import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  configureSwagger,
  configureCORS,
  configureGlobals,
} from './app.bootstrap';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  configureSwagger(app);
  configureCORS(app);
  configureGlobals(app);

  // TODO: fetch this from the globals
  await app.listen(8000);
}

bootstrap();
