import {useContext} from "react";
import {OverlaysContext} from "../../../context/OverlaysContext";
import {IOverlaysContext} from "../../interfaces/other.Interface.ts";

export const useOverlays = (): IOverlaysContext => {
    return useContext(OverlaysContext);
}