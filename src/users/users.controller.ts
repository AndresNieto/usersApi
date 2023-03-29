import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthResponseDTO } from 'src/auth/dto/response-auth.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { UserDTO } from './dto/user.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {

  constructor(private _userService: UsersService) { }

  @Get('/')
  public getAllUsers() {
    return this._userService.findAllUsers();
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id_user')
  public getUser(@Param('id_user') id: number) {
    return this._userService.findOneUser(id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  public createUser(@Body() body: UserDTO) {
    return this._userService.createUser(body);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put(':id_user')
  public updateUser(@Param('id_user') id: number, @Body() body: UserDTO) {
    return this._userService.updateUser(id, body);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id_user')
  public deleteUser(@Param('id_user') id: number) {
    return this._userService.deleteUser(id);
  }

}
