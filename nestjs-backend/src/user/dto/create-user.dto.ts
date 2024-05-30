//  payload neeed to create a new user

export class CreateUserDto {
  name: string;
  email: string;
  hash: string;
  password: string;
  mode: string;
  profileURL: string;
}
