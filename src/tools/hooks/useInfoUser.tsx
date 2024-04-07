import {useContext} from "react";
import {UserLoginContext} from "../../context/UserContext";
import {AuthContext} from "../interfaces/otherInterface";

export const useInfoUser = (): AuthContext => {
    return useContext(UserLoginContext);
}