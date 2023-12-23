import {sequelize} from "../index";
import {TableModal} from "../../shared/interface";

export const createTable = (nameTable: string,  settingTable: any) => {
    const modalTable = sequelize.define(nameTable, settingTable);
    return modalTable.sync({ force: true })
}

export const dropTable = (tableModal: TableModal) => {
const modalTable = sequelize.define(tableModal.name);
    return modalTable.drop()
}

export const actualizeTable = (tableModal: TableModal) => {
    const modalTable = sequelize.define(tableModal.name, tableModal.setting);
    return modalTable.sync({ alter: true })
}

export const destroyDataTable = (tableModal: TableModal) => {
    const modalTable = sequelize.define(tableModal.name);
    return modalTable.destroy({
        where: {},
    })
}

export const createInstances = (tableModal: TableModal, data: any) => {
    const modal = sequelize.define(tableModal.name, tableModal.setting);
    return modal.create(data)
}

export const getAllInstances = (tableModal: TableModal) => {
    const modal = sequelize.define(tableModal.name, tableModal.setting);
    return modal.findAll()
}

export const deleteInstances = (tableModal: TableModal, id: number) => {
    const modal = sequelize.define(tableModal.name, tableModal.setting);
    return modal.destroy({
        where: {
            id: id,
        },
    })
}