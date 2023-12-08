import Sequelize from "sequelize";
import express from "express";
import cors from "cors";
import {board_games} from "./model/tableModels";
import {createInstances, createTable, dropTable} from "./utils";

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

// createTable("board_games", board_games)
//dropTable("board_games")

app.listen(port, function () {
    console.log("Сервер ожидает подключения...");
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

createInstances("board_games", board_games, {name: "test3", description: "test3"})
