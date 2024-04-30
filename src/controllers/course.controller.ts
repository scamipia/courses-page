import {Controller, Get, Param} from "@nestjs/common";
import { CourseService } from "../services/course.service";
import { CourseDTO } from "../dtos/Course.dto";


@Controller('courses')
export class CourseController {

    constructor(
        private courseService: CourseService, 
    ) {}

    @Get('/:id')
    async getCourseById(
      @Param('id') id: string
    ): Promise<CourseDTO> {

      try {
        let course = await this.courseService.getCourseById(id)
        let dto = CourseDTO.fromEntity(course)
        return dto 
      }    
      catch (error) { 
        console.log(error)
      }
    }
  
    @Get()
    async getAllCourses(): Promise<CourseDTO[]> {
      let courses = await this.courseService.getAllCourses();
      return courses.map((course) => CourseDTO.fromEntity(course))
    }

}