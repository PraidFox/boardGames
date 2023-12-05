import Sequelize from "sequelize";
import express from "express";
import cors from "cors";
import {Message} from "../shared/interface";

const port = 4000;

const app = express();
app.use(cors());
app.use(express.urlencoded())

// @ts-ignore
const sequelize = new Sequelize('f0891902_test', 'f0891902_test', 'qweqwe##$$', {
    host: '141.8.193.236',
    dialect: 'mysql'
})

const pop:Message ={
    title: "Hello",
    body: "World"}

const Users  = sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

app.listen(port, function () {
    console.log("Сервер ожидает подключения...");
});

app.get('/', (req, res) => {
    Users.findAll({raw: true}).then(users => {
        console.log("Вывод", req.body)
        res.json(users)
    }).catch(err => console.log(err));
})