import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator'
import moment from 'moment';
{
}
export class UserDTO {
  @ApiProperty({
    description: 'The id of the User',
    type: Number,
  })
  id: number;

  @ApiProperty({
    description: 'The first name of the User',
    type: String,
  })
  @IsNotEmpty()
  first_name: string;

  @ApiProperty({
    description: 'The first name of the User',
    type: String,
  })
  @IsNotEmpty()
  last_name: string;

  @ApiProperty({
    description: 'The birth date of the User',
    type: Date,
  })
  @IsNotEmpty()
  date_birth: Date;

  @ApiProperty({
    description: 'The address of the User',
    type: String,
  })
  @IsNotEmpty()
  address: string;

  @ApiProperty({
    description: 'The password encrypted of the User',
    type: String,
  })
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'The mobile phone of the User',
    type: String,
  })
  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(10)
  mobile_phone: string;

  @ApiProperty({
    description: 'The email of the User',
    type: String,
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Boolean to show if the session is active',
    type: String,
    default: true
  })
  session_active: boolean;
}