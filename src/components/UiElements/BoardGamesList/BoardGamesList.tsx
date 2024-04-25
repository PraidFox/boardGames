import {BoardGamesDTO} from "../../../tools/interfaces/DTOinterface";
import {NavLink} from "react-router-dom";
import {DeleteOutlined, EditOutlined, LikeOutlined} from "@ant-design/icons";
import {Flex} from "antd";
import {CardBoardGame} from "./СardBoardGame";

export const BoardGamesList = ({type, dataBoardGames, deleteGame}: {
    type: "all" | "user",
    dataBoardGames: BoardGamesDTO[],
    deleteGame?: (id: number) => void
}) => {

    const getFooterForCard = (boardGame: BoardGamesDTO) => {
        let footerCard = [
            <NavLink
                key={"link" + boardGame.id}
                to={`/boardGame/${boardGame.id}`}
                state={{boardGame}}
            >
                Подробнее
            </NavLink>
        ]

        if (type === "user") {
            footerCard.push(<DeleteOutlined
                key={"delete" + boardGame.id}
                style={{color: 'red'}}
                onClick={() => {
                    if (deleteGame) {
                        deleteGame(boardGame.id);
                    } else {
                        alert('ЗАБЫЛ ПЕРЕДАТЬ ФУНКЦИЮ УДАЛЕНИЯ');
                    }
                }}
            />)
        } else {
            footerCard.push(<span key={"like" + boardGame.id}>В коллекцию</span>)
            footerCard.push(<span key={"dislike" + boardGame.id}>В избранное</span>)
            //footerCard.push(<LikeOutlined key={"like" + boardGame.id} style={{color: 'green'}}/>)
            //Здесь еще проверка на АДМИНА
            footerCard.push(<EditOutlined key={"edit" + boardGame.id}/>)
        }

        return footerCard
    }

    return (
        <Flex wrap="wrap" gap="middle">
            {dataBoardGames?.map(boardGame => (
                <CardBoardGame data={boardGame} key={boardGame.id}>
                    {getFooterForCard(boardGame)}
                </CardBoardGame>
            ))}
        </Flex>
    )


}