import {skipToken, useMutation, useQuery} from "@tanstack/react-query";
import {UserCollectionsService} from "../../rest/services/UserCollections.service.ts";
import {queryClient} from "../../rest/query.config.ts";
import {GameCollectionPatchDto} from "../../interfaces/DTO/userColletions.dto.ts";

export const useUserCollections = (userName: string | undefined) => {
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
        mutationFn: async (collectionAlias: string) => {
            return UserCollectionsService.deletedCollection(collectionAlias);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ['getUserCollections', userName]});
        },

    })
}

export const useGetCollection = (userName: string, collectionAlias?: string) => {
    return useQuery({
        queryKey: ['getCollection', userName, collectionAlias],
        queryFn: collectionAlias ?() => {
            return UserCollectionsService.getCollection({userName, collectionAlias});
        } : skipToken
    })
}

export const useAddGamesInCollection = (userName: string) => {
    return useMutation({
        mutationKey: ["addGamesInCollection"],
        mutationFn: async ({collectionAlias, gameIds}: {collectionAlias: string, gameIds: string[]}) => {
            return UserCollectionsService.addGamesInCollection(collectionAlias, gameIds);
        },
        onSuccess: async (_, {collectionAlias}) => {
            await queryClient.invalidateQueries({queryKey: ['getCollection', userName, collectionAlias]});
        }
    })
}

export const useAddGameInCollection = (userName: string) => {
    return useMutation({
        mutationKey: ["addGamesInCollection"],
        mutationFn: async ({collectionAlias, gameId}: {collectionAlias: string, gameId: string}) => {
            return UserCollectionsService.addGameInCollection(collectionAlias, gameId);
        },
        onSuccess: async (_, {collectionAlias}) => {
            await queryClient.invalidateQueries({queryKey: ['getCollection', userName, collectionAlias]});
        }
    })
}


export const useChangeDataCollection = (userName: string) => {
    return useMutation({
        mutationKey: ["changeDataCollection"],
        mutationFn: async ({collectionAlias, patchData}: {collectionAlias: string, patchData: GameCollectionPatchDto}) => {
            return UserCollectionsService.changeDataCollection(collectionAlias, patchData);
        },
        onSuccess: async (_, {collectionAlias}) => {
            await queryClient.invalidateQueries({queryKey: ['getCollection', userName, collectionAlias]});
            await queryClient.invalidateQueries({queryKey: ['getUserCollections', userName]});
        }
    })
}

export const useDeleteGameInCollection = (userName: string) => {
    return useMutation({
        mutationKey: ["deleteGameInCollection"],
        mutationFn: async ({collectionAlias, gameId}: {collectionAlias: string, gameId: string}) => {
            return UserCollectionsService.deletedGameInCollection(collectionAlias, gameId);
        },
        onSuccess: async (_, {collectionAlias}) => {
            await queryClient.invalidateQueries({queryKey: ['getCollection', userName, collectionAlias]});
        }
    })
}
