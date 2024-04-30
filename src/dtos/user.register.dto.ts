import { User } from "../entity/user";


export class UserRegisterDTO {
    
    username: string;
    email: string;
    password: string;
  
    constructor(username: string, email: string, password : string) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static toEntity(userRegisterDTO : UserRegisterDTO): User {
        let user = new User()
        user.username = userRegisterDTO.username;
        user.email = userRegisterDTO.email;
        user.password = userRegisterDTO.password;
        return user
    }

    static fromEntity(user: User): UserRegisterDTO {
        return new UserRegisterDTO(user.username, user.email, user.password);
    } 
    
}