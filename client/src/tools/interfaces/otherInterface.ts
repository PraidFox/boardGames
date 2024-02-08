export type UserContext = {
    login?: string
    accessToken?: string
    refreshToken?: string
    loggedIn: boolean

    setLoggedInAndStorage: (accessToken: string, refreshToken: string) => void
    setLogout: () => void
}

export type MessageInfoType = {
    text: string
    type: "success" | "info" | "warning" | "error"
    width?: string
}
