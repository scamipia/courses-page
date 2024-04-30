import { Entity, PrimaryColumn, Column, BaseEntity, OneToMany} from "typeorm";
import { Lesson } from "./lesson";


@Entity()
export class Course extends BaseEntity {

    @PrimaryColumn() 
    id: string;

    @Column() 
    title: string ;

    @Column({ nullable: true }) 
    description: string;

    @Column() 
    instructor: string;

    @Column() //cantidad de dias
    duration: number;

    @Column() 
    price: number;

    @OneToMany(() => Lesson, lesson => lesson.course)
    lessons: Lesson[];
}