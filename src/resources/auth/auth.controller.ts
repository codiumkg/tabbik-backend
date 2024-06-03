import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleAuthGuard } from './guards/google-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/login/google')
  @UseGuards(GoogleAuthGuard)
  async loginWithGoogle() {}

  @Get('/google/callback')
  @UseGuards(GoogleAuthGuard)
  async googleCallback(@Req() req) {
    this.authService.validateGoogleToken(req.user.accessToken);
  }
}
