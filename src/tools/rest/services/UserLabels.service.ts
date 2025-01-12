//TODO а оно вообще на беке работает?
import {axiosBG} from "../axios.config.ts";

export class UserLabelsService {
    static async getLabelsGame(gameId: string) {
        return await axiosBG.get(`/api/labels/${gameId}`);
    }

    static async addLabelGame(gameId: string, label: string) {
        return await axiosBG.post(`/api/labels/${gameId}`, label);
    }

    static async deleteLabelGame(gameId: string) {
        return await axiosBG.delete(`/api/labels/${gameId}`);
    }

    static async getLabelsUser() {
        return await axiosBG.get(`/api/labels`);
    }
}