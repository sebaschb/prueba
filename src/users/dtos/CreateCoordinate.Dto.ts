import { IsEmail, IsNotEmpty, IsNumberString, MinLength } from "class-validator";

export class CreateCoordinateDto {

  @IsNotEmpty()
  longitud: string;
  
  @IsNotEmpty()
  latitud: string;

  @IsNotEmpty()
  radio: string;
}
