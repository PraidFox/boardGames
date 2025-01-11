import {axiosBG} from "../axios.config.ts";
import {AxiosPromise} from "axios";
import {UserDto} from "../../interfaces/DTO/user.dto.ts";


export class UsersService {
    static getAllUsers = () => {
        return axiosBG.get(`/api/Users`);
    }

    static getMe(): Promise<AxiosPromise<UserDto>> {
        return axiosBG.get(`/api/Users/GetMe`);
    }

    static getUser = (userName: string) => {
        return axiosBG.get(`/api/Users/${userName}`);
    }

    static getUserRoles = (userName: string) => {
        return axiosBG.get(`/api/users/${userName}/roles`);
    }

    static addGBtoUser(boardGameId: string) {
        return axiosBG.post(`/api/UserBoardGame?boardGameId=${boardGameId}`);
    }


    static getUserBoardGames(userName: string) {
        return axiosBG.get(`/api/users/${userName}/games`);
    }


    static recordRoleToUser(roles: string[], userName: string) {
        return axiosBG.put(`/api/users/${userName}/roles/AssignRoles`, roles);
    }

}