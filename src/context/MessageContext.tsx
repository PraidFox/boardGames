import {createContext, ReactNode} from "react";
import {MessageInfoContext} from "../tools/interfaces/other.Interface.ts";
import {message} from "antd";
import {ArgsProps} from "antd/es/message/interface";

export const MessageContext = createContext<MessageInfoContext>({} as MessageInfoContext);

export const MessageProvider = ({children}: {
    children: ReactNode
}) => {
    const [messageApi, contextHolder] = message.useMessage();

    const setSettingMessage = (messageSetting: ArgsProps) => {
        messageApi.open({...messageSetting});
    }

    return (
        <MessageContext.Provider
            value={{setSettingMessage, contextHolder}}>
            {children}
        </MessageContext.Provider>
    )
}