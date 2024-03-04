import axios from "axios";
import {axiosBG} from "./AxiosDefault";

export class GenreApi {
    static getGenre() {
        return axiosBG.get(`/api/Genre`);
    }

    static addGenre(name: string) {
        return axiosBG.post(`/api/Genre`, {id: 0, name});
    }

    static updateGenre(id: string, name: string) {
        return axiosBG.put(`/api/Genre/${id}`, {id, name});
    }

    static deleteGenre(id: number) {
        return axiosBG.delete(`/api/Genre/${id}`,);
    }
}