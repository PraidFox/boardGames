import {axiosBG, PAR} from "../axios.config.ts";
import {OptionDTO} from "../../interfaces/DTO/boardGame.dto.ts";

export class TypeService {
    static async getTypes(): PAR<OptionDTO[]> {
        return await axiosBG.get(`/api/Types`);
    }

    static async getType(id: string | number): PAR<OptionDTO> {
        return await axiosBG.get(`/api/Types/${id}`);
    }

    static async addType(name: string): PAR<OptionDTO> {
        return await axiosBG.post(`/api/Types`, {id: 0, name});
    }

    static async updateType(id: string, name: string) {
        return await axiosBG.put(`/api/Types/${id}`, {id, name});
    }

    static async deleteType(id: number | string) {
        return await axiosBG.delete(`/api/Types/${id}`,);
    }
}