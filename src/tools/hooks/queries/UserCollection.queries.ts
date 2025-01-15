import {skipToken, useMutation, useQuery} from "@tanstack/react-query";
import {UserCollectionsService} from "../../rest/services/UserCollections.service.ts";
import {queryClient} from "../../rest/query.config.ts";

export const useUserCollections = (userName?: string) => {
    return useQuery({
        queryKey: ['getUserCollections', userName],
        queryFn: userName ? (meta) => {
            return UserCollectionsService.getUserCollections(userName, meta)
        } : skipToken
    })
}

export const useAddEmptyCollection = () => {
    return useMutation({
        mutationKey: ["addEmptyCollection"],
        mutationFn: async (userName: string) => {
            return UserCollectionsService.addEmptyCollection();
        },
        onSuccess: async (_, variables) => {
            await queryClient.invalidateQueries({queryKey: ['getUserCollections', variables]});
        }
    })
}

export const useDeleteCollection = () => {
    return useMutation({
        mutationKey: ["deleteCollection"],
        mutationFn: async ({collectionAlias, userName}: {collectionAlias: string, userName: string}) => {
            return UserCollectionsService.deletedCollection(collectionAlias);
        },
        onSuccess: async (_, {userName}) => {
            await queryClient.invalidateQueries({queryKey: ['getUserCollections', userName]});
        }
    })
}