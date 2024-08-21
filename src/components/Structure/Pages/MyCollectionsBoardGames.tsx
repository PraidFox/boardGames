import {BoardGamesList} from "../../UiElements/BoardGamesList/BoardGamesList";
import {BoardGamesDTO, GameCollectionDTO} from "../../../tools/interfaces/DTOinterface";
import {useLoadData} from "../../../tools/hooks/useLoadData";
import {NavLink} from "react-router-dom";
import {PathStorage} from "../../../tools/storages/const";
import {FilterBoardGamesPanel} from "../../Forms/FormFilter/FilterBoardGamesPanel";
import React, {useEffect, useReducer, useState} from "react";
import {reducerFilterFieldValues} from "../../Forms/FormFilter/reducerFilterFieldValues";
import {useInfoUser} from "../../../tools/hooks/hooksContext/useInfoUser";
import {UserCollections} from "../../../tools/rest/UserCollections";
import {FilterBoardRequest} from "../../../tools/interfaces/otherInterface";
import {BoardGameApi} from "../../../tools/rest/BoardGameApi";
import {ConfirmationModal} from "../../UiElements/СonfirmationModal";


export const MyCollectionsBoardGames = () => {
    const {nickname} = useInfoUser();

    const [filterRequest, setFilterRequest] = useState<FilterBoardRequest>({})
    const [filterFieldValues, setFilterFieldValues] = useReducer(reducerFilterFieldValues, {})

    const {
        data,
        setNeedUpdate,
        loading
    } = useLoadData<BoardGamesDTO[], FilterBoardRequest>(BoardGameApi.getFilterBoardGame, filterRequest)

    const {
        data: collections,
        setNeedUpdate: setCollectionsNeedUpdate,
        loading: collectionsLoading
    } = useLoadData<GameCollectionDTO[], string>(UserCollections.getUserCollections, nickname)

    useEffect(() => {
        setFilterRequest({
            GameName: filterFieldValues.name,
            PlayersCount: filterFieldValues.minPlayers,
            TypeIds: filterFieldValues.type?.map(el => Number(el)),
            GenreIds: filterFieldValues.genre?.map(el => Number(el)),
            PlayersAge: filterFieldValues.age ? filterFieldValues.age : undefined
        })

        setNeedUpdate(true)
    }, [filterFieldValues, setNeedUpdate]);

    const addNewCollection = async () => {
        UserCollections.addEmptyCollection().then(() => setCollectionsNeedUpdate(true))
    }

    const deleteCollection = (collectionId: string) => {
        UserCollections.deletedCollection(collectionId).then(() => setCollectionsNeedUpdate(true))
    }

    console.log("collections", collections)

    return (<>
            {collectionsLoading ? <>Загрузка...</> : <>

                <div style={{display: "flex", gap: "10px", alignItems: "center"}}><h2>{"Мои коллекции"}</h2></div>

                <br/>
                <div style={{display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap"}}>
                    {collections?.map(collection =>
                        <div key={collection.id}>
                            <NavLink
                                to={PathStorage.MY_COLLECTIONS + "/" + collection.id}
                                state={{id: collection.id}}
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

                            <div style={{padding: "10px", width: "200px", border: "1px solid black"}}>
                                {/*<Button onClick={() => deleteCollection(collection.id)}>Удалить</Button>*/}
                                <ConfirmationModal runFunction={() => deleteCollection(collection.id)}/>
                            </div>
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