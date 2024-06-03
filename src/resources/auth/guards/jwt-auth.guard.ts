import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest<TUser>(
    err: any,
    user: any,
    info: any,
    context: any,
    status?: any,
  ): TUser {
    return super.handleRequest(err, user, info, context, status);
  }
}
