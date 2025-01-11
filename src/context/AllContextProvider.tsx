import {ReactNode} from "react";
import {UserLoginProvider} from "./UserContext";
import {ErrorProvider} from "./ErrorContext";
import {MessageProvider} from "./MessageContext";
import {OverlaysProvider} from "./OverlaysContext";

export const AllContextProvider = ({children}: {
    children: ReactNode
}) => {
    return (
        <MessageProvider>
            <ErrorProvider>
                <UserLoginProvider>
                    <OverlaysProvider>
                        {children}
                    </OverlaysProvider>
                </UserLoginProvider>
            </ErrorProvider>
        </MessageProvider>
    )
}