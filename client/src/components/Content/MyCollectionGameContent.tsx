import React, {useEffect, useState} from "react";
import {BoardGame} from "../../../../shared/interface";
import {FormEditCart} from "../Forms/FormsEditCart/FormEditCart";
import {DrawerSidePanel} from "../../componentsAnt/DrawerSidePanel";

export const MyCollectionGameContent = () => {
    const [dataBoardGames, setDataBoardGames] = useState<BoardGame[]>([])


    return (
        <>
            {/*    {dataBoardGames?.map(boardGame => (*/}
            {/*    // <button onClick={() => handlerDeleteBoardGame(boardGame.id!)}>Удалить</button>*/}
            {/*    <CardBoardGame data={newBoardGame} key={boardGame.id}>*/}
            {/*        <EditOutlined key="edit"/>*/}
            {/*        <LikeOutlined key="like" style={{color: 'green'}}/>*/}
            {/*        <DeleteOutlined key="delete" style={{color: 'red'}}*/}
            {/*                        onClick={() => handlerDeleteBoardGame(boardGame.id!)}/>*/}
            {/*    </CardBoardGame>*/}
            {/*))}*/}
            <DrawerSidePanel>
                {(onClose) => (<FormEditCart onClose={onClose}/>)}
            </DrawerSidePanel>
        </>
    )

}