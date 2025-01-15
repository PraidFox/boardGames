import {axiosBG, PAR} from "../axios.config.ts";
import {OptionDTO} from "../../interfaces/DTO/boardGame.dto.ts";

export class RoleService {
    static async getRoles(): PAR<OptionDTO[]> {
        return await axiosBG.get(`/api/roles`);
    }

    static async addRole(name: string) {
        return await axiosBG.post(`/api/roles/`, name);
    }

    static async updateRole(currentName: string, newName: string) {
        return await axiosBG.put(`/api/roles/${currentName}`, newName);
    }

    static async deleteRole(name: string) {
        return await axiosBG.delete(`/api/roles/${name}`);
    }
}