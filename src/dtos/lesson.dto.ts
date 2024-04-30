import { Lesson } from "../entity/lesson";

export class LessonDTO {

    title: string ;
    content: string;
    video_url: string;
  
    constructor(title: string, content: string, video_url : string) {
        this.title = title;
        this.content = content;
        this.video_url = video_url;
    }

    static fromEntity(lesson: Lesson): LessonDTO {
        return new LessonDTO(lesson.title, lesson.content, lesson.video_url);
    }
   
}

