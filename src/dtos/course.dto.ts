import { Course } from "../entity/course";

export class CourseDTO {

    title: string ;
    description: string;
    instructor: string;
  
    constructor(title: string, description: string, instructor : string) {
        this.title = title;
        this.description = description;
        this.instructor = instructor;
    }

    static fromEntity(course: Course): CourseDTO {
        return new CourseDTO(course.title, course.description, course.instructor);
    }
   
}