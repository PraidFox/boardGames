import React, {ReactNode} from "react";
import {UserLoginProvider} from "./UserContext";
import {ErrorProvider} from "./ErrorContext";
import {MessageProvider} from "./MessageContext";

export const AllContextProvider = ({children}: {
    children: ReactNode
}) => {
    return (
        <MessageProvider>
            <ErrorProvider>
                <UserLoginProvider>
                    {children}
                </UserLoginProvider>
            </ErrorProvider>
        </MessageProvider>
    )
}