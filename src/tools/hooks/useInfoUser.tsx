import {useContext} from "react";
import {UserLoginContext} from "../../context/UserContext";

export const useInfoUser = () => {
    return useContext(UserLoginContext);
}