import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Roles } from '../auth/roles.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { Public } from '../auth/public.decorator';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  @Public() // Exclude this endpoint from the guards
  async register(@Body() body: any) {
    return this.userService.createUser(body.email, body.password, body.role);
  }

  @Get('list')
  @Public() // Exclude this endpoint from the guards
  async findAllUsers() {
    return this.userService.findAllUsers();
  }

  @Get('list/admin')
  @UseGuards(AuthGuard('jwt'), RolesGuard) // Apply guards only to this endpoint
  @Roles('ADMIN') // Only users with the ADMIN role can access this route
  async findAllUserAdmin() {
    return this.userService.findAllUserAdmin();
  }
}
