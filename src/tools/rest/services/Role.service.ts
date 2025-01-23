import {axiosBG} from "../axios.config.ts";
import {OptionDTO} from "../../interfaces/DTO/boardGame.dto.ts";

export class RoleService {
    static async getRoles({signal}: { signal?: AbortSignal }): Promise<OptionDTO[]> {
        const {data} = await axiosBG.get(`/api/roles`, {signal});
        return data
    }

    static async addRole(name: string) {
        return await axiosBG.post(`/api/roles/`, name);
    }

    static async updateRole(currentName: string, newName: string) {
        return await axiosBG.put(`/api/roles/${currentName}`, newName);
    }

    static async deleteRole(name: string) {
        const {data} = await axiosBG.delete(`/api/roles/${name}`);
        return data
    }
}