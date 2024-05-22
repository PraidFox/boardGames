import {axiosBG, axiosBGauth} from "./AxiosDefault";

export class GenreApi {
    static getGenre() {
        return axiosBG.get(`/api/Genres`);
    }

    static addGenre(name: string) {
        return axiosBGauth.post(`/api/Genres`, {id: 0, name});
    }

    static updateGenre(id: string, name: string) {
        return axiosBGauth.put(`/api/Genres/${id}`, {id, name});
    }

    static deleteGenre(id: number | string) {
        return axiosBGauth.delete(`/api/Genres/${id}`,);
    }
}