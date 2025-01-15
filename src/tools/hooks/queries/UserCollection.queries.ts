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

export const useAddEmptyCollection = (userName: string) => {
    return useMutation({
        mutationKey: ["addEmptyCollection"],
        mutationFn: async () => {
            return UserCollectionsService.addEmptyCollection();
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ['getUserCollections', userName]});
        }
    })
}

export const useDeleteCollection = (userName: string) => {
    return useMutation({
        mutationKey: ["deleteCollection"],
        mutationFn: async ({collectionAlias}: {collectionAlias: string}) => {
            return UserCollectionsService.deletedCollection(collectionAlias);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ['getUserCollections', userName]});
        }
    })
}