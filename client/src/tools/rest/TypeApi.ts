import axios from "axios";
import {axiosBG} from "./AxiosDefault";

export class TypeApi {
    static getType() {
        return axiosBG.get(`/api/Type`);
    }

    static addType(name: string) {
        return axiosBG.post(`/api/Type`, {id: 0, name});
    }

    static updateType(id: string, name: string) {
        return axiosBG.put(`/api/Type/${id}`, {id, name});
    }

    static deleteType(id: number) {
        return axiosBG.delete(`/api/Type/${id}`,);
    }
}