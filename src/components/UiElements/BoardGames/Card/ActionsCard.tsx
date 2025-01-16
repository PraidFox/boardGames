import {DeleteOutlined, LikeOutlined} from "@ant-design/icons";
import {NavLink} from "react-router";
import {PathStorage} from "../../../../tools/storages/Path.storage.ts";
import {useDeleteGameInCollection} from "../../../../tools/hooks/queries/UserCollection.queries.ts";

export const FullInfoBg = ({boardGameId}: { boardGameId: number }) => {
    return (<NavLink
        key={"link" + boardGameId}
        to={`/${PathStorage.BOARD_GAMES}/${PathStorage.BOARD_GAME}/${boardGameId}`}
    >
        Подробнее
    </NavLink>)
}

export const LikeBG = ({boardGameId}: { boardGameId: number }) => {
    const addInCollections = (boardGameId: number) => {
        console.log("boardGameId", boardGameId)
    }

    return <LikeOutlined key={"like" + boardGameId} onClick={() => {
        addInCollections(boardGameId)
    }}/>
}

export const DeleteGameInCollections = ({boardGameId, whoseCollections, collectionAlias}: {
    boardGameId: number, whoseCollections: string, collectionAlias: string
}) => {
    const deleteGameInCollection = useDeleteGameInCollection(whoseCollections)

    return (<DeleteOutlined
        key={"delete" + boardGameId}
        style={{color: 'red'}}
        onClick={() => deleteGameInCollection.mutateAsync({
            collectionAlias: collectionAlias,
            gameId: boardGameId.toString()
        })}
    />)


}
