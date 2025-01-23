import {axiosBG} from "../axios.config.ts";
import {OptionDTO} from "../../interfaces/DTO/boardGame.dto.ts";

export class TypeService {
    static async getTypes({signal}: { signal?: AbortSignal }): Promise<OptionDTO[]> {
        const {data} = await axiosBG.get(`/api/Types`, {signal});
        return data
    }

    static async getType(id: string | number): Promise<OptionDTO> {
       const {data} = await axiosBG.get(`/api/Types/${id}`);
       return data
    }

    static async addType(name: string): Promise<OptionDTO> {
        const {data} = await axiosBG.post(`/api/Types`, {id: 0, name});
        return data
    }

    static async updateType(id: string, name: string) {
        const {data} = await axiosBG.put(`/api/Types/${id}`, {id, name});
        return data
    }

    static async deleteType(id: number | string) {
        const {data} = await axiosBG.delete(`/api/Types/${id}`,);
        return data
    }
}