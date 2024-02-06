import axios from "axios";
import {AxiosDefault} from "./AxiosDefault";

export class GenreApi {
    static token = localStorage.getItem("access")
    static getGenre() {
        return axios.get(AxiosDefault.baseUrl() + `/api/Genre`);
    }
    static addGenre(name: string) {
        console.log(this.token)
        return axios.post(AxiosDefault.baseUrl() + `/api/Genre`, {id: 0, name});
    }
    static updateGenre(id: string, name: string) {
        return axios.put(AxiosDefault.baseUrl() + `/api/Genre/${id}`, {id, name});
    }
    static deleteGenre(id: number) {
        return axios.delete(AxiosDefault.baseUrl() + `/api/Genre/${id}`, );
    }
}