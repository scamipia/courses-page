import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user';
import { UserController } from './controllers/user.controller';
import { ConfigModule } from '@nestjs/config';
import { UserService } from './services/user.service';
import { AuthService } from './auth/auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthController } from './auth/auth.controller';
import { typeOrmAsyncConfig } from './config/typeorm.config';
import { jwtConfig } from './config/jwt.config';
import { Course } from './entity/course';
import { CourseController } from './controllers/course.controller';
import { CourseService } from './services/course.service';
import { LessonService } from './services/lesson.service';
import { LessonController } from './controllers/lesson.controller';
import { Lesson } from './entity/lesson';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    TypeOrmModule.forFeature([User, Course, Lesson]),
    JwtModule.registerAsync(jwtConfig)],
  controllers: [UserController, AuthController, CourseController, LessonController],
  providers: [AuthService, UserService, JwtService, CourseService, LessonService],
})

export class AppModule {  }
