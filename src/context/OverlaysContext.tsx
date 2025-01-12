import {createContext, ReactNode, useState} from "react";
import {IOverlaysContext} from "../tools/interfaces/message.Interface.ts";


export const OverlaysContext = createContext<IOverlaysContext>({} as IOverlaysContext);

export const OverlaysProvider = ({children}: {
    children: ReactNode
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const openOverlay = () => setIsOpen(true);
    const closeOverlay = () => {
        setIsOpen(false)
    };

    return (
        <OverlaysContext.Provider
            value={{isOpen, openOverlay, closeOverlay}}>
            {children}
        </OverlaysContext.Provider>
    )
}