import {axiosBGauthFile} from "./AxiosDefault";


export class FileApi {
    static uploadFile(data: any) {
        return axiosBGauthFile.post(`/api/File/upload`, data);
    }

    static getUrlUpdate() {
        return `http://94.125.48.107:8080/api/File`
    }
}