import React, {useContext} from "react";
import {UserLoginContext} from "../context/UserContext";
import {Navigate, Outlet} from "react-router-dom";
import {useInfoUser} from "../tools/hooks/useInfoUser";

export const PrivateRouter = () => {
    const {loggedIn} = useInfoUser()


    return loggedIn ? <Outlet/> : <Navigate to="/" replace/>;

};