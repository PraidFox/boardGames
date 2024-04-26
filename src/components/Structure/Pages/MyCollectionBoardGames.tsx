import {FilterBoardGamesPanel} from "../../Forms/FormFilter/FilterBoardGamesPanel";
import {useReducer} from "react";
import {reducerFilterFieldValues} from "../../Forms/FormFilter/reducerFilterFieldValues";
import {BoardGamesList} from "../../UiElements/BoardGamesList/BoardGamesList";
import {BoardGamesDTO} from "../../../tools/interfaces/DTOinterface";

export const MyCollectionBoardGames = () => {
    //const {data, setNeedUpdate, loading} = useLoadData<BoardGamesDTO[]>(BoardGameApi.getAllBoardGame)
    const [filterFieldValues, setFilterFieldValues] = useReducer(reducerFilterFieldValues, {})
    const deleteGame = (id: number) => {
        //setNeedUpdate(true)
        //УДАЛЕНИЕ ИГРЫ ИМЕННО ИЗ КОЛЛЕКЦИИ ПОЛЬЗОВАТЕЛЯ
    }

    const data: BoardGamesDTO[] = []
    const loading = false

    return (<>
            <h1>{"Мои игры"}</h1>
            <FilterBoardGamesPanel
                valueFilter={filterFieldValues}
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