import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

// exp: payload for registering the user.
// todo: add more data transformations here.
class RegisterDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password: string;

  hash: string;
  mode: string;
  profileURL: string;

  @ApiProperty()
  facebook?: string;

  @ApiProperty()
  instagram?: string;

  linkedin: string | null;
  twitter: string | null;
}

export default RegisterDto;
