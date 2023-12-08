import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BoardGame} from "../../shared/interface";

function App() {
    const [dataBoardGames, setDataBoardGames] = useState<BoardGame[] | null>(null)
    //const needUpdate = useRef(true);

    const newBoardGame: BoardGame = {
        name: "Название игры новое",
        max_players: 5,
        min_players: 23,
    }

    useEffect(() => {
        axios.get('http://localhost:4000/boardGames')
            .then(res => setDataBoardGames(res.data))
    }, []);

    const handlerCreateBoardGame = () => {
        axios.post('http://localhost:4000/boardGames', newBoardGame)
            .then(res => setDataBoardGames(r => r ? [...r, res.data] : [res.data]))
    }

    const handlerDeleteBoardGame = (id: number) => {
        axios.delete('http://localhost:4000/boardGames', {params: {id}})
            .then(r => console.log("delete", r))
            .then(() => setDataBoardGames(r => r ? r.filter(boardGame => boardGame.id !== id) : null))
    }

    return (
        <div className="App">
            {dataBoardGames?.map(boardGame => (
                <div key={boardGame.id}>
                    {boardGame.name}
                    {boardGame.description}
                    {boardGame.min_players}
                    {boardGame.max_players}
                    <button onClick={() => handlerDeleteBoardGame(boardGame.id!)}>Удалить</button>
                </div>

            ))}
            <button onClick={handlerCreateBoardGame}>Жми</button>
        </div>
    );
}

export default App;
