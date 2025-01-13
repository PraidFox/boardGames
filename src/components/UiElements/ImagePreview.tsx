import {Image} from "antd";
import {FileService} from "../../tools/rest/services/File.service.ts";
import {pictureStub} from "../../tools/storages/const.ts";

export const ImagePreview = ({fileId, gameName}: { fileId: string | undefined, gameName: string }) => {
    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 25}} >
            <Image
                preview={false}
                alt={gameName}
                fallback={pictureStub}
                src={FileService.getFile(fileId)}
            />
        </div>
    )
}