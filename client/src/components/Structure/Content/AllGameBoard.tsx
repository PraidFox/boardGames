import {ButtonsDrawerSidePanel} from "../../UiElements/Buttons/ButtonsDrawerSidePanel";
import {FormEditCart} from "../../Forms/FormsEditCart/FormEditCart";
import {useState} from "react";

export const AllGameBoard = () => {
    const [dataBoardGame, setDataBoardGame] = useState()



    return <div>
        {/*    {dataBoardGames?.map(boardGame => (*/}
        {/*    // <button onClick={() => handlerDeleteBoardGame(boardGame.id!)}>Удалить</button>*/}
        {/*    <CardBoardGame data={newBoardGame} key={boardGame.id}>*/}
        {/*        <EditOutlined key="edit"/>*/}
        {/*        <LikeOutlined key="like" style={{color: 'green'}}/>*/}
        {/*        <DeleteOutlined key="delete" style={{color: 'red'}}*/}
        {/*                        onClick={() => handlerDeleteBoardGame(boardGame.id!)}/>*/}
        {/*    </CardBoardGame>*/}
        {/*))}*/}
        <ButtonsDrawerSidePanel>
            {(onClose) => (<FormEditCart onClose={onClose}/>)}
        </ButtonsDrawerSidePanel>
    </div>
}