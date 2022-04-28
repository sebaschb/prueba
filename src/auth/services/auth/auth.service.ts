import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { comparePasswords } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {

  constructor(@Inject('USER_SERVICE') private readonly userService: UsersService){}

  async validateUser(userName: string, password: string){
    console.log('Inside validateUser');
    const userDB = await this.userService.findUserByUsername(userName);
    console.log(userDB);
    if (userDB){
      console.log(userDB);
      const matched = comparePasswords(password, userDB.password);
      if (matched) {
        console.log('User Validation Correct');
        return userDB;
      } else {
        console.log('Password Incorrect');
        return null;
      }
    }
    console.log('User Validation fail');
    return null;
  }
}
