export enum PathStorage {
    BOARD_GAMES = "boardGames",
    USERS = "users",
    USER = "user",
    ARTICLES = "articles",
    MY_SETTING = "mySetting",
    FRIENDS = "friends",
    BOARD_GAME = "boardGame",
    ADMIN_SETTING = "adminSetting",
    COLLECTIONS = "collectionsBG",
    RATING_BOARD_GAMES = "ratingBG",
    EVENTS = "events",
    VK = "VK",
    NOTIFICATION = "notification",
    PROFILE = "profile",
}

export const pathUserProfilePage = (id: number) => `${PathStorage.USER}/${id}/${PathStorage.PROFILE}`