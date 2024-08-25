import {axiosBGauthFile} from "./AxiosDefault";


export class FileApi {
    static uploadFile(data: any) {
        return axiosBGauthFile.post(`/api/File/upload`, data);
    }

    static getImage(imageId: string) {
        return axiosBGauthFile.get(`/api/File?id=${imageId}`);
    }

    static getFile(fileId: string) {
        return `http://94.125.48.107:8080/api/File?id=${fileId}`
    }
}