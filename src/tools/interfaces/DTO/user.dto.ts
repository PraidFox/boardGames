export interface UserDto {
    age: number
    email: string
    userName: string
}

export interface TokenDto {
    accessToken: string
    expiresIn: number
    refreshToken: string
    tokenType: string
}


