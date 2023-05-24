import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsNotEmpty, IsEnum } from 'class-validator';
import { UserRole } from '../entities/user.entity';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  password: string;

  @IsEnum(UserRole)
  role!: UserRole;
}
