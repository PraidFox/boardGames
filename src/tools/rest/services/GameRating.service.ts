import {axiosBG} from "../axios.config.ts";

export class GameRatingService {

    static addRating(gameId: string, rating: number) {
        return axiosBG.put(`/api/games/${gameId}/rating`, rating);
    }

}