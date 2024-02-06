import axios from "axios";
import {AxiosDefault} from "./AxiosDefault";

export class GenreApi {
    static getGenre() {
        return axios.get(AxiosDefault.baseUrl() + `/api/Genre`);
    }
    static addGenre(name: string) {
        return axios.post(AxiosDefault.baseUrl() + `/api/Genre`, {id: 0, name});
    }
    static updateGenre(id: string, name: string) {
        return axios.put(AxiosDefault.baseUrl() + `/api/Genre/${id}`, {id, name});
    }
    static deleteGenre(id: string) {
        return axios.delete(AxiosDefault.baseUrl() + `/api/Genre/${id}`, );
    }
}