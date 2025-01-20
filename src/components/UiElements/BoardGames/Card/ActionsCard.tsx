import {DeleteOutlined, SmallDashOutlined} from "@ant-design/icons";
import {NavLink} from "react-router";
import {PathStorage} from "../../../../tools/storages/Path.storage.ts";
import {
    useAddGameInCollection,
    useDeleteGameInCollection,
    useUserCollections
} from "../../../../tools/hooks/queries/UserCollection.queries.ts";

import {Dropdown, MenuProps} from "antd";


export const FullInfoBg = ({boardGameId}: { boardGameId: number }) => {
    return (<NavLink
        key={"link" + boardGameId}
        to={`/${PathStorage.BOARD_GAMES}/${PathStorage.BOARD_GAME}/${boardGameId}`}
    >
        Подробнее
    </NavLink>)
}

export const AddInCollection = ({boardGameId, userName}: { boardGameId: string, userName: string }) => {
    const addInCollections = useAddGameInCollection(userName)
    const {data: collections} = useUserCollections(userName)

    if(!collections){ return <div>Загружаем</div>;}

    const items: MenuProps['items'] = collections.map(collection => ({label: <span onClick={() => addInCollections.mutate({collectionAlias: collection.alias, gameId:boardGameId})}>{collection.name}</span>, key: collection.alias}))





    return <Dropdown menu={{ items }}>
        <SmallDashOutlined />
    </Dropdown>


    //  <LikeOutlined key={"like" + boardGameId} onClick={() => {
    //     addInCollections.mutate({collectionAlias: CollectionAliases.FAVORITE, gameId:boardGameId})
    // }}/>
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
