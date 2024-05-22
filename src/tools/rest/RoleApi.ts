import {axiosBGauth} from "./AxiosDefault";

export class RoleApi {
    static getRoles() {
        return axiosBGauth.get(`/api/roles`);
    }

    static addRole(name: string) {
        return axiosBGauth.post(`/api/roles?name=${name}`);
    }

    static updateRole(id: string, name: string) {
        return axiosBGauth.put(`/api/roles/${id}`, {id, name});
    }

    // static addRoleToUser(roles: string[], userName: string) {
    //     return axiosBGauth.post(`/api/roles/AssignRoles/userName=${userName}`, {roles});
    // }

    static addRoleToUser(roles: string[], userName: string) {
        return axiosBGauth.post(`/api/roles/AssignRoles/userName=${userName}`,
            {
                userName: 'Text',
                request: ['string']
            });
    }

}