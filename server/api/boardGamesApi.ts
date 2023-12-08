import {createInstances, deleteInstances, getInstances} from "../utils";
import {board_games} from "../model/tableModels";
import {Router} from "express";


const boardGamesRouter = Router()
boardGamesRouter.get('/boardGames', (req, res) => {
    getInstances(board_games)
        .then((result: any) => {
            res.send(result);
        })
        .catch((error: any) => {
            res.send(error);
        });
})

boardGamesRouter.post('/boardGames', (req, res) => {
    createInstances(board_games, req.body)
        .then((result: any) => {
            console.log('Запись успешно создана:', result);
            res.send(result.dataValues)
        })
        .catch((error: any) => {
            console.log('Успеха нет:', error);
        });
})

boardGamesRouter.delete('/boardGames', (req, res) => {
    const id: number = Number(req.query.id)
    deleteInstances(board_games, id)
        .then(result => {
                if (result) {
                    res.sendStatus(204)
                } else {
                    res.status(500).json({ error: 'Ошибка при удалении ресурса' });
                }
            }
        )
        .catch(error => {
            console.error('Ошибка:', error);
        });


})


export default boardGamesRouter