import {axiosBGauth} from "./AxiosDefault";


export class UsersApi {
    static getAllUsers() {
        return axiosBGauth.get(`/api/Users`);
    }

    static addGBtoUser(boardGameId: string) {
        return axiosBGauth.post(`/api/UserBoardGame?boardGameId=${boardGameId}`);
    }

    static getUserBoardGames(userName: string) {
        //Добавить по дефолту что-то типо userName=${localStorage.getItem("userName")}
        return axiosBGauth.get(`/api/UserBoardGame/GetUserBoardGames?userName=${userName}`);
    }


}