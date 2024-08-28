export enum FormType {
    REGISTRATION = "registration",
    AUTH = "auth"
}

export enum MyError {
    NEED_AUTHORIZATION = "Нужна повторная авторизация",
}

export enum PathStorage {
    LEFT_USER = "/user",
    LEFT_BOARD_GAMES = "/boardGames",
    LEFT_OTHER = "/other",
    LEFT_ADMIN = "/admin",

    ALL_BOARD_GAMES = "/allBoardGames",
    USERS = "/users",
    ARTICLES = "/articles",
    MY_SETTING = "/mySetting",
    MY_FRIENDS = "/myFriends",
    BOARD_GAME = "/boardGame",
    ADMIN_SETTING = "/adminSetting",
    MY_COLLECTIONS = "/myCollections",
    COLLECTIONS = "/collectionsBG",
    RATING_BOARD_GAMES = "/ratingBG",
    EVENTS = "/events",
    VK = "/VK",
    NOTIFICATION = "/notification", //СДЕЛАТЬ СТРАНИЦУ
    PROFILE = "/profile", //СДЕЛАТЬ СТРАНИЦУ
}

export enum AliasesCollection {
    FAVORITE = "favorites",
    WISHLIST = "wishlist",
    MY_GAMES = "games"
}

export const notEditCollection: string[] = [AliasesCollection.FAVORITE, AliasesCollection.WISHLIST, AliasesCollection.MY_GAMES]

