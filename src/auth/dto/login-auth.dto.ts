import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator'

export class AuthDTO {

  @ApiProperty({
    description: 'The mobile phone of the User',
    type: String,
  })
  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(10)
  mobile_phone: string;


  @ApiProperty({
    description: 'The password encrypted of the User',
    type: String,
  })
  @IsNotEmpty()
  password: string;
}