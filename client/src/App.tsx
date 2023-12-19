import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BoardGame} from "../../shared/interface";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {createBoardGames, deleteBoardGames, getAllBoardGames} from "./utils/boardGamesApi";
import {CardBoardGame} from "./components/СardBoardGame";
import {DeleteOutlined, EditOutlined, LikeOutlined} from '@ant-design/icons';
import {FormEditCart} from "./components/FormEditCart";

function App() {
    const [dataBoardGames, setDataBoardGames] = useState<BoardGame[]>([])
    const [editingCard, setEditingCard] = useState(false)
    //const needUpdate = useRef(true);

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
        <div className="App">
            {dataBoardGames?.map(boardGame => (

                // <button onClick={() => handlerDeleteBoardGame(boardGame.id!)}>Удалить</button>
                <CardBoardGame data={newBoardGame} key={boardGame.id}>

                    <EditOutlined key="edit"/>
                    <LikeOutlined key="like" style={{color: 'green'}}/>
                    <DeleteOutlined key="delete" style={{color: 'red'}} onClick={() => handlerDeleteBoardGame(boardGame.id!)}/>
                </CardBoardGame>


            ))}
            {editingCard ? <FormEditCart handlerCreateBoardGame={handlerCreateBoardGame}/> : <button onClick={() => setEditingCard(true)}>Жми</button>}

        </div>
    );
}

export default App;