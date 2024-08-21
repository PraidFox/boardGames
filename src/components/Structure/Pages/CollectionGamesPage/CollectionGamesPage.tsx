import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {mockCollectionsFullInfo} from "../../../../tools/mockData";
import {collectionFullInfo} from "../../../../tools/interfaces/collectionsInterface";
import {Cover} from "./Cover";
import {TitleEdit} from "./TitleEdit";
import {DescriptionEdit} from "./DescriptionEdit";
import {BoardGamesList} from "../../../UiElements/BoardGamesList/BoardGamesList";
import {useLoadData} from "../../../../tools/hooks/useLoadData";
import {GameCollectionDTO} from "../../../../tools/interfaces/DTOinterface";
import {FieldSearchAddGames} from "../../../UiElements/Fields/FieldSerchAddByGames";
import {DeleteOutlined, LikeOutlined, ShareAltOutlined, QrcodeOutlined} from "@ant-design/icons";
import {CardCollection} from "./CardCollection";
import {UserCollections} from "../../../../tools/rest/UserCollections";

export const CollectionGamesPage = () => {
    //const {id} = useLocation().state;
    const {collectionId} = useParams();

    const {
        data,
        setNeedUpdate,
        loading
    } = useLoadData<GameCollectionDTO, string>(UserCollections.getCollection, collectionId)

    //Убрать мок данные
    const [collectionMock, setCollectionMock] = useState<collectionFullInfo>(mockCollectionsFullInfo[0])

    const addGamesInCollection = (games: string[]) => {
        UserCollections.addGamesInCollection(collectionId!, games).then(r => setNeedUpdate(true))
    }
    const changeTitle = (name: string) => {
        UserCollections.changeDataCollection(collectionId!, {
            name: name
        }).then(r => console.log(r.data))
    }
    const changeDescription = (description: string) => {
        UserCollections.changeDataCollection(collectionId!, {
            description: description
        }).then(r => console.log(r.data))
    }

    const deletedGameInCollection = (gameId: string | number) => {
        UserCollections.deletedGameInCollection(collectionId!, gameId.toString()).then(r => setNeedUpdate(true))
    }

    //TODO пока loading посмотреть как сделать скелет
    return (
        <>
            {loading ? <div>Загрузка...</div> : <>
                <div style={{textAlign: "right"}}>
                    Чья коллекция: {collectionMock.byUserName} / Обновлялась: {collectionMock.dataUpdate} /
                    Лайков: {collectionMock.likes}
                </div>

                <div style={{display: "flex", gap: "2%", width: "100%"}}>

                    <CardCollection
                        coverElement={<Cover collection={collectionMock}/>}
                        actionsElements={[
                            <ShareAltOutlined style={{fontSize: 20}}/>,
                            <LikeOutlined style={{fontSize: 20}}/>,
                            <DeleteOutlined style={{fontSize: 20}}
                                            onClick={() => UserCollections.deletedCollection(collectionId!)}/>,
                            <QrcodeOutlined style={{fontSize: 20}}/>
                        ]}
                    />


                    <div style={{width: "100%"}}>
                        <TitleEdit name={data!.name} changeTitle={changeTitle}/>
                        <br/>
                        <DescriptionEdit description={data!.description} changeDescription={changeDescription}/>
                    </div>
                </div>
                <br/>
                <hr/>
                <br/>
                <FieldSearchAddGames addGamesInCollection={addGamesInCollection}/>
                <br/>
                <br/>
                <BoardGamesList
                    type={"user"}
                    dataBoardGames={data ? data.games : []}
                    deleteGame={deletedGameInCollection}
                />
            </>}
        </>
    )

}