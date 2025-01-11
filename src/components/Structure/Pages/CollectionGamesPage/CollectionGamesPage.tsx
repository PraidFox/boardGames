import {useParams} from "react-router";
import {TitleEdit} from "./TitleEdit";
import {DescriptionEdit} from "./DescriptionEdit";
import {BoardGamesList} from "../../../UiElements/BoardGamesList/BoardGamesList";
import {useLoadData} from "../../../../tools/hooks/useLoadData";
import {GameCollectionDTO} from "../../../../tools/interfaces/DTO/boardGame.dto.ts";
import {FieldSearchAddGames} from "../../../UiElements/Fields/FieldSerchAddByGames";
import {UserCollectionsService} from "../../../../tools/rest/services/UserCollections.service.ts";
import {useInfoUser} from "../../../../tools/hooks/hooksContext/useInfoUser";
import {notEditCollection} from "../../../../tools/storages/const";
import {Select} from "antd";


export const CollectionGamesPage = () => {
    const {nickname: currentUser} = useInfoUser();
    const {collectionAlias, userName: userNameOwner} = useParams();

    const editingAllowed = !notEditCollection.includes(collectionAlias!);


    const {
        data,
        setNeedUpdate,
        loading,
        error
    } = useLoadData<GameCollectionDTO, {
        userName: string,
        collectionAlias: string
    }>(UserCollectionsService.getCollection, {userName: userNameOwner!, collectionAlias: collectionAlias!})


    const addGamesInCollection = (games: string[]) => {
        UserCollectionsService.addGamesInCollection(currentUser!, collectionAlias!, games).then(r => setNeedUpdate(true))
    }
    const changeTitle = (name: string) => {
        UserCollectionsService.changeDataCollection(collectionAlias!, {
            name: name
        }).then(r => console.log(r.data))
    }
    const changeDescription = (description: string) => {
        UserCollectionsService.changeDataCollection(collectionAlias!, {
            description: description
        }).then(r => console.log(r.data))
    }

    const changeConfidentialType = (confidentialType: string) => {
        UserCollectionsService.changeDataCollection(collectionAlias!, {
            confidentialType: confidentialType
        }).then(r => console.log(r.data))
    }

    const deletedGameInCollection = (gameId: string | number) => {
        UserCollectionsService.deletedGameInCollection(currentUser!, collectionAlias!, gameId.toString()).then(r => setNeedUpdate(true))
    }

    console.log("error", error)

    //TODO пока loading посмотреть как сделать скелет
    return (
        <>
            {loading ? <div>Загрузка...</div> : error ? <div>{error}</div> : <>
                <div style={{textAlign: "right"}}>
                    Чья коллекция: ??????? / Обновлялась: ??????? /
                    Лайков: ???????
                </div>
                <h4>Уровень видимости</h4>
                <Select
                    defaultValue={data?.confidentialType?.toString()}
                    style={{width: 250}}
                    onChange={changeConfidentialType}
                />
                <div style={{display: "flex", gap: "2%", width: "100%"}}>

                    {/*<CardCollection*/}
                    {/*    coverElement={<Cover collection={???????}/>}*/}
                    {/*    actionsElements={[*/}
                    {/*        <ShareAltOutlined style={{fontSize: 20}}/>,*/}
                    {/*        <LikeOutlined style={{fontSize: 20}}/>,*/}
                    {/*        <DeleteOutlined style={{fontSize: 20}}*/}
                    {/*                        onClick={() => UserCollectionsService.deletedCollection(collectionAlias!)}/>,*/}
                    {/*        <QrcodeOutlined style={{fontSize: 20}}/>*/}
                    {/*    ]}*/}
                    {/*/>*/}


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