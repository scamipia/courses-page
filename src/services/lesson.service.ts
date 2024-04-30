import { InjectRepository } from "@nestjs/typeorm";
import { Lesson } from "../entity/lesson";
import { Repository } from "typeorm";
import { NotFoundException } from "@nestjs/common";

export class LessonService {

    constructor(
        @InjectRepository(Lesson)
        private readonly lessonRepository: Repository<Lesson>,
    ) {}


    async getLessonFromCourse(lessonId: string, courseId: string) : Promise<Lesson> {

        const lesson = await this.lessonRepository
        .createQueryBuilder('lesson')
        .innerJoin('lesson.course', 'course', 'course.id = :courseId',{ courseId: courseId })
        .where('lesson.id = :lessonId',{ lessonId: lessonId })
        .getOne();
    
        if (!lesson) {
            throw new NotFoundException(`Lesson with ID ${lessonId} not found in course with ID ${courseId}`);
        }

        return lesson
    }
}