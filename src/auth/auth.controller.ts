import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth') // Base route for all endpoints in this controller
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard) // Use the LocalAuthGuard to validate credentials
  @Post('login') // Route: POST /auth/login
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
