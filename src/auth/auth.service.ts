import { HttpException, Injectable} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../entity/user';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
    
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async registerUser(user: User) { 
    await this.userService.registerUser(user);
    const token = await this.generateToken(user)
    return token
}
    
  async login (username : string, password: string) {
    const findUser = await this.userService.getUserByUsername(username);
    if(!findUser) new HttpException('USER_NOT_FOUND', 404);

    const checkPass = await compare(password, findUser.password);
    if(!checkPass) throw new HttpException('PASSWORD_INCORRECT', 403);

    const token = await this.generateToken(findUser)

    return token

  }

  async generateToken(user:User) {
    const payload = { id: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload, {secret: process.env.JWT_SECRET}),
    };
  }
}