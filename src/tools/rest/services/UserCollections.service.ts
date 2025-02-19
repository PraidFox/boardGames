import {axiosBG, PAR} from "../axios.config";
import {
    CurrentGameCollectionDTO,
    GameCollectionPatchDto,
    ManyGameCollectionDTO
} from "../../interfaces/DTO/userColletions.dto.ts";


export class UserCollectionsService {

    static async getUserCollections(userName: string, {signal}: { signal?: AbortSignal }): Promise<ManyGameCollectionDTO> {
        const {data} = await axiosBG.get(`/api/collections?userName=${userName}`, {signal});
        return data
    }

    static async addEmptyCollection() {
        const {data} = await axiosBG.post(`/api/collections`, {});
        return data
    }

    static async addCollection(collections: GameCollectionPatchDto) {
        return await axiosBG.post(`/api/collections`, collections);
    }

    static async getCollection({userName, collectionAlias}: {
        userName: string,
        collectionAlias: string
    }): Promise<CurrentGameCollectionDTO> {
        const {data} = await axiosBG.get(`/api/collections/alias?alias=${collectionAlias}&&includeGames=true&&userName=${userName}`);
        return data
    }

    static async deletedCollection(collectionAlias: string) {
        const {data} = await axiosBG.delete(`/api/collections/${collectionAlias}`);
        return data
    }

    static async changeDataCollection(collectionAlias: string, patchData: GameCollectionPatchDto) {
        const {data} = await axiosBG.patch(`/api/collections/${collectionAlias}`, patchData);
        return data
    }

    /**Получить список коллекций в которые входит игра*/
    static async getCollectionsContainingGame(gameId: string | number): PAR<CurrentGameCollectionDTO[]> {
        return await axiosBG.get(`/api/collections?gameId=${gameId}`);
    }

    static async addGameInCollection(collectionAlias: string, gameId: string) {
        return await axiosBG.put(`/api/collections/${collectionAlias}/game/${gameId}`);
    }

    static async deletedGameInCollection(collectionAlias: string, gameId: string) {
        return await axiosBG.delete(`/api/collections/${collectionAlias}/game/${gameId}`);
    }

    static async addGamesInCollection(collectionAlias: string, gameIds: string[]) {
       const {data} = await axiosBG.put(`/api/collections/${collectionAlias}/game`, gameIds);
       return data
    }

    // static deletedGamesInCollection(collectionAlias: string, gameIds: string[]) {
    //     return axiosBG.delete(`/api/collections/${collectionAlias}/game`, {gameIds});
    // }

}