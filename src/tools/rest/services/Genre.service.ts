import {axiosBG} from "../axios.config.ts";

export class GenreService {
    static getGenre() {
        return axiosBG.get(`/api/Genres`);
    }

    static addGenre(name: string) {
        return axiosBG.post(`/api/Genres`, {id: 0, name});
    }

    static updateGenre(id: string, name: string) {
        return axiosBG.put(`/api/Genres/${id}`, {id, name});
    }

    static deleteGenre(id: number | string) {
        return axiosBG.delete(`/api/Genres/${id}`,);
    }
}