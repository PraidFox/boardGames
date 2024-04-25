import {FilterBoardGamesPanel} from "../../Forms/FormFilter/FilterBoardGamesPanel";
import {useReducer, useState} from "react";
import {reducerFilterFieldValues} from "../../Forms/FormFilter/reducerFilterFieldValues";
import {BoardGameApi} from "../../../tools/rest/BoardGameApi";
import {BoardGamesList} from "../../UiElements/BoardGamesList/BoardGamesList";
import {useLoadData} from "../../../tools/hooks/useLoadData";
import {BoardGamesDTO} from "../../../tools/interfaces/DTOinterface";

export const MyCollectionBoardGames = () => {
    const {data, setNeedUpdate, loading} = useLoadData<BoardGamesDTO[]>(BoardGameApi.getAllBoardGame)
    const [filterFieldValues, setFilterFieldValues] = useReducer(reducerFilterFieldValues, undefined)
    const deleteGame = (id: number) => {
        setNeedUpdate(true)
        //УДАЛЕНИЕ ИГРЫ ИМЕННО ИЗ КОЛЛЕКЦИИ ПОЛЬЗОВАТЕЛЯ
    }


    return (<>
            <h1>{"Мои игры"}</h1>
            <FilterBoardGamesPanel
                activeFilter={!!filterFieldValues}
                valueFieldAge={filterFieldValues?.age}
                setFilterFieldValues={setFilterFieldValues}
            />

            {loading ? <></> :
                <BoardGamesList
                    type={"user"}
                    dataBoardGames={data ? data : []}
                    deleteGame={deleteGame}
                />

            }
        </>
    )
}