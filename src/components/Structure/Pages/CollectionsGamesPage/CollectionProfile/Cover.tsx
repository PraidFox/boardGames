import {UploadImageOne} from "../../../../UiElements/Buttons/UploadImageOne.tsx";
import {useState} from "react";
import {CurrentGameCollectionDTO} from "../../../../../tools/interfaces/DTO/userColletions.dto.ts";
import {ImagePreview} from "../../../../UiElements/ImagePreview.tsx";


export const Cover = ({collection}: { collection: CurrentGameCollectionDTO }) => {
    const [showButtonUploadCover, setShowButtonUploadCover] = useState(false);

    return <div
        style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
        }}
        onMouseEnter={() => setShowButtonUploadCover(true)}
        onMouseLeave={() => setShowButtonUploadCover(false)}
    >

        <ImagePreview fileId={collection.avatarInfoId?.id} nameAlt={collection.name}/>


        {showButtonUploadCover && <div style={{
            position: "absolute",
            top: 150,
        }}><UploadImageOne/></div>}

    </div>
}