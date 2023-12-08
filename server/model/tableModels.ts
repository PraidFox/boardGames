import Sequelize from "sequelize";
import {TableModal} from "../../shared/interface";

export const board_games:TableModal = {name: "board_games", setting: {
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
        description: {
            type: Sequelize.STRING,
        },
        min_players: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
            },
            defaultValue: 1
        },
        max_players: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }}