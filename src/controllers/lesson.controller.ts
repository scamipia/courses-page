import {Controller, Get, Param} from "@nestjs/common";
import { LessonService } from "../services/lesson.service";
import { LessonDTO } from "../dtos/lesson.dto";


@Controller('lessons')
export class LessonController {

    constructor(
        private lessonService: LessonService
    ) {}

    @Get('/:lessonId/courses/:courseId')
    async getLesson_FromCourse_(
      @Param('courseId') courseId: string,
      @Param('lessonId') lessonId: string 
    ) : Promise<LessonDTO> {

      try {
        let lesson = await this.lessonService.getLessonFromCourse(lessonId, courseId)
        let lessonDTO = LessonDTO.fromEntity(lesson)
        return lessonDTO 
      }    
      catch (error) { 
        console.log(error)
      }
    }


}