import {
  Controller,
  Get,
  UseInterceptors,
  ClassSerializerInterceptor,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDocs } from './auth.docs';
import { LocalGuard } from './guards/local.guard';
import { JwtAuthGuard } from './guards/jwt.guard';
import { Request } from 'express';

@Controller('auth')
@AuthDocs.Controller
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @AuthDocs.register
  register() {
    this.authService.register();
  }

  @Post('login')
  @UseGuards(LocalGuard)
  login(@Req() req: Request) {
    return req.user;
  }

  @Get('status')
  @UseGuards(JwtAuthGuard)
  status(@Req() req: Request) {
    console.log('Inside AuthController status method');
    console.log(req.user);
    return req.user;
  }

  @Post('forgot-password')
  @AuthDocs.forgotPassword
  forgotPassword() {
    this.authService.forgotPassword();
  }

  @Post('reset-password')
  @AuthDocs.resetPassword
  resetPassword() {
    this.authService.resetPassword();
  }

  @Post('verify-acc')
  @AuthDocs.verifyAccToken
  verifyAcc() {
    this.authService.verifyAcc();
  }

  @Post('verify-acc-token')
  @AuthDocs.verifyAccToken
  verifyAccToken() {
    this.authService.verifyAccToken();
  }
}
