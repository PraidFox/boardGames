import axios from "axios";
import {AxiosDefault} from "./AxiosDefault";

export class BoardGameApi {
    static getBoardGame() {
        return axios.get(AxiosDefault.baseUrl() + `/api/BoardGame`);
    }
    static addBoardGame(name: string) {
        return axios.post(AxiosDefault.baseUrl() + `/api/BoardGame`, {id: 0, name});
    }
    static updateBoardGame(id: string, name: string) {
        return axios.put(AxiosDefault.baseUrl() + `/api/BoardGame/${id}`, {id, name});
    }
    static deleteBoardGame(id: number) {
        return axios.delete(AxiosDefault.baseUrl() + `/api/BoardGame/${id}`, );
    }
}