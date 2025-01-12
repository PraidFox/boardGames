import {useContext} from "react";
import {MyErrorContext} from "../../interfaces/message.Interface.ts";
import {ErrorContext} from "../../../context/ErrorContext";

export const useErrorInfo = (): MyErrorContext => {
    return useContext(ErrorContext);
}