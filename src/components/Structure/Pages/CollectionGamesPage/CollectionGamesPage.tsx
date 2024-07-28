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
import {BoardGamesDTO} from "../../../../tools/interfaces/DTOinterface";
import {UsersApi} from "../../../../tools/rest/UsersApi";
import {FieldSearchAddGames} from "../../../UiElements/Fields/FieldSerchAddByGames";


export const CollectionGamesPage = () => {
    const {id} = useLocation().state;
    const {nickname} = useInfoUser()

    //TODO передалть на получение коллекции по id
    const {data, setNeedUpdate} = useLoadData<BoardGamesDTO[], string>(UsersApi.getUserBoardGames, "PraidFox")
    const [collection, setCollection] = useState<collectionFullInfo>()


    useEffect(() => {
        //Отправка получения конкретной коллекции type
        setCollection(mockCollectionsFullInfo.find(collection => collection.collectionId === id))
    }, [id]);


    return (
        <>
            <div style={{textAlign: "right"}}>
                Чья коллекция: {collection?.byUserName} / Обновлялась: {collection?.dataUpdate} /
                Лайков: {collection?.likes}
            </div>
            <div style={{display: "flex", gap: "2%", width: "100%"}}>
                <Cover collection={collection!}/>
                <div style={{width: "100%"}}>
                    <TitleEdit collection={collection!}/>
                    <br/>
                    <DescriptionEdit collection={collection!}/>
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
                dataBoardGames={data ? data : []}
            />


        </>
    )

}