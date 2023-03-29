import { IsNotEmpty } from "class-validator";
import { UserDTO } from "src/users/dto/user.dto";

export class AuthResponseDTO {
  @IsNotEmpty()
  user: UserDTO;

  @IsNotEmpty()
  access_token: string;

  @IsNotEmpty()
  token_type: string
}