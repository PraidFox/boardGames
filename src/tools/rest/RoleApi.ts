import {axiosBGauth} from "./AxiosDefault";

export class RoleApi {
    static getRoles() {
        return axiosBGauth.get(`/api/roles`);
    }

    static addRole(name: string) {
        return axiosBGauth.post(`/api/roles/`, name);
    }

    static updateRole(id: string, name: string) {
        return axiosBGauth.put(`/api/roles/${id}`, {id, name});
    }


}