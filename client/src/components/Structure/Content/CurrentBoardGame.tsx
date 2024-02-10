import {useNavigate} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {BoardGamesDTO} from "../../../tools/interfaces/DTOinterface";


export const CurrentBoardGame = () => {
    const location = useLocation();
    const {boardGame} = location.state as { boardGame: BoardGamesDTO };
    const navigate = useNavigate();
    console.log(boardGame)
    const goBack = () => {
        navigate(-1); // Вернуться на один шаг назад в истории
    };

    return (
        <div>
            <div>
                <button onClick={goBack}>Вернуться</button>
            </div>
            Название: {boardGame.name}
            <br/>
            Описание: {boardGame.description}
            <br/>
            Жанр: {boardGame.genres.map(genre => genre.name)}
            <br/>
            Тип: {boardGame.type.name}
            <br/>
            Количество игроков от {boardGame.minPlayersCount} до {boardGame.maxPlayersCount}
            <br/>
            Возраст: {boardGame.minPlayerAge}
        </div>
    )
}