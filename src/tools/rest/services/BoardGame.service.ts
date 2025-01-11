import {axiosBG} from "../axios.config.ts";
import {FilterBoardRequest} from "../../interfaces/other.Interface.ts";
import {BoardGameDTO, CreateGameDTO} from "../../interfaces/DTO/boardGame.dto.ts";
import {AxiosResponse} from "axios";

export class BoardGameService {
    static getAllBoardGame() {
        return axiosBG.get(`/api/BoardGame`);
    }

    static getFilterBoardGame(params: FilterBoardRequest): Promise<AxiosResponse<BoardGameDTO[]>> {
        return axiosBG.get(`/api/BoardGame`, {params});
    }

    static getBoardGame(id: string) {
        return axiosBG.get(`/api/BoardGame/${id}`);
    }

    static addBoardGame(data: CreateGameDTO) {
        return axiosBG.post(`/api/BoardGame`, {id: 0, ...data});
    }

    static updateBoardGame(id: string, name: string) {
        return axiosBG.put(`/api/BoardGame/${id}`, {id, name});
    }

    static deleteBoardGame(id: number | string) {
        return axiosBG.delete(`/api/BoardGame/${id}`,);
    }
}