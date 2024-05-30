import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserNotFoundException } from './exceptions/user-not-found.exception';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getById(id: number) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) {
      throw new UserNotFoundException();
    }

    return user;
  }

  async getDetailedProfile(email: string) {
    // todo: return the detailed profile of user
    return 'detailed profile of user';
  }

  async getProfile(email: string) {
    // todo: get the bare minimum profile details
    return 'smaller profile details';
  }
}
