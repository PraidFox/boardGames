import {useParams} from "react-router";
import {BoardGameDTO} from "../../../tools/interfaces/DTO/boardGame.dto.ts";
import {useLayoutEffect, useState} from "react";
import {BoardGameService} from "../../../tools/rest/services/BoardGame.service.ts";
import {FileService} from "../../../tools/rest/services/File.service.ts";
import {Flex, Rate} from "antd";
import {GameRatingService} from "../../../tools/rest/services/GameRating.service.ts";

export const CurrentBoardGamePage = () => {

    const [boardGame, setBoardGame] = useState<BoardGameDTO>()
    const {boardGameId} = useParams();


    useLayoutEffect(() => {

        BoardGameService.getBoardGame(boardGameId!)
            .then(res => setBoardGame(res.data))
            .catch(() => setBoardGame(undefined))

    }, [boardGameId]);

    const handlerRate = (boardGameId: string, rate: number) => {
        GameRatingService.addRating(boardGameId, rate)
    }


    return (
        <div>
            {boardGame ? <>
                Название: {boardGame.name}
                <br/>
                <br/>
                {boardGame?.preview &&
                    <img width={300} src={FileService.getFile(boardGame.preview.id.toString())} alt={boardGame.name}/>
                }
                <br/>
                {boardGame?.files && boardGame.files.map(file =>
                    <img width={100} src={FileService.getFile(file.id.toString())} alt={boardGame.name}/>
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