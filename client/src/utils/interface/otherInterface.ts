export type UserLogin = {
    login?: string
    loggedIn: boolean
    setLoggedIn: (loggedIn: boolean) => void
}