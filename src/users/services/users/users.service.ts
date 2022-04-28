import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User as UserEntity} from 'src/typeorm';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { encodePassword } from 'src/utils/bcrypt';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  createUser (CreateUserDto: CreateUserDto){
    const password = encodePassword(CreateUserDto.password);
    const userCreated = this.userRepository.create({...CreateUserDto, password});
    return this.userRepository.save(userCreated);
  }

  findUserByUsername(userName: string) {
    return this.userRepository.findOne(userName);
  }

  findUserById(id: number) {
    return this.userRepository.findOne(id);
  }

  getAllUser () { 
    return this.userRepository.find();
  }
}
