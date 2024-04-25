import {FormAddBoardGameInModeration} from "../../Forms/FormsAddBoardGame/FormAddBoardGameInModeration";
import {DrawerSidePanel} from "../../UiElements/DrawerSidePanel";
import {useEffect, useReducer, useState} from "react";
import {BoardGamesDTO} from "../../../tools/interfaces/DTOinterface";
import {reducerFilterFieldValues} from "../../Forms/FormFilter/reducerFilterFieldValues";
import {BoardGameApi} from "../../../tools/rest/BoardGameApi";
import {FilterBoardGamesPanel} from "../../Forms/FormFilter/FilterBoardGamesPanel";
import {BoardGamesList} from "../../UiElements/BoardGamesList/BoardGamesList";

export const AllBoardGamesPage = () => {
    const [dataBoardGames, setDataBoardGame] = useState<BoardGamesDTO[]>([])
    const [needUpdate, setNeedUpdate] = useState(true)
    const [filterFieldValues, setFilterFieldValues] = useReducer(reducerFilterFieldValues, undefined)

    useEffect(() => {
        if (needUpdate) {
            BoardGameApi.getAllBoardGame().then(res => setDataBoardGame(res.data))
            setNeedUpdate(false)
        }
    }, [needUpdate]);

    const updateBoardGame = () => {
        setNeedUpdate(true)
    }


    return (
        <>
            <h1>Все игры</h1>
            <FilterBoardGamesPanel activeFilter={!!filterFieldValues} valueFieldAge={filterFieldValues?.age}
                                   setFilterFieldValues={setFilterFieldValues}/>
            <br/>
            <BoardGamesList type={"all"} dataBoardGames={dataBoardGames}/>
            <DrawerSidePanel>
                {(onClose) => (<FormAddBoardGameInModeration onClose={onClose} setNeedUpdate={updateBoardGame}/>)}
            </DrawerSidePanel>
        </>
    )

}