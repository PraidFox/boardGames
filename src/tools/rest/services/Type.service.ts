import {axiosBG} from "../axios.config.ts";

export class TypeService {
    static getType() {
        return axiosBG.get(`/api/Types`);
    }

    static addType(name: string) {
        return axiosBG.post(`/api/Types`, {id: 0, name});
    }

    static updateType(id: string, name: string) {
        return axiosBG.put(`/api/Types/${id}`, {id, name});
    }

    static deleteType(id: number | string) {
        return axiosBG.delete(`/api/Types/${id}`,);
    }
}