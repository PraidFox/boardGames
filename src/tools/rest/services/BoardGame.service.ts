import {axiosBG, PAR} from "../axios.config.ts";
import {
    AllBoardGameDTO,
    BoardGameFullInfoDto,
    CreateGameDTO,
    FilterGamesDTO
} from "../../interfaces/DTO/boardGame.dto.ts";

export class BoardGameService {
    // static async getAllBoardGame(): PAR<ManyBoardGameDTO> {
    //     return await axiosBG.get(`/api/BoardGame`);
    // }

    static async getBoardGame(id: string): Promise<BoardGameFullInfoDto> {
        const {data} = await axiosBG.get(`/api/BoardGame/${id}`);
        return data
    }

    static async addBoardGame(data: CreateGameDTO) {
        return await axiosBG.post(`/api/BoardGame`, data);
    }

    static async updateBoardGame(id: string, data: CreateGameDTO) {
        return await axiosBG.put(`/api/BoardGame/${id}`, {id, ...data});
    }

    static async deleteBoardGame(id: number | string) {
        const {data} = await axiosBG.delete(`/api/BoardGame/${id}`);
        return data
    }

    static async getFilterBoardGame(params: FilterGamesDTO, {signal}: { signal?: AbortSignal }): PAR<AllBoardGameDTO> {
        return await axiosBG.get(`/api/BoardGame`, {params, signal});
    }
}