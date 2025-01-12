import {MyError} from "../storages/const";
import {ArgsProps} from "antd/es/message/interface";
import {JSXElementConstructor, ReactElement} from "react";

//
// export interface UserInfo {
//     id: number
//     nickname: string
//     email: string
// }
//

// export interface AuthContext extends Partial<UserInfo> {
//     authUser: (login: string, password: string, remember: boolean) => Promise<void>
//     logoutUser: () => void,
//     rememberUser: boolean
// }

export interface MyErrorInfo {
    nameError: MyError
}

export interface MyErrorContext extends Partial<MyErrorInfo> {
    setErrorInfo: (errorInfo: MyErrorInfo | null) => void
}


export interface MessageInfoContext {
    setSettingMessage: (settingMessage: ArgsProps) => void
    contextHolder: ReactElement<any, string | JSXElementConstructor<any>>
}

export interface IOverlaysContext {
    isOpen: boolean
    openOverlay: () => void
    closeOverlay: () => void
}
