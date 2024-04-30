import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../entity/user';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService  {
  
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async registerUser(user: User): Promise<User> { 
    return await this.userRepository.save(user);
  }


  async getUserById(id: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id: id }});
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async getAllUsers(): Promise<User[]> {
      return await this.userRepository.find();
  }

  async getUserByUsername(username: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { username: username }});
    if (!user) {
      throw new NotFoundException(`User with username ${username} not found`);
    }
    return user;
  }
  
}
  

