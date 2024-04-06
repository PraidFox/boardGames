import {axiosBG, axiosBGauth} from "./AxiosDefault";

export class TypeApi {
    static getType() {
        return axiosBG.get(`/api/Type`);
    }

    static addType(name: string) {
        return axiosBGauth.post(`/api/Type`, {id: 0, name});
    }

    static updateType(id: string, name: string) {
        return axiosBGauth.put(`/api/Type/${id}`, {id, name});
    }

    static deleteType(id: number) {
        return axiosBGauth.delete(`/api/Type/${id}`,);
    }
}