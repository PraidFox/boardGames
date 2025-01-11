import {createContext, ReactNode, useState} from "react";
import {MyErrorContext, MyErrorInfo} from "../tools/interfaces/other.Interface.ts";

export const ErrorContext = createContext<MyErrorContext>({} as MyErrorContext);

export const ErrorProvider = ({children}: {
    children: ReactNode
}) => {
    const [errorInfo, setErrorInfo] = useState<MyErrorInfo | null>(null)

    return <ErrorContext.Provider
        value={{...errorInfo, setErrorInfo}}>
        {children}
    </ErrorContext.Provider>
}