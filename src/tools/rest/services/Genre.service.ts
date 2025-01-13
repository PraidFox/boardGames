import {axiosBG, PAR} from "../axios.config.ts";
import {GenreDTO} from "../../interfaces/DTO/boardGame.dto.ts";

export class GenreService {
    static async getGenres({signal}: { signal?: AbortSignal }): Promise<GenreDTO[]> {
        const {data} = await axiosBG.get(`/api/Genres`, {signal});
        return data
    }

    static async getGenre(genreId: number, {signal}: { signal?: AbortSignal }): PAR<GenreDTO> {
        return await axiosBG.get(`/api/Genres/${genreId}`, {signal});
    }

    static async addGenre(name: string): PAR<GenreDTO> {
        return await axiosBG.post(`/api/Genres`, {id: 0, name});
    }

    static async updateGenre(id: string, name: string): PAR<GenreDTO> {
        return await axiosBG.put(`/api/Genres/${id}`, {id, name});
    }

    static async deleteGenre(id: number | string): PAR<void> {
        return await axiosBG.delete(`/api/Genres/${id}`,);
    }
}