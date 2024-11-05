import {useParams} from "react-router-dom";
import {BoardGameDTO} from "../../../tools/interfaces/DTOinterface";
import React, {useLayoutEffect, useState} from "react";
import {BoardGameApi} from "../../../tools/rest/BoardGameApi";
import {FileApi} from "../../../tools/rest/FileApi";
import {Flex, Rate} from "antd";
import {GameRatingApi} from "../../../tools/rest/GameRatingApi";

export const CurrentBoardGamePage = () => {

    const [boardGame, setBoardGame] = useState<BoardGameDTO>()
    const {boardGameId} = useParams();


    useLayoutEffect(() => {

        BoardGameApi.getBoardGame(boardGameId!)
            .then(res => setBoardGame(res.data))
            .catch(() => setBoardGame(undefined))

    }, [boardGameId]);

    const handlerRate = (boardGameId: string, rate: number) => {
        GameRatingApi.addRating(boardGameId, rate)
    }

    console.log("boardGame", boardGame)

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
                <br/>
                Рейтинг: {boardGame.rating}
                <br/>
                Пользователь Рейтинг: {boardGame.userRating}

                <Flex gap="middle" vertical>
                    <Rate defaultValue={0} character={({index = 0}) => index + 1}
                          onChange={e => handlerRate(boardGameId!, e)}
                          count={10}/>

                </Flex>


            </> : <>Такой игры не найдено</>}


        </div>


    )
}