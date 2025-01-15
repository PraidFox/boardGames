import {useMutation} from "@tanstack/react-query";
import {GameRatingService} from "../../rest/services/GameRating.service.ts";
import {queryClient} from "../../rest/query.config.ts";

export const useAddRatingGame = () => {
    return useMutation({
        mutationKey: ["addRatingGame"],
        mutationFn:  ({gameId, rating} : {gameId: string, rating: number}) => {
            return  GameRatingService.addRating(gameId, rating);
        },
        onSuccess: async (_, variables ) => {
            await queryClient.invalidateQueries({queryKey: ["getBoardGame", variables.gameId]});
        }
    })
}