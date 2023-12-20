import Sequelize from "sequelize";
import express from "express";
import cors from "cors";
import boardGamesRouter from "./api/boardGamesApi";
import {dropTable, getAllInstances} from "./utils";
import {board_games} from "./model/tableModels";

const port = 4000;

const app = express();
app.use(cors());
// app.use(express.urlencoded())
app.use(express.json())

// @ts-ignore
export const sequelize = new Sequelize('f0891902_test', 'f0891902_admin', 'qweqwe123##$$', {
    host: '141.8.193.236',
    dialect: 'mysql',
    define: {
        freeTableName: true,
    }
})

    sequelize.authenticate()
        .then(() => {
            console.log('Соединение с БД было успешно установлено')
            app.listen(port, () => {
                console.log(`Сервер запущен на порту ${port}`)
            });


            app.get('/', (req, res) => {
                res.send("Текст")
                // res.json({ message: 'Page not found' })
                // console.log("ИНФА", res.statusMessage)

                //Так ошибка!!!!!!!
                // res.json(res)
            })

            app.use("/", boardGamesRouter)

            //Обработчик ошибок
            app.use((err, req, res, next) => {
                res.status(500).json({ error: err.message });
            });

            app.use('*', (req, res) => {
                res.status(404).json({ message: 'Страница не найдена' })
            })
        })
        .catch(err => console.log('Невозможно выполнить подключение к БД: ', err))






