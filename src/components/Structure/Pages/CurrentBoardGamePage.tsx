import {useLocation, useParams} from "react-router-dom";
import {BoardGamesDTO} from "../../../tools/interfaces/DTOinterface";
import React, {Suspense} from "react";
import {BoardGameApi} from "../../../tools/rest/BoardGameApi";
import {AxiosResponse} from "axios";
import {Loading} from "../../UiElements/Loading";

export const CurrentBoardGamePage = () => {
    const location = useLocation();
    //const {boardGame} = location.state as { boardGame: BoardGamesDTO };
    //const navigate = useNavigate();

    //const boardGame
    //const pop = location.state as { boardGame: BoardGamesDTO };
    //console.log("POP", pop)

    //const [boardGame, setBoardGame] = useState<BoardGamesDTO>()
    const {boardGameId} = useParams();
    //
    //
    // useLayoutEffect(() => {
    //     BoardGameApi.getBoardGame(Number(boardGameId)).then(res => console.log(res.data.name))
    // }, [boardGameId]);

    // const goBack = () => {
    //     navigate(-1); // Вернуться на один шаг назад в истории
    // };


    const LazyComponent = React.lazy(() =>
        BoardGameApi.getBoardGame(Number(boardGameId)).then((res: AxiosResponse<BoardGamesDTO>) => ({

            default: () => <div>
                {/*<div>*/}
                {/*    <button onClick={goBack}>Вернуться</button>*/}
                {/*</div>*/}
                Название: {res.data.name}
                <br/>
                <br/>

                <div dangerouslySetInnerHTML={{__html: res.data.description}}/>

                <br/>
                {/*Жанр: {res.data.genres.map(genre => genre.name)}*/}
                <br/>
                Тип: {res.data.type?.name}
                <br/>
                Количество игроков от {res.data.minPlayersCount} до {res.data.maxPlayersCount}
                <br/>
                Возраст: {res.data.minPlayerAge}
            </div>
        })));


    return (
        <Suspense fallback={<Loading/>}>
            <LazyComponent></LazyComponent>

        </Suspense>


    )
}