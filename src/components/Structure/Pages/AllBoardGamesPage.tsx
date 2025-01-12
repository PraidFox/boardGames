import {FormAddBoardGameInModeration} from "../../Forms/FormsAddBoardGame/FormAddBoardGameInModeration";
import {DrawerSidePanel} from "../../UiElements/DrawerSidePanel";
import {useEffect, useReducer, useState} from "react";
import {reducerFilterFieldValues} from "../../Forms/FormFilter/reducerFilterFieldValues";
import {BoardGameService} from "../../../tools/rest/services/BoardGame.service.ts";
import {FilterBoardGamesPanel} from "../../Forms/FormFilter/FilterBoardGamesPanel";
import {BoardGamesList} from "../../UiElements/BoardGamesList/BoardGamesList";
import {useLoadData} from "../../../tools/hooks/useLoadData";
import {LoadingPanda} from "../../UiElements/LoadingPanda";
import {SessionStorageUtils} from "../../../tools/utils/SessionStorageUtils";
import {BoardGameDto} from "../../../tools/interfaces/DTO/boardGame.dto.ts";
import {FilterBoardRequest} from "../../../tools/interfaces/message.Interface.ts";


export const AllBoardGamesPage = () => {
    const [boardGameData, setBoardGameData] = useState<BoardGameDto[] | undefined>(SessionStorageUtils.getAllBoardGames())

    const [filterRequest, setFilterRequest] = useState<FilterBoardRequest>({})
    const [filterFieldValues, setFilterFieldValues] = useReducer(reducerFilterFieldValues, {})

    const {
        data,
        setNeedUpdate,
        loading
    } = useLoadData<BoardGameDto[], FilterBoardRequest>(BoardGameService.getFilterBoardGame, filterRequest)


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


    const updateBoardGame = () => {
        setNeedUpdate(true)
    }
    const getBoardGames = () => {
        const content = <>
            <DrawerSidePanel>
                {(onClose) => (
                    <FormAddBoardGameInModeration onClose={onClose} setNeedUpdate={updateBoardGame}/>)}
            </DrawerSidePanel>
            <BoardGamesList type={"all"} dataBoardGames={boardGameData ? boardGameData : []}/>

        </>

        if (boardGameData) {
            return content
        } else {
            if (loading || !boardGameData) {
                return <LoadingPanda/>
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