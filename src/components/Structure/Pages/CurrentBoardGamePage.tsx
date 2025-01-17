import {useParams} from "react-router";
import {FileService} from "../../../tools/rest/services/File.service.ts";
import {useGetBoardGame} from "../../../tools/hooks/queries/BoardGame.queries.ts";
import {useAddRatingGame} from "../../../tools/hooks/queries/GameRating.queries.ts";
import {Rate} from "antd";

export const CurrentBoardGamePage = () => {
    const {boardGameId} = useParams();
    const {data: boardGame, isError, isLoading} = useGetBoardGame(boardGameId)
    const addRatingGame = useAddRatingGame()

    const handlerRate = async (boardGameId: string, rate: number) => {
        //GameRatingService.addRating(boardGameId, rate)
        await addRatingGame.mutateAsync({gameId: boardGameId, rating: rate})
    }

    if (isLoading) {
        return <div>Загрузка</div>
    }
    if (isError) {
        return <div>Произошла ошибка!</div>
    }

    if (boardGame) {
        return (
            <>
                Название: {boardGame.name}
                <br/>
                alias: {boardGame.alias}
                <br/>
                labels: {boardGame.labels.join(", ")}
                <br/>
                linkToPublisher: {boardGame.linkToPublisher}
                <br/>
                <Rate
                    defaultValue={boardGame.userRating}
                    //character={({index = 0}) => index + 1}
                    onChange={e => handlerRate(boardGameId!, e)}
                    count={10}
                />
                <br/>
                {boardGame.preview &&
                    <img width={300} src={FileService.getFile(boardGame.preview.id)}
                         alt={boardGame.name}/>
                }

                <br/>
                {boardGame.files && boardGame.files.map(file =>
                    <img key={file.id} width={100} src={FileService.getFile(file.id)} alt={boardGame.name}/>
                )}
                <div dangerouslySetInnerHTML={{__html: boardGame.description}}/>

                <br/>
                Жанр: {boardGame.genres.map(genre => genre.name).join(",")}
                <br/>
                Тип: {boardGame.type.name}
                <br/>
                Количество игроков от {boardGame.minPlayersCount} до {boardGame.maxPlayersCount}
                <br/>
                Возраст: {boardGame.minPlayerAge}
                <br/>
                Рейтинг: {boardGame.rating}
                <br/>
                Рейтинг тессера: {boardGame.ratingTessera}
                <br/>
                Рейтинг тессера: {boardGame.rating}
                <br/>
                Пользователь Рейтинг: {boardGame.userRating}
            </>
        )
    }


}