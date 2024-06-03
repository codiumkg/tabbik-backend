import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './strategies/google.strategy';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConfig } from 'src/config/jwt.config';
import { UserModule } from '../user/user.module';

@Module({
  imports: [JwtModule.registerAsync(jwtConfig), UserModule],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy, JwtService],
})
export class AuthModule {}
