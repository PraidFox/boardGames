export interface UserInfo {
    loggedIn: boolean
    nickname: string | null
}

export interface AuthContext extends UserInfo {
    authUser: (email: string, password: string, remember: boolean) => void
    logoutUser: () => void
}

export type MessageInfoType = {
    text: string
    type: "success" | "info" | "warning" | "error"
    width?: string
}
