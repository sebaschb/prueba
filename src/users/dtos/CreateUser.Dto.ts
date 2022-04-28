import { IsEmail, IsNotEmpty, IsNumberString, MinLength } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @IsNumberString()
  id: number;

  @IsNotEmpty()
  @IsEmail()
  @MinLength(3)
  email: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @MinLength(5)
  password: string;

  @IsNotEmpty()
  @MinLength(3)
  userName: string;
}
