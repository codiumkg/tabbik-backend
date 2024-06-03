import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import axios from 'axios';
import { UserService } from '../user/user.service';
import { GoogleUserInfoDto } from './dto/google-userinfo.dto';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}
  async validateGoogleToken(accessToken: string) {
    const response = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    if (response.status !== 200) {
      throw new UnauthorizedException('Invalid google auth token');
    }

    this.loginWithGoogle(response.data.email);
  }

  async loginWithGoogle(userdata: GoogleUserInfoDto) {
    const user = await this.userService.findByEmail(userdata.email);

    const userDto: CreateUserDto = {
      username: userdata.email,
      email: userdata.email,
      avatar: userdata.picture,
    };

    if (!user) {
      const newUser = await this.userService.create(userDto);

      const token = await this.jwtService.signAsync(newUser);

      return {
        user: newUser,
        token,
      };
    }

    const token = await this.jwtService.signAsync(user);

    return {
      user,
      token,
    };
  }
}
