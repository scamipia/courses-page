import { Entity, PrimaryColumn, Column, ManyToMany, ManyToOne, } from "typeorm";
import { Course } from "./course";


@Entity()
export class Lesson {

    @PrimaryColumn() 
    id: string;

    @Column() 
    title: string ;

    @Column({ nullable: true }) 
    content: string;

    @Column({ unique: true }) 
    video_url: string;

    @Column({type: "float"}) 
    duration: number; //float o double

    @ManyToOne(() => Course, course => course.lessons)
    course: Course;
    
}