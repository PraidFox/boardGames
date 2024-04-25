import {useParams} from "react-router-dom";
import {BoardGamesDTO} from "../../../tools/interfaces/DTOinterface";
import React, {useEffect, useLayoutEffect, useState} from "react";
import {BoardGameApi} from "../../../tools/rest/BoardGameApi";
import {Loading} from "../../UiElements/Loading";
// @ts-ignore
import pandaImage from "../../../tools/images/panda.png";

export const CurrentBoardGamePage = () => {

    const [boardGame, setBoardGame] = useState<BoardGamesDTO>()
    const {boardGameId} = useParams();


    useLayoutEffect(() => {
        BoardGameApi.getBoardGame(Number(boardGameId)).then(res => setBoardGame(res.data))
    }, [boardGameId]);


    return (
        <div>
            {boardGame ? <>
                Название: {boardGame.name}
                <br/>
                <br/>

                <div dangerouslySetInnerHTML={{__html: boardGame.description}}/>

                <br/>
                Жанр: {boardGame.genres?.map(genre => genre.name)}
                <br/>
                Тип: {boardGame.type?.name}
                <br/>
                Количество игроков от {boardGame.minPlayersCount} до {boardGame.maxPlayersCount}
                <br/>
                Возраст: {boardGame.minPlayerAge}
            </> : <></>}
        </div>


    )
}