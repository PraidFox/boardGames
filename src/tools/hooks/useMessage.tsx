import {useContext} from "react";
import {MessageInfoContext} from "../interfaces/otherInterface";
import {MessageContext} from "../../context/MessageContext";

export const useMessage = (): MessageInfoContext => {
    return useContext(MessageContext);
}