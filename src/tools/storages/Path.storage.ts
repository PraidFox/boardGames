import {AliasesCollection} from "./const.ts";

export enum PathStorage {
    WELCOME = "welcome",
    BOARD_GAMES = "boardGames",
    USERS = "users",
    USER = "user",
    ARTICLES = "articles",
    MY_SETTING = "mySetting",
    FRIENDS = "friends",
    BOARD_GAME = "boardGame",
    ADMIN_SETTING = "adminSetting",
    COLLECTIONS_USER = "collections",
    RATING_BOARD_GAMES = "ratingBG",
    EVENTS = "events",
    VK = "VK",
    NOTIFICATION = "notification",
    PROFILE = "profile",
    MY_GAMES=AliasesCollection.MY_GAMES
}

export const pathUserProfilePage = (id: number) => `${PathStorage.USER}/${id}/${PathStorage.PROFILE}`