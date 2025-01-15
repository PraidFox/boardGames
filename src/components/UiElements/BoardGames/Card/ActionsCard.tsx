import {DeleteOutlined, LikeOutlined} from "@ant-design/icons";
import {NavLink} from "react-router";
import {PathStorage} from "../../../../tools/storages/Path.storage.ts";

export const FullInfoBg = ({boardGameId}:{boardGameId: number}) => {
    return (<NavLink
        key={"link" + boardGameId}
        to={`${PathStorage.BOARD_GAME}/${boardGameId}`}
    >
        Подробнее
    </NavLink>)
}

export const LikeBG = ({boardGameId}:{boardGameId: number}) => {
    const addInCollections = (boardGameId: number) => {
    }

    return <LikeOutlined key={"like" + boardGameId} onClick={() => {
        addInCollections(boardGameId)
    }}/>
}

export const DeleteGameInCollections = ({boardGameId}:{boardGameId: number}) => {
    return (<DeleteOutlined
        key={"delete" + boardGameId}
        style={{color: 'red'}}
        onClick={() => console.log("Удалить из коллекции")}
    />)
}
