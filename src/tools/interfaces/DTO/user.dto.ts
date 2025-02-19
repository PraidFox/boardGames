export interface UserDto {
    age: number
    email: string
    userName: string
    roles: string[]
}

export interface TokenDto {
    accessToken: string
    expiresIn: number
    refreshToken: string
    tokenType: string
}

export interface FilterUsersDTO {
    userNameSearch?: string
    page: number
    pageSize: number
}


