import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto/login-auth.dto';

@ApiTags('auth')
@Controller('users')
export class AuthController {
  constructor(private readonly _authService: AuthService) { }

  @Post('login')
  public login(@Body() authInfo: AuthDTO) {
    return this._authService.login(authInfo)
  }
}
