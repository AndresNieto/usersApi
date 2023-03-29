import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/users.entity';
import { Repository } from 'typeorm';
import { AuthDTO } from './dto/login-auth.dto';
import { compare, hash } from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { AuthResponseDTO } from './dto/response-auth.dto';


@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User) private _userRepo: Repository<User>,
    private _jwtService: JwtService
  ) { }

  public async login(authInfo: AuthDTO)/*: Promise<AuthResponseDTO>*/ {
    const { mobile_phone, password } = authInfo;

    const userFound = await this._userRepo.findOne({
      where:
        { mobile_phone }
    })

    if (!userFound) throw new HttpException('User not found', HttpStatus.NOT_FOUND)

    const checkPassword = await compare(password, userFound.password)

    if (!checkPassword) throw new HttpException('Wrong password', HttpStatus.FORBIDDEN)

    const token = this._jwtService.sign(JSON.stringify(userFound))

    const authResponse: AuthResponseDTO = {
      user: { ...userFound, session_active: true }, access_token: token, token_type: 'Bearer'
    }

    return authResponse
  }

}
