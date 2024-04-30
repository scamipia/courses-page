import { Body, Controller, Post, HttpCode, HttpStatus} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserRegisterDTO } from '../dtos/user.register.dto';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {}


  @Post()
  async registerUser(@Body() userDTO: UserRegisterDTO) {
    try {
      let user = UserRegisterDTO.toEntity(userDTO);
      let token = await this.authService.registerUser(user)
      return token 
    } 
    catch (error) { 
      console.log(error)
     } 
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() loginDTO: Record<string, any>) {
    return this.authService.login(loginDTO.username, loginDTO.password);
  }

}