import {useContext} from "react";
import {OverlaysContext} from "../../../context/OverlaysContext";
import {IOverlaysContext} from "../../interfaces/otherInterface";

export const useOverlays = (): IOverlaysContext => {
    return useContext(OverlaysContext);
}