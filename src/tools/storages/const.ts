export enum FormType {
    REGISTRATION = "registration",
    AUTH = "auth"
}

export enum ConfidentialType {
    ONLY_ME = 0,
    ONLY_FRIENDS = 1,
    ALL_ALLOWED = 2
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

export const pictureStub = `https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png`