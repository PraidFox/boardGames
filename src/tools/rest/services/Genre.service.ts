import {axiosBG, PAR} from "../axios.config.ts";
import {GenreDTO} from "../../interfaces/DTO/boardGame.dto.ts";

export class GenreService {
    static async getGenres(): PAR<GenreDTO[]> {
        return await axiosBG.get(`/api/Genres`);
    }

    static async getGenre(genreId: number): PAR<GenreDTO> {
        return await axiosBG.get(`/api/Genres/${genreId}`);
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