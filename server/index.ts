import Sequelize from "sequelize";
import express from "express";
import cors from "cors";
import boardGamesRouter from "./api/boardGamesApi";

const port = 4000;

const app = express();
app.use(cors());
// app.use(express.urlencoded())
app.use(express.json())

// @ts-ignore
export const sequelize = new Sequelize('f0891902_test', 'f0891902_test', 'qweqwe##$$', {
    host: '141.8.193.236',
    dialect: 'mysql',
    define: {
        freeTableName: true,
    },
})

//createTable(board_games)
//dropTable(board_games)
//actualizeTable( board_games)
//destroyDataTable(board_games)
app.listen(port, function () {
    console.log("Сервер ожидает подключения...");
});

app.get('/', (req, res) => {

    res.send("Текст")

    // res.json({ message: 'Page not found' })
    // console.log("ИНФА", res.statusMessage)

    //Так ошибка!!!!!!!
    // res.json(res)
})

app.use("/", boardGamesRouter)
app.use('*', (req, res) => {
    res.status(404).json({ message: 'Страница не найдена' })
})




