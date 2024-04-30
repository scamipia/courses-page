import { Entity, PrimaryColumn, Column, BeforeInsert, BaseEntity } from "typeorm";
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';


@Entity()
export class User extends BaseEntity{

    @PrimaryColumn("uuid") 
    id: string;

    @Column({ nullable: true }) 
    firstName: string ;

    @Column({ nullable: true }) 
    lastname: string;

    @Column({ unique: true })
    username: string;

    @Column() 
    email: string;

    @Column({ unique: true })
    password: string;

    @BeforeInsert()
    addId(){
        this.id = uuidv4();
    }

    @BeforeInsert()
    async hashPassword(password: string) {
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(password || this.password, salt);
    }
    
}