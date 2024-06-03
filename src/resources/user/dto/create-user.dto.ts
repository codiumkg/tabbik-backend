import { IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  avatar?: string;
}
