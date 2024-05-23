import {axiosBGauth} from "./AxiosDefault";


export class UsersApi {
    static getAllUsers() {
        return axiosBGauth.get(`/api/Users`);
    }

    static getMe = () => {
        return axiosBGauth.get(`/api/Users/GetMe`);
    }

    static getUser = (userName: string) => {
        return axiosBGauth.get(`/api/Users/${userName}`);
    }

    static getUserRoles = (userName: string) => {
        return axiosBGauth.get(`/api/users/${userName}/roles`);
    }

    static addGBtoUser(boardGameId: string) {
        return axiosBGauth.post(`/api/UserBoardGame?boardGameId=${boardGameId}`);
    }


    static getUserBoardGames(userName: string) {
        //Добавить по дефолту что-то типо userName=${localStorage.getItem("userName")}
        return axiosBGauth.get(`/api/UserBoardGame/GetUserBoardGames?userName=${userName}`);
    }


    // static addRoleToUser(roles: string[], userName: string) {
    //     return axiosBGauth.post(`/api/roles/AssignRoles/userName=${userName}`, {roles});
    // }

    static recordRoleToUser(roles: string[], userName: string) {
        return axiosBGauth.post(`/api/users/${userName}/roles/AssignRoles`, {roles});
    }

}