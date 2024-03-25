import axios from "axios";
import {axiosBG, axiosBGauth} from "./AxiosDefault";

export class GenreApi {
    static getGenre() {
        return axiosBG.get(`/api/Genre`);
    }

    static addGenre(name: string) {
        return axiosBGauth.post(`/api/Genre`, {id: 0, name});
    }

    static updateGenre(id: string, name: string) {
        return axiosBGauth.put(`/api/Genre/${id}`, {id, name});
    }

    static deleteGenre(id: number) {
        return axiosBGauth.delete(`/api/Genre/${id}`,);
    }
}