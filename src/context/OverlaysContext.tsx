import React, {createContext, ReactNode, useState} from "react";
import {IOverlaysContext} from "../tools/interfaces/otherInterface";


export const OverlaysContext = createContext<IOverlaysContext>({} as IOverlaysContext);

export const OverlaysProvider = ({children}: {
    children: ReactNode
}) => {
    const [isOpen, setIsOpen] = useState(false);

    console.log("isOpen", isOpen)
    const openOverlay = () => setIsOpen(true);
    const closeOverlay = () => {
        console.log("isOpenBed", isOpen)
        setIsOpen(false)
    };

    return (
        <OverlaysContext.Provider
            value={{isOpen, openOverlay, closeOverlay}}>
            {children}
        </OverlaysContext.Provider>
    )
}