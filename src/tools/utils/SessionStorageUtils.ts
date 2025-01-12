import {StorageKeys} from "../storages/StorageKeys.ts";
import {CurrentBoardGameDto} from "../interfaces/DTO/boardGame.dto.ts";

export abstract class SessionStorageUtils {
    static setAllBoardGames = (data: CurrentBoardGameDto[]) => {
        this.setItem(StorageKeys.BOARD_GAMES_DATA, JSON.stringify(data))
    }

    static getAllBoardGames = (): CurrentBoardGameDto[] | undefined => {
        const data = this.getItem(StorageKeys.BOARD_GAMES_DATA)
        if (data) {
            return JSON.parse(data)
        } else {
            return undefined
        }
    }

    private static getItem = (key: string): string | null => {
        return sessionStorage.getItem(key)
    }

    private static setItem = (key: string, value: string) => {
        sessionStorage.setItem(key, value)
    }
}