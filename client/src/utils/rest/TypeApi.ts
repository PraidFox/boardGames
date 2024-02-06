import axios from "axios";
import {AxiosDefault} from "./AxiosDefault";

export class TypeApi {
    static getType() {
        return axios.get(AxiosDefault.baseUrl() + `/api/Type`);
    }
    static addType(name: string) {
        return axios.post(AxiosDefault.baseUrl() + `/api/Type`, {id: 0, name});
    }
    static updateType(id: string, name: string) {
        return axios.put(AxiosDefault.baseUrl() + `/api/Type/${id}`, {id, name});
    }
    static deleteType(id: number) {
        return axios.delete(AxiosDefault.baseUrl() + `/api/Type/${id}`, );
    }
}