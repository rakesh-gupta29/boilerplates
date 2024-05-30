import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  UserProfileResponse,
  UserProfileSummary,
} from './dto/user-response.dto';

export const UserDocs = {
  Controller: applyDecorators(ApiTags('User Module')),

  profile: applyDecorators(
    ApiOperation({ summary: 'user profile summary' }),
    ApiOkResponse({ type: UserProfileSummary }),
  ),
  profileDetails: applyDecorators(
    ApiOperation({ summary: 'detailed profile info.' }),
    ApiOkResponse({ type: UserProfileResponse }),
  ),
};
