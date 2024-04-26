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
import {FilterBoardRequest} from "../../../tools/interfaces/otherInterface";

export const AllBoardGamesPage = () => {
    const [boardGameData, setBoardGameData] = useState<BoardGamesDTO[] | undefined>(SessionStorageUtils.getAllBoardGames())
    const [filterRequest, setFilterRequest] = useState<FilterBoardRequest>({})

    const [filterFieldValues, setFilterFieldValues] = useReducer(reducerFilterFieldValues, {})
    // @ts-ignore
    const {
        data,
        setNeedUpdate,
        loading
    } = useLoadData<BoardGamesDTO[], FilterBoardRequest>(BoardGameApi.getFilterBoardGame, filterRequest)

    const updateBoardGame = () => {
        setNeedUpdate(true)
    }

    useEffect(() => {
        setFilterRequest({
            GameName: filterFieldValues.name,
            PlayersCount: filterFieldValues.minPlayers,
            TypeIds: filterFieldValues.type?.map(el => Number(el)),
            GenreIds: filterFieldValues.genre?.map(el => Number(el)),
            PlayersAge: filterFieldValues.age ? filterFieldValues.age : undefined
        })

        setNeedUpdate(true)
    }, [filterFieldValues]);

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
            setTimeout(() => {
                setBoardGameData(data)
                if (data) {
                    SessionStorageUtils.setAllBoardGames(data)
                }
            }, 2000)
        }
    }, [data]);

    const getBoardGames = () => {
        const content = <>
            <BoardGamesList type={"all"} dataBoardGames={boardGameData ? boardGameData : []}/>
            <DrawerSidePanel>
                {(onClose) => (
                    <FormAddBoardGameInModeration onClose={onClose} setNeedUpdate={updateBoardGame}/>)}
            </DrawerSidePanel>
        </>

        if (boardGameData) {
            return content
        } else {
            if (loading || !boardGameData) {
                return <Loading/>
            } else {
                return content
            }
        }
    }


    return (
        <>
            <h1>Все игры</h1>
            <FilterBoardGamesPanel
                valueFilter={filterFieldValues}
                setFilterFieldValues={setFilterFieldValues}
            />
            {getBoardGames()}
        </>
    )

}