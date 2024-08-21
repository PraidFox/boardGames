import {axiosBGauth} from "./AxiosDefault";
import {GameCollectionPatchDto} from "../interfaces/DTOinterface";


export class UserCollections {
    static getUserCollections(userName: string) {
        return axiosBGauth.get(`/api/collections/user/${userName}`);
    }

    static getCollection(collectionId: string) {
        return axiosBGauth.get(`/api/collections/${collectionId}?includeGames=true`);
    }

    static addEmptyCollection() {
        return axiosBGauth.post(`/api/collections/`, {});
    }

    static addGamesInCollection(collectionId: string, gameIds: string[]) {
        return axiosBGauth.put(`/api/collections/${collectionId}/AddGames`, gameIds);
    }

    static changeDataCollection(collectionId: string, data: GameCollectionPatchDto) {
        return axiosBGauth.patch(`/api/collections/${collectionId}`, data);
    }

    static deletedGameInCollection(collectionId: string, gameId: string) {
        return axiosBGauth.delete(`/api/collections/${collectionId}/games/${gameId}`);
    }

    static deletedCollection(collectionId: string) {
        return axiosBGauth.delete(`/api/collections/${collectionId}`);
    }
}