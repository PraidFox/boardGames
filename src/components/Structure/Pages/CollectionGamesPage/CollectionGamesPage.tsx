import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {mockCollectionsFullInfo} from "../../../../tools/mockData";
import {collectionFullInfo} from "../../../../tools/interfaces/collectionsInterface";
import {Cover} from "./Cover";
import {TitleEdit} from "./TitleEdit";
import {useInfoUser} from "../../../../tools/hooks/hooksContext/useInfoUser";
import {DescriptionEdit} from "./DescriptionEdit";
import {BoardGamesList} from "../../../UiElements/BoardGamesList/BoardGamesList";
import {useLoadData} from "../../../../tools/hooks/useLoadData";
import {BoardGamesDTO, GameCollectionDTO} from "../../../../tools/interfaces/DTOinterface";
import {UsersApi} from "../../../../tools/rest/UsersApi";
import {FieldSearchAddGames} from "../../../UiElements/Fields/FieldSerchAddByGames";
import {DeleteOutlined, LikeOutlined, ShareAltOutlined, QrcodeOutlined} from "@ant-design/icons";
import {CardCollection} from "./CardCollection";
import {UserCollections} from "../../../../tools/rest/UserCollections";

export const CollectionGamesPage = () => {
    const {id} = useLocation().state;

    const {data, setNeedUpdate, loading} = useLoadData<GameCollectionDTO>(UserCollections.getCollection, id)

    //Убрать мок данные
    const [collectionMock, setCollectionMock] = useState<collectionFullInfo>(mockCollectionsFullInfo[0])


    //TODO пока loading посмотреть как сделать скелет
    return (
        <>
            {loading ? <div>Загрузка...</div> : <>

                <div style={{textAlign: "right"}}>
                    Чья коллекция: {collectionMock?.byUserName} / Обновлялась: {collectionMock?.dataUpdate} /
                    Лайков: {collectionMock?.likes}
                </div>
                <div style={{display: "flex", gap: "2%", width: "100%"}}>
                    <div>
                        <CardCollection coverElement={<Cover collection={collectionMock!}/>}
                                        actionsElements={[
                                            <ShareAltOutlined style={{fontSize: 20}}/>,
                                            <LikeOutlined style={{fontSize: 20}}/>,
                                            <DeleteOutlined style={{fontSize: 20}}/>,
                                            <QrcodeOutlined style={{fontSize: 20}}/>
                                        ]}></CardCollection>


                    </div>
                    <div style={{width: "100%"}}>
                        <TitleEdit name={data!.name}/>
                        <br/>
                        <DescriptionEdit collection={collectionMock!}/>
                    </div>
                </div>
                <br/>
                <hr/>
                <br/>
                <FieldSearchAddGames setNeedUpdate={setNeedUpdate}/>
                <br/>
                <br/>
                <BoardGamesList
                    type={"user"}
                    dataBoardGames={data ? data.games : []}
                />
            </>}


        </>
    )

}