import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { UserService } from '@src/user/user.service';
import { SignUpUserDTO } from '@src/user/dto/signUpUser';
import { LoginUserDTO } from '@src/user/dto/loginUser';

@Controller('api')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('healthcheck')
  healthcheck() {
    return {
      status: 'ok',
      connectedToDB: true,
    };
  }

  @Post('signup')
  signUp(@Body() body: SignUpUserDTO) {
    return this.userService.signUp(body);
  }

  @Post('login')
  login(@Body() body: LoginUserDTO) {
    return this.userService.login(body);
  }

  @Get('users')
  getUsers() {
    return this.userService.getUsers();
  }

  @Get('users/:hour')
  getUserByHour(@Param('hour') hour: number) {
    return this.userService.getUserByHour(hour);
  }

  @Get('user/:id')
  getUserById(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }

  @Delete('user/:id')
  deleteUserById(@Param('id') id: number) {
    return this.userService.deleteUserById(id);
  }
}
