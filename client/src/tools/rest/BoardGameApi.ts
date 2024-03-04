import {CreateBoardGame} from "../interfaces/boardGameInterface";
import {axiosBG} from "./AxiosDefault";

export class BoardGameApi {
    static getBoardGame() {
        // return axios.get(`/api/BoardGame`, {params: {tt: "wqeqwe"}});
        return axiosBG.get(`/api/BoardGame`);
    }

    static addBoardGame(data: CreateBoardGame) {
        return axiosBG.post(`/api/BoardGame`, {id: 0, ...data});
    }

    static updateBoardGame(id: string, name: string) {
        return axiosBG.put(`/api/BoardGame/${id}`, {id, name});
    }

    static deleteBoardGame(id: number) {
        return axiosBG.delete(`/api/BoardGame/${id}`,);
    }
}