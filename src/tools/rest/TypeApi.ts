import {axiosBG, axiosBGauth} from "./AxiosDefault";

export class TypeApi {
    static getType() {
        return axiosBG.get(`/api/Types`);
    }

    static addType(name: string) {
        return axiosBGauth.post(`/api/Types`, {id: 0, name});
    }

    static updateType(id: string, name: string) {
        return axiosBGauth.put(`/api/Types/${id}`, {id, name});
    }

    static deleteType(id: number | string) {
        return axiosBGauth.delete(`/api/Types/${id}`,);
    }
}