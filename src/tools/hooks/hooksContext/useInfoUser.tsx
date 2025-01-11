import {useContext} from "react";
import {UserLoginContext} from "../../../context/UserContext";
import {AuthContext} from "../../interfaces/other.Interface.ts";

export const useInfoUser = (): AuthContext => {
    return useContext(UserLoginContext);
}