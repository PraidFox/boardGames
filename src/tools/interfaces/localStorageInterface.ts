export interface TokenInfoLS {
    accessToken: string | null
    refreshToken: string | null
    entryTime: string | null
    expiresIn: string | null
}

export interface UserInfoLS {
    idUser: number
}

export interface OpenMenuKey {
    leftMenu: string[]

}