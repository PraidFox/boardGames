export type UserLogin = {
    login?: string
    loggedIn: boolean
    setLoggedIn: (loggedIn: boolean) => void
}

export type MessageInfoType = {
    text: string
    type: "success" | "info" | "warning" | "error"
    width?: string
}