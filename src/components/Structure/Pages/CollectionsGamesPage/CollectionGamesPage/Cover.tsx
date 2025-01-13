import {UploadImageOne} from "../../../../UiElements/Buttons/UploadImageOne.tsx";
import {useState} from "react";
import {collectionFullInfo} from "../../../../tools/interfaces/DTO/collections.dto.ts";

export const Cover = ({collection}: { collection: collectionFullInfo }) => {
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

        <img
            style={{width: "200px", height: "200px", objectFit: "cover"}}
            src={collection.img}
            alt={"collectionImg" + collection.collectionId}/>

        {showButtonUploadCover && <div style={{
            position: "absolute",
            top: 150,
        }}><UploadImageOne/></div>}

    </div>
}