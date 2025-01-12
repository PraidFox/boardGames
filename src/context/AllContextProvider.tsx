import {ReactNode} from "react";

import {OverlaysProvider} from "./OverlaysContext";

export const AllContextProvider = ({children}: {
    children: ReactNode
}) => {
    return (
        <OverlaysProvider>
            {children}
        </OverlaysProvider>
    )
}