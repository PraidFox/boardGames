import {MyError} from "../storages/const";
import React from "react";
import {ArgsProps} from "antd/es/message/interface";


export interface UserInfo {
    id: number
    loggedIn: boolean
    nickname: string | null
}

export interface AuthContext extends Partial<UserInfo> {
    authUser: (email: string, password: string, remember: boolean) => Promise<void>
    logoutUser: () => void
}

export interface MyErrorInfo {
    nameError: MyError
}

export interface MyErrorContext extends Partial<MyErrorInfo> {
    setErrorInfo: (errorInfo: MyErrorInfo | null) => void
}

// export type MessageInfo = {
//     textMessage: string
//     textLoading: string
//     type: "success" | "info" | "warning" | "error"
//     duration: number
// }

export interface MessageInfoContext {
    setSettingMessage: (settingMessage: ArgsProps) => void
    contextHolder: React.ReactElement<any, string | React.JSXElementConstructor<any>>
}

// export type MessageInfoType = {
//     text: string
//     type: "success" | "info" | "warning" | "error"
//     width?: string
// }
