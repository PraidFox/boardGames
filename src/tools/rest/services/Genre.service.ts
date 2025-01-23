import {axiosBG} from "../axios.config.ts";
import {GenreDTO} from "../../interfaces/DTO/boardGame.dto.ts";

export class GenreService {
    static async getGenres({signal}: { signal?: AbortSignal }): Promise<GenreDTO[]> {
        const {data} = await axiosBG.get(`/api/Genres`, {signal});
        return data
    }

    static async getGenre(genreId: number, {signal}: { signal?: AbortSignal }): Promise<GenreDTO> {
        return await axiosBG.get(`/api/Genres/${genreId}`, {signal});
    }

    static async addGenre(name: string): Promise<GenreDTO> {
        const {data} = await axiosBG.post(`/api/Genres`, {id: 0, name});
        return data
    }

    static async updateGenre(id: string, name: string): Promise<GenreDTO> {
        return await axiosBG.put(`/api/Genres/${id}`, {id, name});
    }

    static async deleteGenre(id: number | string): Promise<void> {
        const {data} = await axiosBG.delete(`/api/Genres/${id}`,);
        return data
    }
}