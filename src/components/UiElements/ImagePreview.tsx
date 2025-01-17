import {Image} from "antd";
import {FileService} from "../../tools/rest/services/File.service.ts";
import {pictureStub} from "../../tools/storages/const.ts";

export const ImagePreview = ({fileId, nameAlt, width = 200, height = 200}: { fileId: string | undefined, nameAlt: string, width?: number, height?: number }) => {
    return (
        <div style={{width, height}}>
            <Image
                preview={false}
                alt={nameAlt}
                fallback={pictureStub}
                src={FileService.getFile(fileId)}
            />
        </div>
    )
}