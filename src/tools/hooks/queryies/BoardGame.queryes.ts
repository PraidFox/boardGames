import {useQuery} from "@tanstack/react-query";
import {FilterGamesDTO} from "../../interfaces/DTO/boardGame.dto.ts";
import {BoardGameService} from "../../rest/services/BoardGame.service.ts";

export const useFilterBoardGames = (filter: FilterGamesDTO) => {
    return useQuery({
        queryKey: ['getBoardGames', filter],
        queryFn: async (meta) => {
            return await BoardGameService.getFilterBoardGame(filter, meta)
        },
        select: (data) => {
            return data.data
        },
    })
}