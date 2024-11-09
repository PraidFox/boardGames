import {axiosBGauth} from "./AxiosDefault";
import {GameCollectionPatchDto} from "../interfaces/DTOinterface";


export class UserCollections {

    static getUserCollections(userName: string) {
        return axiosBGauth.get(`/api/collections?userName=${userName}`);
    }

    static addEmptyCollection(userName: string) {
        return axiosBGauth.post(`/api/collections`, {});
    }

    static getCollection({userName, collectionAlias}: { userName: string, collectionAlias: string }) {


        return axiosBGauth.get(`/api/collections/${collectionAlias}?includeGames=true&&userName=${userName}`);
    }

    static deletedCollection(collectionAlias: string) {
        return axiosBGauth.delete(`/api/collections/${collectionAlias}`);
    }

    static changeDataCollection(collectionAlias: string, data: GameCollectionPatchDto) {
        return axiosBGauth.patch(`/api/collections/${collectionAlias}`, data);
    }

    static addGameInCollection(userName: string, collectionAlias: string, gameId: string) {
        return axiosBGauth.put(`/api/collections/${collectionAlias}/game/${gameId}`);
    }

    static deletedGameInCollection(userName: string, collectionAlias: string, gameId: string) {
        return axiosBGauth.delete(`/api/collections/${collectionAlias}/game/${gameId}`);
    }

    static addGamesInCollection(userName: string, collectionAlias: string, gameIds: string[]) {
        return axiosBGauth.put(`/api/collections/${collectionAlias}/game`, gameIds);
    }

}