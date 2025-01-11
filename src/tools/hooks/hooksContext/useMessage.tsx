import {useContext} from "react";
import {MessageInfoContext} from "../../interfaces/other.Interface.ts";
import {MessageContext} from "../../../context/MessageContext";

export const useMessage = (): MessageInfoContext => {
    return useContext(MessageContext);
}