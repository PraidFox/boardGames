import {useLayoutEffect, useReducer} from "react";
import {reducerFilterFieldValues} from "../../Forms/FormFilter/reducerFilterFieldValues";
import {BoardGamesList} from "../../UiElements/BoardGamesList/BoardGamesList";
import {BoardGamesDTO} from "../../../tools/interfaces/DTOinterface";
import {useLoadData} from "../../../tools/hooks/useLoadData";
import {UsersApi} from "../../../tools/rest/UsersApi";

export const MyCollectionBoardGames = () => {
    const {data, setNeedUpdate, loading} = useLoadData<BoardGamesDTO[], string>(UsersApi.getUserBoardGames, "PraidFox")
    const [filterFieldValues, setFilterFieldValues] = useReducer(reducerFilterFieldValues, {})

    useLayoutEffect(() => {
        UsersApi.getUserBoardGames("PraidFox").then(r => console.log(r.data))
    }, []);


    return (<>
            <div style={{display: "flex", gap: "10px", alignItems: "center"}}><h3>{"Мои игры /"}</h3>
                <h1>{"Мои коллекции"}</h1></div>
            {/*<FilterBoardGamesPanel*/}
            {/*    valueFilter={filterFieldValues}*/}
            {/*    setFilterFieldValues={setFilterFieldValues}*/}
            {/*/>*/}
            <br/>
            <div style={{display: "flex", gap: "10px"}}>
                <div style={{backgroundColor: "green", padding: "10px", width: "200px", height: "200px"}}>Виш-лист</div>
                <div style={{backgroundColor: "green", padding: "10px", width: "200px", height: "200px"}}>Избранное
                </div>
                <div style={{backgroundColor: "green", padding: "10px", width: "200px", height: "200px"}}>Еще какой-то
                    дефолтный мб
                </div>
                <div style={{backgroundColor: "aqua", padding: "10px", width: "200px", height: "200px"}}>На
                    прохождение
                </div>
                <div style={{backgroundColor: "aqua", padding: "10px", width: "200px", height: "200px"}}>В дорогу</div>
                <div style={{backgroundColor: "aqua", padding: "10px", width: "200px", height: "200px"}}>Для большой
                    компании
                </div>
            </div>
            <br/>
            {loading ? <></> :
                <BoardGamesList
                    type={"user"}
                    dataBoardGames={data ? data : []}

                />

            }
        </>
    )
}