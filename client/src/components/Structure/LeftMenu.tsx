import {Menu} from "antd";
import React, {useContext, useLayoutEffect, useState} from "react";
import {boardGame, user} from "../../tools/storages/itemMenu";
import {UserLoginContext} from "../../context/UserContext";

export const LeftMenu = () => {
    const [itemsMenu, setItemsMenu] = useState([boardGame])

    const {loggedIn} = useContext(UserLoginContext)
    useLayoutEffect(() => {
        if (loggedIn) {
            setItemsMenu(r => [user, ...r])
        } else {
            setItemsMenu(r => r.filter(x => x?.key !== "user"))
        }
    }, [loggedIn]);

    return (
        <Menu
            theme="dark"
            mode="inline"
            defaultOpenKeys={['user']}
            items={itemsMenu}
        />
    )

}