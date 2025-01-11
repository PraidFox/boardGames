import {axiosBG} from "../axios.config.ts";
import {GameCollectionPatchDto} from "../../interfaces/DTO/boardGame.dto.ts";


export class UserCollectionsService {

    static getUserCollections(userName: string) {
        return axiosBG.get(`/api/collections?userName=${userName}`);
    }

    static addEmptyCollection(userName: string) {
        return axiosBG.post(`/api/collections`, {});
    }

    static getCollection({userName, collectionAlias}: { userName: string, collectionAlias: string }) {


        return axiosBG.get(`/api/collections/${collectionAlias}?includeGames=true&&userName=${userName}`);
    }

    static deletedCollection(collectionAlias: string) {
        return axiosBG.delete(`/api/collections/${collectionAlias}`);
    }

    static changeDataCollection(collectionAlias: string, data: GameCollectionPatchDto) {
        return axiosBG.patch(`/api/collections/${collectionAlias}`, data);
    }

    static addGameInCollection(userName: string, collectionAlias: string, gameId: string) {
        return axiosBG.put(`/api/collections/${collectionAlias}/game/${gameId}`);
    }

    static deletedGameInCollection(userName: string, collectionAlias: string, gameId: string) {
        return axiosBG.delete(`/api/collections/${collectionAlias}/game/${gameId}`);
    }

    static addGamesInCollection(userName: string, collectionAlias: string, gameIds: string[]) {
        return axiosBG.put(`/api/collections/${collectionAlias}/game`, gameIds);
    }

}