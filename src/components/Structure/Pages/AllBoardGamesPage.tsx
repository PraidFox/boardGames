import {FormAddBoardGameInModeration} from "../../Forms/FormsAddBoardGame/FormAddBoardGameInModeration";
import {DrawerSidePanel} from "../../UiElements/DrawerSidePanel";
import {useEffect, useReducer, useState} from "react";
import {reducerFilterFieldValues} from "../../Forms/FormFilter/reducerFilterFieldValues";
import {BoardGameApi} from "../../../tools/rest/BoardGameApi";
import {FilterBoardGamesPanel} from "../../Forms/FormFilter/FilterBoardGamesPanel";
import {BoardGamesList} from "../../UiElements/BoardGamesList/BoardGamesList";
import {useLoadData} from "../../../tools/hooks/useLoadData";
import {Loading} from "../../UiElements/Loading";
import {SessionStorageUtils} from "../../../tools/utils/SessionStorageUtils";
import {BoardGamesDTO} from "../../../tools/interfaces/DTOinterface";

export const AllBoardGamesPage = () => {
    const [boardGameData, setBoardGameData] = useState<BoardGamesDTO[] | undefined>(SessionStorageUtils.getAllBoardGames())
    const {data, setNeedUpdate, loading} = useLoadData<BoardGamesDTO[]>(BoardGameApi.getAllBoardGame)
    const [filterFieldValues, setFilterFieldValues] = useReducer(reducerFilterFieldValues, undefined)
    const [customLoading, setCustomLoading] = useState(true)

    const updateBoardGame = () => {
        setNeedUpdate(true)
    }

    console.log(!boardGameData || customLoading)

    useEffect(() => {
        if (!loading) {
            setTimeout(() => {
                //setCustomLoading(false)
            }, 3000)
        }
    }, [loading]);


    useEffect(() => {
        if (boardGameData) {
            if (data) {
                if (JSON.stringify(boardGameData) === JSON.stringify(data)) {
                    setBoardGameData(boardGameData)
                } else {
                    setBoardGameData(data)
                }
            }
        } else {
            setBoardGameData(data)
            if (data) {
                SessionStorageUtils.setAllBoardGames(data)
            }
        }
    }, [data]);

    return (
        <>
            <h1>Все игры</h1>
            <FilterBoardGamesPanel activeFilter={!!filterFieldValues} valueFieldAge={filterFieldValues?.age}
                                   setFilterFieldValues={setFilterFieldValues}/>
            <br/>
            {!boardGameData && loading ? <Loading/> : <>
                <BoardGamesList type={"all"} dataBoardGames={boardGameData ? boardGameData : []}/>
                <DrawerSidePanel>
                    {(onClose) => (<FormAddBoardGameInModeration onClose={onClose} setNeedUpdate={updateBoardGame}/>)}
                </DrawerSidePanel>
            </>
            }

        </>
    )

}