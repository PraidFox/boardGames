import {BoardGamesList} from "../../UiElements/BoardGamesList/BoardGamesList";
import {useLoadData} from "../../../tools/hooks/useLoadData";
import {NavLink} from "react-router";
import {notEditCollection} from "../../../tools/storages/const";
import {FilterBoardGamesPanel} from "../../Forms/FormFilter/FilterBoardGamesPanel";
import {useReducer, useState} from "react";
import {reducerFilterFieldValues} from "../../Forms/FormFilter/reducerFilterFieldValues";
import {UserCollectionsService} from "../../../tools/rest/services/UserCollections.service.ts";
import {BoardGameService} from "../../../tools/rest/services/BoardGame.service.ts";
import {ConfirmationModal} from "../../UiElements/СonfirmationModal";
import {Button} from "antd";
import {PathStorage} from "../../../tools/storages/Path.storage.ts";
import {useGetMe} from "../../../tools/hooks/queryies/Users.queryes.ts";
import {FilterGamesDTO, ManyBoardGameDTO} from "../../../tools/interfaces/DTO/boardGame.dto.ts";
import {ManyGameCollectionDTO} from "../../../tools/interfaces/DTO/userColletions.dto.ts";


export const MyCollectionsBoardGames = () => {
    const {data: userInfo} = useGetMe()

    const [filterRequest, setFilterRequest] = useState<FilterGamesDTO>({})
    const [filterFieldValues, setFilterFieldValues] = useReducer(reducerFilterFieldValues, {})

    const {
        data,
        loading
    } = useLoadData<ManyBoardGameDTO, FilterGamesDTO>(BoardGameService.getFilterBoardGame, filterRequest)

    const {
        data: collections,
        setNeedUpdate: setCollectionsNeedUpdate,
        loading: collectionsLoading
    } = useLoadData<ManyGameCollectionDTO, string>(UserCollectionsService.getUserCollections, userInfo.userName)


    const addNewCollection = async () => {
        UserCollectionsService.addEmptyCollection().then(() => setCollectionsNeedUpdate(true))
    }

    const deleteCollection = (collectionAlias: string) => {
        UserCollectionsService.deletedCollection(collectionAlias).then(() => setCollectionsNeedUpdate(true))
    }

    return (<>
            {collectionsLoading ? <>Загрузка...</> : <>

                <div style={{display: "flex", gap: "10px", alignItems: "center"}}><h2>{"Мои коллекции"}</h2></div>

                <br/>
                <div style={{display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap"}}>
                    {collections?.map(collection =>
                        <div key={collection.alias}>
                            <NavLink
                                to={PathStorage.COLLECTIONS + "/" + userInfo.userName + "/" + collection.alias}
                                state={{id: collection.alias}}
                            >
                                <div
                                    style={{
                                        padding: "10px",
                                        width: "200px",
                                        height: "200px",
                                        border: "1px solid black"
                                    }}
                                >
                                    {collection.name}
                                </div>

                            </NavLink>

                            {!notEditCollection.includes(collection.alias) &&
                                <div style={{padding: "10px", width: "200px", border: "1px solid black"}}>
                                    {collection.gameCount > 0 ?
                                        <ConfirmationModal runFunction={() => deleteCollection(collection.alias)}/>
                                        :
                                        <Button onClick={() => deleteCollection(collection.alias)}>Удалить</Button>
                                    }
                                </div>
                            }
                        </div>)
                    }

                    <div
                        style={{
                            padding: "10px",
                            width: "200px",
                            height: "200px",
                            border: "1px solid black",
                            cursor: 'pointer'
                        }}
                        onClick={addNewCollection}
                    >
                        Добавить коллекцию
                    </div>
                </div>

            </>}

            <br/>
            <hr/>

            {loading ? <>Загрузка...</> :
                <>
                    <br/>
                    <h2>Мои игры</h2>
                    <FilterBoardGamesPanel
                        valueFilter={filterFieldValues}
                        setFilterFieldValues={setFilterFieldValues}
                    />
                    <BoardGamesList
                        type={"user"}
                        dataBoardGames={data ? data : []}

                    />
                </>
            }
        </>
    )
}