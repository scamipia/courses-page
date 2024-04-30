import {Controller, Post, Get, Param, UseGuards, Request} from "@nestjs/common";
import { UserService } from "../services/user.service";
import { UserSimpleDTO } from "../dtos/user.simple.dto";
import { AuthGuard } from '../auth/auth.guard';


@Controller('users')
export class UserController {

  constructor(
    private userService: UserService, 
  ) {}

  @UseGuards(AuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    const userId = req.user.id;
    let recoveredUser = await this.userService.getUserById(userId)
    let dto = UserSimpleDTO.fromEntity(recoveredUser)
    return dto 
  }

  @Get('/:id')
  async getUserById(@Param('id') id: string): Promise<UserSimpleDTO> {
    try {
      let recoveredUser = await this.userService.getUserById(id)
      let dto = UserSimpleDTO.fromEntity(recoveredUser)
      return dto 
    }    
    catch (error) { 
      console.log(error)
    }
  }

  @Get()
  async getAllUsers(): Promise<UserSimpleDTO[]> {
    let users = await this.userService.getAllUsers();
    return users.map((user) => UserSimpleDTO.fromEntity(user))
  }
  
}