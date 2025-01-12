import {axiosBG, PAR} from "../axios.config";
import {
    CurrentGameCollectionDTO,
    GameCollectionPatchDto,
    ManyGameCollectionDTO
} from "../../interfaces/DTO/userColletions.dto.ts";


export class UserCollectionsService {

    static async getUserCollections(userName: string): PAR<ManyGameCollectionDTO> {
        return await axiosBG.get(`/api/collections?userName=${userName}`);
    }

    static async addEmptyCollection() {
        return await axiosBG.post(`/api/collections`, {});
    }

    static async addCollection(collections: GameCollectionPatchDto) {
        return await axiosBG.post(`/api/collections`, collections);
    }

    static async getCollection({userName, collectionAlias}: {
        userName: string,
        collectionAlias: string
    }): PAR<CurrentGameCollectionDTO> {
        return await axiosBG.get(`/api/collections/${collectionAlias}?includeGames=true&&userName=${userName}`);
    }

    static async deletedCollection(collectionAlias: string) {
        return await axiosBG.delete(`/api/collections/${collectionAlias}`);
    }

    static async changeDataCollection(collectionAlias: string, data: GameCollectionPatchDto) {
        return await axiosBG.patch(`/api/collections/${collectionAlias}`, data);
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
        return await axiosBG.put(`/api/collections/${collectionAlias}/game`, gameIds);
    }

    // static deletedGamesInCollection(collectionAlias: string, gameIds: string[]) {
    //     return axiosBG.delete(`/api/collections/${collectionAlias}/game`, {gameIds});
    // }

}