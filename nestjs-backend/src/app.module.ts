import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
// import joi from 'joi';
import { AuthModule } from './auth/auth.module';

/*
 def: module is basically a wrapper for encapsulation for providers, services, controllers or chlild modules.
 used for separation of concerns.
*/

// exp: app module is the parent for all the modules

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/*
Include the validation logic for .env thing
ConfigModule.forRoot({
  validationSchema: joi.object({
    POSTGRES_HOST: joi.string().required(),
    POSTGRES_PORT: joi.number().required(),
    POSTGRES_USER: joi.string().required(),
    POSTGRES_PASSWORD: joi.string().required(),
    POSTGRES_DB: joi.string().required(),
    JWT_SECRET: joi.string().required(),
    JWT_EXPIRATION_TIME: joi.string().required(),
  }),
}), 
*/
