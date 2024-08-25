import {useParams} from "react-router-dom";
import {BoardGamesDTO} from "../../../tools/interfaces/DTOinterface";
import React, {useLayoutEffect, useState} from "react";
import {BoardGameApi} from "../../../tools/rest/BoardGameApi";
import {FileApi} from "../../../tools/rest/FileApi";

export const CurrentBoardGamePage = () => {

    const [boardGame, setBoardGame] = useState<BoardGamesDTO>()
    const {boardGameId} = useParams();


    useLayoutEffect(() => {
        // const bg = location.state.boardGame;
        // if (bg) {
        //     setBoardGame(bg)
        // } else {
        //     BoardGameApi.getBoardGame(boardGameId!).then(res => setBoardGame(res.data))
        // }

        BoardGameApi.getBoardGame(boardGameId!).then(res => setBoardGame(res.data))

    }, [boardGameId]);


    return (
        <div>
            {boardGame ? <>
                Название: {boardGame.name}
                <br/>
                <br/>
                {boardGame?.preview &&
                    <img width={300} src={FileApi.getFile(boardGame.preview.id.toString())} alt={boardGame.name}/>
                }
                <br/>
                {boardGame?.files && boardGame.files.map(file =>
                    <img width={100} src={FileApi.getFile(file.id.toString())} alt={boardGame.name}/>
                )}
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