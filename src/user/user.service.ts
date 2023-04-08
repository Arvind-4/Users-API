import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';
import * as jwt from 'jsonwebtoken';

import { PrismaService } from '@src/database/prisma';
import { SignUpUserDTO } from '@src/user/dto/signUpUser';
import { LoginUserDTO } from '@src/user/dto/loginUser';
import { ConfigModule } from '@src/config/config.module';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async signUp(body: SignUpUserDTO) {
    try {
      const hashedPassword = await argon2.hash(body.password);
      const user = await this.prismaService.user.create({
        data: {
          name: body.name,
          email: body.email,
          password: hashedPassword,
        },
      });
      return user;
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }

  async login(body: LoginUserDTO) {
    try {
      const user = await this.prismaService.user.findUnique({
        where: {
          email: body.email,
        },
      });
      if (!user) {
        throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
      }
      const valid = await argon2.verify(user.password, body.password);
      if (!valid) {
        throw new HttpException('Invalid password', HttpStatus.BAD_REQUEST);
      }
      const token = jwt.sign(user.email, ConfigModule.jwtSecret);
      return { token: token };
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }

  async getUsers() {
    return this.prismaService.user.findMany();
  }

  async getUserById(id: number) {
    try {
      const user = await this.prismaService.user.findUnique({
        where: {
          id: Number(id),
        },
      });
      if (!user) {
        throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
      }
      return user;
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }

  async getUserByHour(hour: number) {
    try {
      const user = await this.prismaService.user.findMany({
        where: {
          createdAt: {
            gt: new Date(new Date().setHours(hour)),
          },
        },
      });
      if (!user) {
        throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
      }
      return user;
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }

  async deleteUserById(id: number) {
    try {
      const user = await this.prismaService.user.delete({
        where: {
          id: Number(id),
        },
      });
      if (!user) {
        throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
      }
      return user;
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }
}
