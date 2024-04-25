import {FilterBoardGamesPanel} from "../../Forms/FormFilter/FilterBoardGamesPanel";
import {useEffect, useReducer, useState} from "react";
import {BoardGamesDTO} from "../../../tools/interfaces/DTOinterface";
import {reducerFilterFieldValues} from "../../Forms/FormFilter/reducerFilterFieldValues";
import {BoardGameApi} from "../../../tools/rest/BoardGameApi";
import {BoardGamesList} from "../../UiElements/BoardGamesList/BoardGamesList";

export const MyCollectionBoardGames = () => {
    const [dataBoardGames, setDataBoardGame] = useState<BoardGamesDTO[]>([])
    const [needUpdate, setNeedUpdate] = useState(true)
    const [filterFieldValues, setFilterFieldValues] = useReducer(reducerFilterFieldValues, undefined)

    useEffect(() => {
        if (needUpdate) {
            BoardGameApi.getAllBoardGame().then(res => setDataBoardGame(res.data))
            setNeedUpdate(false)
        }
    }, [needUpdate]);

    const deleteGame = (id: number) => {
        setNeedUpdate(true)
        //УДАЛЕНИЕ ИГРЫ ИМЕННО ИЗ КОЛЛЕКЦИИ ПОЛЬЗОВАТЕЛЯ
    }

    return (<>
            <h1>{"Мои игры"}</h1>
            <FilterBoardGamesPanel activeFilter={!!filterFieldValues} valueFieldAge={filterFieldValues?.age}
                                   setFilterFieldValues={setFilterFieldValues}/>

            <BoardGamesList type={"user"} dataBoardGames={dataBoardGames} deleteGame={deleteGame}/>
            <br/>
        </>
    )
}