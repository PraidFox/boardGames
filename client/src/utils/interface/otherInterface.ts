export type UserLogin = {
    login?: string
    loggedIn: boolean
    setLoggedInAndStorage: (loggedIn: boolean) => void
}

export type MessageInfoType = {
    text: string
    type: "success" | "info" | "warning" | "error"
    width?: string
}

// export type LocalStorage = {
//     email?: string
//     password?: string
//     loggedIn?: boolean
//
// }