import {axiosBGauth} from "./AxiosDefault";


export class UserCollections {
    static getUserBoardGames(userName: string) {
        return axiosBGauth.get(`/api/collections/${userName}`);
    }


}