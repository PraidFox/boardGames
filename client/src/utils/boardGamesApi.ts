import axios, {AxiosError} from "axios";
import {BoardGame} from "../../../shared/interface";
import React from "react";

export const createBoardGames = (newBoardGame: BoardGame, setDataBoardGames: React.Dispatch<React.SetStateAction<BoardGame[]>>) => {
    axios.post('http://localhost:4000/boardGames', newBoardGame)
        .then(res => setDataBoardGames(r => r ? [...r, res.data] : [res.data]))
        .catch((error: AxiosError<{error: string}>) => {
            error.response?.data ? console.log(error.response?.data.error) : console.log(error.response)
        })
}

export const deleteBoardGames = (id: number, setDataBoardGames: React.Dispatch<React.SetStateAction<BoardGame[]>>) => {
    axios.delete('http://localhost:4000/boardGames', {params: {id}})
        .then(() => setDataBoardGames(r => r.length > 0 ? r.filter(boardGame => boardGame.id !== id) : []))
}

export const getAllBoardGames = (setDataBoardGames: React.Dispatch<React.SetStateAction<BoardGame[]>>) => {
    axios.get('http://localhost:4000/boardGames')
        .then(res => {
            setDataBoardGames(res.data)
        })
}