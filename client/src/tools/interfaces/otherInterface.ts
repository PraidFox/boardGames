export type UserInfo = {
    loggedIn: boolean
    nickname: string | null
}

export type AuthContext = {
    loggedIn: boolean,
    nickname: string | null,
    authUser: (email: string, password: string) => void
    logoutUser: () => void
}

export type MessageInfoType = {
    text: string
    type: "success" | "info" | "warning" | "error"
    width?: string
}
