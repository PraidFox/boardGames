import {axiosBGauth} from "./AxiosDefault";


export class UserCollections {
    static getUserCollections(userName: string) {
        return axiosBGauth.get(`/api/collections/user/${userName}`);
    }

    static getCollection(collectionId: string) {
        return axiosBGauth.get(`/api/collections/${collectionId}`);
    }

    static addEmptyCollection() {
        return axiosBGauth.post(`/api/collections/`, {});
    }


}