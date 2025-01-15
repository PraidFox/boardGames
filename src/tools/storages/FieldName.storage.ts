/**NF - name field*/

/**Имена полей для формы авторизации*/
export enum NF_Auth {
    LOGIN = 'login',
    PASSWORD = 'password',
    REMEMBER_ME = 'rememberMe',
}

/**Имена полей для формы регистрации*/
export enum NF_Registration {
    EMAIL = 'email',
    USER_NAME = 'userName',
    PASSWORD = 'password',
    PASSWORD_REPEAT = 'passwordRepeat',
    USER_TYPE = 'userType',
    REMEMBER_ME = 'rememberMe',
}

/**Имена полей для панели фильтрации настолок*/
export enum NF_FilterBoardGames {
    NAME_BG = 'nameBoardGame',
    TYPE_BG = 'typeBoardGame',
    GENRE_BG = 'genreBoardGame',
    PLAYER_AGE = 'playerAge',
    COUNT_PLAYERS_MIN_MAX = 'countPlayersMinMax',
}

