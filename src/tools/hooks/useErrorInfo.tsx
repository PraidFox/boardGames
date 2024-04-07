import {useContext} from "react";
import {MyErrorContext} from "../interfaces/otherInterface";
import {ErrorContext} from "../../context/ErrorContext";

export const useErrorInfo = (): MyErrorContext => {
    return useContext(ErrorContext);
}