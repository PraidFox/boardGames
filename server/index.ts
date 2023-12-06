import Sequelize from "sequelize";
import express from "express";
import cors from "cors";
import {Message} from "../shared/interface";

const port = 4000;

const app = express();
app.use(cors());
// app.use(express.urlencoded())
app.use(express.json())

// @ts-ignore
const sequelize = new Sequelize('f0891902_test', 'f0891902_test', 'qweqwe##$$', {
    host: '141.8.193.236',
    dialect: 'mysql'
})

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

app.use("/", function (request, response, next) {
    response.send("О сайте");
    next()
});


app.post("/", function (request, response) {
    console.log("Данные", request.body);
    //ТАК ОШИБКА, ИСПРАВИТЬ! {message: "Тут текст"}
    response.send({message: "Тут текст"});
    //response.json({message: "Тут текст"})
});
// app.get('/', (req, res) => {
//     console.log("Вывод", req.query)
//     res.send("Hello")
//     // Users.findAll({raw: true}).then(users => {
//     //     console.log("Вывод", req.body)
//     //     res.json(users)
//     // }).catch(err => console.log(err));
// })