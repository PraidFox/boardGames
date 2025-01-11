import {axiosBG} from "../axios.config.ts";

export class RoleService {
    static getRoles() {
        return axiosBG.get(`/api/roles`);
    }

    static addRole(name: string) {
        return axiosBG.post(`/api/roles/`, name);
    }

    static updateRole(id: string, name: string) {
        return axiosBG.put(`/api/roles/${id}`, {id, name});
    }


}