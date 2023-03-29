import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/users.entity';
import { hash } from 'bcrypt'
import { UserDTO } from './dto/user.dto';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User) private _userRepo: Repository<User>
  ) { }

  public findAllUsers() {
    return this._userRepo.find();
  }

  public async findOneUser(id: number) {
    return await this._userRepo.findOne({
      where:
        { id }
    })
  }

  public async createUser(body: UserDTO) {
    const hashPassword = await hash(body.password, 10);
    return this._userRepo.save({ ...body, password: hashPassword })
  }

  public async updateUser(id: number, body: UserDTO) {
    const user = await this.findOneUser(id)
    this._userRepo.merge(user, body)
    return this._userRepo.save(user)
  }

  public async deleteUser(id: any) {
    await this._userRepo.delete(id)
    return 'Row deleted'
  }
}
