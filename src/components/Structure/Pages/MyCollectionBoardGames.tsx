import {BoardGamesList} from "../../UiElements/BoardGamesList/BoardGamesList";
import {BoardGamesDTO} from "../../../tools/interfaces/DTOinterface";
import {useLoadData} from "../../../tools/hooks/useLoadData";
import {UsersApi} from "../../../tools/rest/UsersApi";
import {mockCollections} from "../../../tools/mockData";
import {NavLink} from "react-router-dom";
import {PathStorage} from "../../../tools/storages/const";
import {FilterBoardGamesPanel} from "../../Forms/FormFilter/FilterBoardGamesPanel";
import {useReducer, useState} from "react";
import {reducerFilterFieldValues} from "../../Forms/FormFilter/reducerFilterFieldValues";
import {collection} from "../../../tools/interfaces/collectionsInterface";

export const MyCollectionBoardGames = () => {
    const {data, setNeedUpdate, loading} = useLoadData<BoardGamesDTO[], string>(UsersApi.getUserBoardGames, "PraidFox")
    const [filterFieldValues, setFilterFieldValues] = useReducer(reducerFilterFieldValues, {})
    const [collections, setCollections] = useState<collection[]>(mockCollections)

    return (<>
            <div style={{display: "flex", gap: "10px", alignItems: "center"}}><h2>{"Мои коллекции"}</h2></div>

            <br/>
            <div style={{display: "flex", gap: "10px"}}>
                {collections.map(collection =>
                    <NavLink
                        to={PathStorage.MY_COLLECTIONS + "/" + collection.id}
                        key={collection.id}
                        state={{id: collection.id}}
                    >
                        <div
                            style={{padding: "10px", width: "200px", height: "200px", border: "1px solid black"}}

                        >
                            {collection.title}
                        </div>
                    </NavLink>)}
                <div
                    style={{
                        padding: "10px",
                        width: "200px",
                        height: "200px",
                        border: "1px solid black",
                        cursor: 'pointer'
                    }}
                    onClick={() => console.log("Добавить коллекцию")}
                >
                    Добавить коллекцию
                </div>


            </div>
            <br/>
            <hr/>
            <h3>Все ваши игры</h3>
            <br/>
            {loading ? <></> :
                <>
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