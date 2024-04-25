import {CreateBoardGame} from "../interfaces/boardGameInterface";
import {axiosBG, axiosBGauth} from "./AxiosDefault";

export class BoardGameApi {
    static getAllBoardGame() {
        // return axios.get(`/api/BoardGame`, {params: {tt: "wqeqwe"}});
        return axiosBG.get(`/api/BoardGame`);
    }
    
    static getBoardGame(id: number) {
        return axiosBG.get(`/api/BoardGame/${id}`);
    }

    static addBoardGame(data: CreateBoardGame) {
        return axiosBGauth.post(`/api/BoardGame`, {id: 0, ...data});
    }

    static updateBoardGame(id: string, name: string) {
        return axiosBGauth.put(`/api/BoardGame/${id}`, {id, name});
    }

    static deleteBoardGame(id: number) {
        return axiosBGauth.delete(`/api/BoardGame/${id}`,);
    }
}