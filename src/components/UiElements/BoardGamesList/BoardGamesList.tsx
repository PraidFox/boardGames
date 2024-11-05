import {BoardGameDTO} from "../../../tools/interfaces/DTOinterface";
import {NavLink} from "react-router-dom";
import {DeleteOutlined, EditOutlined, LikeOutlined} from "@ant-design/icons";
import {Flex} from "antd";
import {CardBoardGame} from "./CardBoardGame";
import {PathStorage} from "../../../tools/storages/const";

export const BoardGamesList = ({type, dataBoardGames, deleteGame}: {
    type: "all" | "user",
    dataBoardGames: BoardGameDTO[],
    deleteGame?: (id: number | string) => void
}) => {

    const addInCollections = (boardGameId: string) => {

    }

    const getFooterForCard = (boardGame: BoardGameDTO) => {
        let footerCard = [
            <NavLink
                key={"link" + boardGame.id}
                to={`${PathStorage.BOARD_GAME}/${boardGame.id}`}
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
            footerCard.push(<LikeOutlined key={"like" + boardGame.id} onClick={() => {
                addInCollections(boardGame.id)
            }}/>)
            footerCard.push(<span key={"dislike" + boardGame.id}>В избранное</span>)
            //footerCard.push(<LikeOutlined key={"like" + boardGame.id} style={{color: 'green'}}/>)
            //Здесь еще проверка на АДМИНА
            footerCard.push(<EditOutlined key={"edit" + boardGame.id}/>)
        }

        return footerCard
    }

    return (

        <Flex wrap="wrap" gap="middle" justify={"start"}>
            {dataBoardGames?.map(boardGame => (
                <CardBoardGame data={boardGame} key={boardGame.id}>
                    {getFooterForCard(boardGame)}
                </CardBoardGame>
            ))}
        </Flex>


    )


}