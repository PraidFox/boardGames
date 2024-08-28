import {axiosBGauth} from "./AxiosDefault";
import {GameCollectionPatchDto} from "../interfaces/DTOinterface";


export class UserCollections {

    static getUserCollections(userName: string) {
        return axiosBGauth.get(`/api/users/${userName}/collections/`);
    }

    static addEmptyCollection(userName: string) {
        return axiosBGauth.post(`/api/users/${userName}/collections/`, {});
    }

    static getCollection({userName, collectionAlias}: { userName: string, collectionAlias: string }) {
        return axiosBGauth.get(`/api/users/${userName}/collections/${collectionAlias}?includeGames=true`);
    }

    static deletedCollection(userName: string, collectionAlias: string) {
        return axiosBGauth.delete(`/api/users/${userName}/collections/${collectionAlias}`);
    }

    static changeDataCollection(userName: string, collectionAlias: string, data: GameCollectionPatchDto) {
        return axiosBGauth.patch(`/api/users/${userName}/collections/${collectionAlias}`, data);
    }

    static addGameInCollection(userName: string, collectionAlias: string, gameId: string) {
        return axiosBGauth.put(`/api/users/${userName}/collections/${collectionAlias}/game/${gameId}`);
    }

    static deletedGameInCollection(userName: string, collectionAlias: string, gameId: string) {
        return axiosBGauth.delete(`/api/users/${userName}/collections/${collectionAlias}/game/${gameId}`);
    }

    static addGamesInCollection(collectionId: string, gameIds: string[]) {
        return axiosBGauth.put(`/api/collections/${collectionId}/AddGames`, gameIds);
    }

}