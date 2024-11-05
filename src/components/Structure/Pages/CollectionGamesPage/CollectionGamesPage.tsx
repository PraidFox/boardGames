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
import {useInfoUser} from "../../../../tools/hooks/hooksContext/useInfoUser";
import {notEditCollection} from "../../../../tools/storages/const";
import {Select} from "antd";
import {optionsFieldsConfidentialType} from "../../../../tools/storages/fieldOptions";

export const CollectionGamesPage = () => {
    const {nickname} = useInfoUser();
    const {collectionAlias} = useParams();

    const editingAllowed = !notEditCollection.includes(collectionAlias!);


    const {
        data,
        setNeedUpdate,
        loading
    } = useLoadData<GameCollectionDTO, {
        userName: string,
        collectionAlias: string
    }>(UserCollections.getCollection, {userName: nickname!, collectionAlias: collectionAlias!})


    console.log("data", data)
    //Убрать мок данные
    const [collectionMock, setCollectionMock] = useState<collectionFullInfo>(mockCollectionsFullInfo[0])

    const addGamesInCollection = (games: string[]) => {
        UserCollections.addGamesInCollection(nickname!, collectionAlias!, games).then(r => setNeedUpdate(true))
    }
    const changeTitle = (name: string) => {
        UserCollections.changeDataCollection(collectionAlias!, {
            name: name
        }).then(r => console.log(r.data))
    }
    const changeDescription = (description: string) => {
        UserCollections.changeDataCollection(collectionAlias!, {
            description: description
        }).then(r => console.log(r.data))
    }

    const changeConfidentialType = (confidentialType: string) => {
        UserCollections.changeDataCollection(collectionAlias!, {
            confidentialType: confidentialType
        }).then(r => console.log(r.data))
    }

    const deletedGameInCollection = (gameId: string | number) => {
        UserCollections.deletedGameInCollection(nickname!, collectionAlias!, gameId.toString()).then(r => setNeedUpdate(true))
    }

    //TODO пока loading посмотреть как сделать скелет
    return (
        <>
            {loading ? <div>Загрузка...</div> : <>
                <div style={{textAlign: "right"}}>
                    Чья коллекция: {collectionMock.byUserName} / Обновлялась: {collectionMock.dataUpdate} /
                    Лайков: {collectionMock.likes}
                </div>
                <h4>Уровень видимости</h4>
                <Select
                    defaultValue={data?.confidentialType.toString()}
                    style={{width: 250}}
                    onChange={changeConfidentialType}
                    options={optionsFieldsConfidentialType}
                />
                <div style={{display: "flex", gap: "2%", width: "100%"}}>

                    <CardCollection
                        coverElement={<Cover collection={collectionMock}/>}
                        actionsElements={[
                            <ShareAltOutlined style={{fontSize: 20}}/>,
                            <LikeOutlined style={{fontSize: 20}}/>,
                            <DeleteOutlined style={{fontSize: 20}}
                                            onClick={() => UserCollections.deletedCollection(collectionAlias!)}/>,
                            <QrcodeOutlined style={{fontSize: 20}}/>
                        ]}
                    />


                    <div style={{width: "100%"}}>
                        {editingAllowed ?
                            <TitleEdit name={data!.name} changeTitle={changeTitle}/>
                            :
                            <h1>{data!.name.toUpperCase()}</h1>
                        }
                        <br/>
                        {editingAllowed ?
                            <DescriptionEdit description={data!.description} changeDescription={changeDescription}/>
                            :
                            <p>{data!.description}</p>
                        }

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