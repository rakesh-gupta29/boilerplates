// schema to send the user response

import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class UserProfileResponse {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  mode: string;

  @ApiProperty()
  profileURL: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  facebook?: string;

  @ApiProperty()
  instagram?: string;

  @ApiProperty()
  linkedin?: string;

  @ApiProperty()
  twitter?: string;

  // todo: what other properties we should exclude
  @Exclude()
  password: string;
  hash: string;
}

export class UserProfileSummary {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  profileURL: string;

  @ApiProperty()
  mode: string;
}
