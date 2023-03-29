import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDTO } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto/login-auth.dto';

@ApiTags('auth')
@Controller('users')
export class AuthController {
  constructor(
    private readonly _authService: AuthService,
    private readonly _userService: UsersService
  ) { }

  @Post('register')
  public register(@Body() userInfo: UserDTO) {
    return this._userService.createUser(userInfo)
  }

  @Post('login')
  public login(@Body() authInfo: AuthDTO) {
    return this._authService.login(authInfo)
  }
}
