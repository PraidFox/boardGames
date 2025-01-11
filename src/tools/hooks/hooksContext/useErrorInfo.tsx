import {useContext} from "react";
import {MyErrorContext} from "../../interfaces/other.Interface.ts";
import {ErrorContext} from "../../../context/ErrorContext";

export const useErrorInfo = (): MyErrorContext => {
    return useContext(ErrorContext);
}