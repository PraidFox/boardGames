import {sequelize} from "./index";
export const createTable = (nameTable: string,  settingTable: any) => {
    const modalTable = sequelize.define(nameTable, settingTable);
    return modalTable.sync({ force: true })
    //return modalTable.drop()
}