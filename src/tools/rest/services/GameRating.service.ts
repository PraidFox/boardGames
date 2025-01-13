import {axiosBG, PAR} from "../axios.config.ts";

export class GameRatingService {

    static async addRating(gameId: string, rating: number) {
        return await axiosBG.put(`/api/games/${gameId}/rating`, rating);
    }

    static async getRating(gameId: number): PAR<number> {
        return await axiosBG.get(`/api/games/${gameId}/rating`);
    }
}