import {axiosBGauth} from "./AxiosDefault";

export class GameRatingApi {

    static addRating(gameId: string, rating: number) {
        return axiosBGauth.put(`/api/games/${gameId}/rating`, rating);
    }

}