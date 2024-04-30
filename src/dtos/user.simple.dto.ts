import { User } from "../entity/user";


export class UserSimpleDTO {

    username: string;
    email: string;
  
    constructor(username: string, email: string) {
        this.username = username;
        this.email = email;
    }

    static toEntity(userRegisterDTO : UserSimpleDTO): User {
        let user = new User()
        user.username = userRegisterDTO.username;
        user.email = userRegisterDTO.email;
        return user
    }

    static fromEntity(user: User): UserSimpleDTO {
        return new UserSimpleDTO(user.username, user.email);
    }
  
}