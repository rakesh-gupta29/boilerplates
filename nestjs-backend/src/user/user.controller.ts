import {
  Controller,
  Get,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { UserService } from './users.service';
import { UserDocs } from './user.docs';

@Controller('profile')
@UserDocs.Controller
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UserDocs.profile
  async getProfile() {
    return this.userService.getProfile('emailid');
  }

  @Get('details')
  @UserDocs.profileDetails
  async detailedProfile() {
    return this.userService.getDetailedProfile('emailid');
  }
}
