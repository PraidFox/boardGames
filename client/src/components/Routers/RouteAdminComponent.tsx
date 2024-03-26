import React, {useContext} from "react";
import {UserLoginContext} from "../../context/UserContext";
import {AdminSetting} from "../Structure/Pages/AdminSetting";
import {Navigate} from "react-router-dom";

export const RouteAdminComponent = () => {
    const {loggedIn} = useContext(UserLoginContext);


    return loggedIn ? <AdminSetting/> : <Navigate to="/" replace/>;
};