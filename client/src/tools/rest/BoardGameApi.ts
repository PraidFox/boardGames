import axios from "axios";
import {AxiosDefault} from "./AxiosDefault";
import {CreateBoardGame} from "../interfaces/boardGameInterface";

export class BoardGameApi {
    static getBoardGame() {
        return axios.get(AxiosDefault.baseUrl() + `/api/BoardGame`);
    }

    static addBoardGame(data: CreateBoardGame) {
        return axios.post(AxiosDefault.baseUrl() + `/api/BoardGame`, {id: 0, ...data});
    }

    static updateBoardGame(id: string, name: string) {
        return axios.put(AxiosDefault.baseUrl() + `/api/BoardGame/${id}`, {id, name});
    }

    static deleteBoardGame(id: number) {
        return axios.delete(AxiosDefault.baseUrl() + `/api/BoardGame/${id}`,);
    }
}