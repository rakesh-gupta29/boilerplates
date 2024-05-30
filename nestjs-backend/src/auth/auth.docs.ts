import { applyDecorators } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { AuthActionSuccessResponse, AuthTokenResponse } from './dto/token.dto';

export const AuthDocs = {
  Controller: applyDecorators(ApiTags('Auth Module')),

  register: applyDecorators(
    ApiOperation({ summary: 'register new users' }),
    ApiParam({
      name: 'email',
      required: true,
    }),
    ApiParam({
      name: 'name',
      required: true,
    }),
    ApiParam({
      name: 'password',
      required: true,
    }),
    ApiOkResponse({ type: AuthTokenResponse }),
  ),

  verifyAcc: applyDecorators(
    ApiOperation({
      summary: 'verify profile through email',
      description:
        'gets the user id, sends a verification email so that we can have a verified badge for the user',
    }),
    ApiParam({
      name: 'userid',
      required: true,
    }),
    ApiOkResponse({ type: AuthActionSuccessResponse }),
  ),
  verifyAccToken: applyDecorators(
    ApiOperation({ summary: 'validate account from the token' }),
  ),

  login: applyDecorators(
    ApiOperation({ summary: 'login an existing user' }),
    ApiParam({
      name: 'email',
      required: true,
    }),

    ApiParam({
      name: 'password',
      required: true,
    }),
    ApiOkResponse({ type: AuthTokenResponse }),
  ),
  forgotPassword: applyDecorators(
    ApiOperation({ summary: 'send an email with password reset token' }),
    ApiParam({
      name: 'email',
      required: true,
    }),
    ApiOkResponse({ type: AuthActionSuccessResponse }),
  ),

  resetPassword: applyDecorators(
    ApiOperation({
      summary: 'request with new password and reset token from the email',
    }),
    ApiParam({
      name: 'password',
      required: true,
    }),
    ApiParam({
      name: 'reset-token',
      required: true,
    }),
    ApiOkResponse({ type: AuthActionSuccessResponse }),
  ),
};
