import { ApiProperty } from '@nestjs/swagger';

export class AuthTokenResponse {
  @ApiProperty()
  token: string;
}

export class AuthActionSuccessResponse {
  @ApiProperty()
  isFailed: boolean;

  @ApiProperty()
  message?: string;
}
