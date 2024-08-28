import {BoardGameDTO} from "../interfaces/DTOinterface";
import {LocalStorageKeys} from "../storages/localStorageKeys";

export abstract class SessionStorageUtils {
    private static getItem = (key: string): string | null => {
        return sessionStorage.getItem(key)
    }
    private static setItem = (key: string, value: string) => {
        sessionStorage.setItem(key, value)
    }
    static setAllBoardGames = (data: BoardGameDTO[]) => {
        this.setItem(LocalStorageKeys.BOARD_GAMES_DATA, JSON.stringify(data))
    }

    static getAllBoardGames = (): BoardGameDTO[] | undefined => {
        const data = this.getItem(LocalStorageKeys.BOARD_GAMES_DATA)
        if (data) {
            return JSON.parse(data)
        } else {
            return undefined
        }
    }
}