import {useContext} from "react";
import {MessageInfoContext} from "../../interfaces/message.Interface.ts";
import {MessageContext} from "../../../context/MessageContext";

export const useMessage = (): MessageInfoContext => {
    return useContext(MessageContext);
}