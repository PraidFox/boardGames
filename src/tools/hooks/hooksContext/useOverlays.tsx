import {useContext} from "react";
import {OverlaysContext} from "../../../context/OverlaysContext";
import {IOverlaysContext} from "../../interfaces/message.Interface.ts";

export const useOverlays = (): IOverlaysContext => {
    return useContext(OverlaysContext);
}