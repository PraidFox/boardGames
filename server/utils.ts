import {sequelize} from "./index";
import {BoardGame} from "../shared/interface";
import {board_games} from "./model/tableModels";
export const createTable = (nameTable: string,  settingTable: any) => {
    const modalTable = sequelize.define(nameTable, settingTable);
    return modalTable.sync({ force: true })
    //return modalTable.drop()
}

export const dropTable = (nameTable: string) => {
const modalTable = sequelize.define(nameTable);
    return modalTable.drop()
}

export const createInstances = (nameTable: string, modalTable: any, data: any) => {
    const modal = sequelize.define(nameTable, modalTable);
    return modal.create(data)
}