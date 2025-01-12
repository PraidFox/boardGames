import {useReducer, useState} from "react";
import {reducerFilterFieldValues} from "../../Forms/FormFilter/reducerFilterFieldValues";
import {FilterBoardGamesPanel} from "../../Forms/FormFilter/FilterBoardGamesPanel";
import {LoadingPanda} from "../../UiElements/LoadingPanda";

import {FilterGamesDTO} from "../../../tools/interfaces/DTO/boardGame.dto.ts";
import {useFilterBoardGames} from "../../../tools/hooks/queryies/BoardGame.queryes.ts";
import {BoardGamesList} from "../../UiElements/BoardGamesList/BoardGamesList.tsx";
import {FormAddBoardGameInModeration} from "../../Forms/FormsAddBoardGame/FormAddBoardGameInModeration.tsx";
import {DrawerSidePanel} from "../../UiElements/DrawerSidePanel.tsx";
import {Pagination} from "antd";


export const AllBoardGamesPage = () => {
    const [filterRequest, setFilterRequest] = useState<FilterGamesDTO>({})
    const [filterFieldValues, setFilterFieldValues] = useReducer(reducerFilterFieldValues, {})

    const {data: boardGames, isLoading} = useFilterBoardGames({})


    return (
        <>
            <div style={{display: "flex", alignItems: "center", gap: 20}}><h1>Все игры</h1>
                <DrawerSidePanel>
                    {(onClose) => (
                        <FormAddBoardGameInModeration onClose={onClose}/>)}
                </DrawerSidePanel></div>

            <FilterBoardGamesPanel
                valueFilter={filterFieldValues}
                setFilterFieldValues={setFilterFieldValues}
            />

            {isLoading && <LoadingPanda/>}
            {!isLoading && boardGames && <BoardGamesList type={"all"} dataBoardGames={boardGames}/>}

            <Pagination defaultCurrent={6} total={500} pageSizeOptions={[10, 30, 50]}/>
        </>
    )

}