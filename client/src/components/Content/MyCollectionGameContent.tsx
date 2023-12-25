import React, {useEffect, useState} from "react";
import {BoardGame} from "../../../../shared/interface";
import {createBoardGames, deleteBoardGames, getAllBoardGames} from "../../utils/boardGamesApi";
import {CardBoardGame} from "../Card/СardBoardGame";
import {DeleteOutlined, EditOutlined, LikeOutlined} from "@ant-design/icons";
import {FormEditCart} from "../Forms/FormsEditCart/FormEditCart";
import {DrawerSidePanel} from "../../componentsAnt/DrawerSidePanel";

export const MyCollectionGameContent = () => {
    const [dataBoardGames, setDataBoardGames] = useState<BoardGame[]>([])

    const newBoardGame: BoardGame = {
        name: "Название игры новое",
        max_players: 5,
        min_players: 2,
    }

    useEffect(() => {
        getAllBoardGames(setDataBoardGames)
    }, []);

    const handlerCreateBoardGame = () => {
        createBoardGames(newBoardGame, setDataBoardGames)
    }


    const handlerDeleteBoardGame = (id: number) => {
        deleteBoardGames(id, setDataBoardGames)
    }


    return (
        <>{dataBoardGames?.map(boardGame => (
            // <button onClick={() => handlerDeleteBoardGame(boardGame.id!)}>Удалить</button>
            <CardBoardGame data={newBoardGame} key={boardGame.id}>
                <EditOutlined key="edit"/>
                <LikeOutlined key="like" style={{color: 'green'}}/>
                <DeleteOutlined key="delete" style={{color: 'red'}}
                                onClick={() => handlerDeleteBoardGame(boardGame.id!)}/>
            </CardBoardGame>
        ))}
            <DrawerSidePanel>
                {(onClose) => (<FormEditCart onClose={onClose}/>)}
            </DrawerSidePanel>
        </>
    )

}