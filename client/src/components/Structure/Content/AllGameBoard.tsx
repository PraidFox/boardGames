import {DrawerSidePanel} from "../../UiElements/DrawerSidePanel";
import {FormEditCart} from "../../Forms/FormsEditCart/FormEditCart";
import {useEffect, useState} from "react";
import {BoardGameApi} from "../../../tools/rest/BoardGameApi";
import {BoardGameDTO} from "../../../tools/interfaces/DTOinterface";
import {CardBoardGame} from "../../UiElements/СardBoardGame";
import {DeleteOutlined, EditOutlined, LikeOutlined} from "@ant-design/icons";

export const AllGameBoard = () => {
    const [dataBoardGames, setDataBoardGame] = useState<BoardGameDTO[]>([])

    useEffect(() => {
        BoardGameApi.getBoardGame().then(res => setDataBoardGame(res.data))
    }, []);

    const deleteGame = (id: number) => {
        BoardGameApi.deleteBoardGame(id).then(() => console.log("Удалено")).catch(() => console.log("Ошибка удаления"))

    }


    return <div>
        {dataBoardGames?.map(boardGame => (
            <CardBoardGame data={boardGame} key={boardGame.id}>
                <EditOutlined key="edit"/>
                <LikeOutlined key="like" style={{color: 'green'}}/>
                <DeleteOutlined key="delete" style={{color: 'red'}}
                                onClick={() => deleteGame(boardGame.id!)}
                />
            </CardBoardGame>
        ))}
        <DrawerSidePanel>
            {(onClose) => (<FormEditCart onClose={onClose}/>)}
        </DrawerSidePanel>
    </div>
}