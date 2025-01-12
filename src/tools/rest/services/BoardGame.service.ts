import {axiosBG, PAR} from "../axios.config.ts";
import {
    CreateGameDTO,
    CurrentBoardGameDto,
    FilterGamesDTO,
    ManyBoardGameDTO
} from "../../interfaces/DTO/boardGame.dto.ts";

export class BoardGameService {
    // static async getAllBoardGame(): PAR<ManyBoardGameDTO> {
    //     return await axiosBG.get(`/api/BoardGame`);
    // }

    static async getBoardGame(id: string): PAR<CurrentBoardGameDto> {
        return await axiosBG.get(`/api/BoardGame/${id}`);
    }

    static async addBoardGame(data: CreateGameDTO) {
        return await axiosBG.post(`/api/BoardGame`, data);
    }

    static async updateBoardGame(id: string, data: CreateGameDTO) {
        return await axiosBG.put(`/api/BoardGame/${id}`, {id, ...data});
    }

    static async deleteBoardGame(id: number | string) {
        return await axiosBG.delete(`/api/BoardGame/${id}`,);
    }

    static async getFilterBoardGame(params: FilterGamesDTO, {signal}: { signal?: AbortSignal }): PAR<ManyBoardGameDTO> {
        return await axiosBG.get(`/api/BoardGame`, {params, signal});
    }
}