import Sequelize from "sequelize";
import express from "express";
import cors from "cors";
import {board_games} from "./model/tablesModel";
import {createTable} from "./utils";

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

createTable("board_games", board_games).then( r => console.log("r", r))
app.listen(port, function () {
    console.log("Сервер ожидает подключения...");
});

app.use("/", function (request, response) {
   response.send("О сайте");
});
//
// app.post("/", function (request, response) {
//     console.log("Данные", request.body);
//     //ТАК ОШИБКА, ИСПРАВИТЬ! {message: "Тут текст"}
//     response.json({message: "Тут текст"})
// });
