import {ArgsProps} from "antd/es/message/interface";

export class StorageSettingMessage {
    static authorizationAccess: ArgsProps = {
        key: "authorization",
        type: "success",
        content: "Вы успешно авторизовались",
        duration: 4
    }

    static authorizationError: ArgsProps = {
        key: "authorization",
        type: "error",
        content: "Логин или пароль введены не верно. Или вы пытаетесь кого-то взломать",
        duration: 8
    }

    static authorizationLoading: ArgsProps = {
        key: "authorization",
        type: "loading",
        content: "Идёт авторизация...",
        duration: 0
    }

    static loggedOut: ArgsProps = {
        key: "loggedOut",
        type: "success",
        content: "Возвращайтесь, будем рады вновь вас видеть! 🤩",
        duration: 8
    }

    static registrationError: ArgsProps = {
        key: "registration",
        type: "error",
        content: "Ошибка регистрации, попробуйте повторить позже",
        duration: 8
    }
}