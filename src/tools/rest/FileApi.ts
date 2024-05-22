import {axiosBGauthFile} from "./AxiosDefault";


export class FileApi {
    static uploadFile(data: any) {
        const formData = new FormData();
        formData.append('file', data);

        return axiosBGauthFile.post(`/api/File/upload`, formData);
    }

    static getUrlUpdate() {
        return `http://94.125.48.107:8080/api/File`
    }
}