import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Course } from "../entity/course";
import { Repository } from "typeorm";

@Injectable()
export class CourseService{
    
    constructor(
        @InjectRepository(Course)
        private readonly courseRepository: Repository<Course>
    ) {}


    async getCourseById(id: string) {
        const course = await this.courseRepository.findOne({ where: { id: id }});
        if (!course) {
            throw new NotFoundException(`Course with id ${id} not found`);
        }
        return course;
    }

    async getAllCourses() {
        return await this.courseRepository.find();
    }

}
