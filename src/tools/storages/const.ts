export enum FormType {
    REGISTRATION = "registration",
    AUTH = "auth"
}

export enum MyError {
    NEED_AUTHORIZATION = "Нужна повторная авторизация",
}


export enum AliasesCollection {
    FAVORITE = "favorites",
    WISHLIST = "wishlist",
    MY_GAMES = "games"
}

export const notEditCollection: string[] = [AliasesCollection.FAVORITE, AliasesCollection.WISHLIST, AliasesCollection.MY_GAMES]

