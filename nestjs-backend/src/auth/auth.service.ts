import { Injectable, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDocs } from './auth.docs';
import LoginDto from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

const fakeUsers = [
  {
    id: 1,
    username: 'anson',
    password: 'password',
  },
  {
    id: 2,
    username: 'jack',
    password: 'password123',
  },
];

@Injectable()
@AuthDocs.Controller
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  register() {}

  login({ username, password }: LoginDto) {
    // here you the email and password and you are checking that the user is correct and making changes
    const findUser = fakeUsers.find((user) => user.username === username);
    if (!findUser) return null;

    if (password === findUser.password) {
      const { password, ...user } = findUser;
      // todo: make a better payload than this
      return this.jwtService.sign(user);
    }
  }

  forgotPassword() {}

  resetPassword() {}

  verifyAcc() {}

  verifyAccToken() {}
}
