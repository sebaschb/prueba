import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport"
import { Strategy } from "passport-local"
import { AuthService } from "../services/auth/auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService) {
      super();
  }

  async validate(userName: string, password: string){
    console.log('Inside LocalStrategy.validate');
    console.log(userName);
    console.log(password);
    const user = this.authService.validateUser(userName, password)
    if (!user){
      throw new UnauthorizedException();
    }
    return user;
  }
}