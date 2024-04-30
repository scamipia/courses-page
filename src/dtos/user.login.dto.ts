import { User } from "../entity/user";


export class LoginDTO {
    
    username: string;
    password: string;
  
    constructor(username: string, password : string) {
        this.username = username;
        this.password = password;
    }

    static toEntity(loginDTO : LoginDTO): User {
        let user = new User()
        user.username = loginDTO.username;
        user.password = loginDTO.password;
        return user
    }

    static fromEntity(user: User): LoginDTO {
        return new LoginDTO(user.username, user.password);
    }
   
}