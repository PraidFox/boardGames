import {keepPreviousData, skipToken, useMutation, useQuery} from "@tanstack/react-query";
import {FilterGamesDTO} from "../../interfaces/DTO/boardGame.dto.ts";
import {BoardGameService} from "../../rest/services/BoardGame.service.ts";

export const useGetBoardGame = (id: string | undefined) => {
    return useQuery({
        queryKey: ['getBoardGame', id],
        queryFn: id ?  () => {
            return  BoardGameService.getBoardGame(id)
        } : skipToken
    })
}

export const useFilterBoardGames = (filter: FilterGamesDTO) => {
    return useQuery({
        queryKey: ['getBoardGames', filter],
        queryFn: async (meta) => {
            return await BoardGameService.getFilterBoardGame(filter, meta)
        },
        select: (data) => {
            return data.data
        },
        placeholderData: keepPreviousData
    })
}

export const useDeletedBoardGames = () => {
    return useMutation({
        mutationKey: ["deleteBoardGame"],
        mutationFn: async (id: string) => {
            return BoardGameService.deleteBoardGame(id);
        },
    })
}
