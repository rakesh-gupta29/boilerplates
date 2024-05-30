// functions to run while bootstrapping the app

import { INestApplication, ValidationPipe } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { json } from 'express';
import { LoggerInterceptor } from './utils/logger.interceptor';

export function configureSwagger(app: INestApplication): INestApplication {
  const config = new DocumentBuilder()
    .setTitle('cafe app')
    .setDescription('boilerplate cafe app docs')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        name: 'JWT',
        in: 'header',
      },
      'access-token',
    )
    .build();

  const swaggerOptions: SwaggerCustomOptions = {
    customSiteTitle: 'cafe app docs',
    explorer: true,
    swaggerOptions: {
      persistAuthorization: true,
    },
  };

  // todo: get the env from the global config
  if (process.env.MODE !== 'production') {
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document, swaggerOptions);
  }

  return app;
}

export function configureCORS(app: INestApplication): INestApplication {
  // todo: add a check to enable the cors only when the config.cors is true. else throw a warning and proceed
  app.enableCors({
    origin: ['http://localhost:3000'],
  });
  return app;
}

export function configureGlobals(app: INestApplication): INestApplication {
  // todo: what are other globals that need to be setup when building the app.
  const maximumBodySizeMB = 8;
  app.use(json({ limit: `${maximumBodySizeMB}mb` }));

  // exp: pipes are used to  transform the payload before the data reaches to the route handler.
  // enabled it globally to force that request payload to match the DTO.
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  // todo: what are the global methods/utilities  that we can have here
  app.useGlobalInterceptors(new LoggerInterceptor());

  return app;
}
