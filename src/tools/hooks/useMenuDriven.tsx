import {useLayoutEffect, useState} from "react";
import {MenuProps} from "antd";
import {useLocation} from "react-router-dom";
import {UseMenuDriven} from "../interfaces/hooksInterface";

export const useMenuDriven = (defaultMenu?: MenuProps['items']): UseMenuDriven => {
    let location = useLocation();

    const [menuItems, setMenuItems] = useState<MenuProps["items"]>(defaultMenu)
    const [current, setCurrent] = useState<string>(location.pathname);


    console.log(location.pathname)
    console.log("current", current)

    useLayoutEffect(() => {
        setCurrent(location.pathname)
    }, [location.pathname]);

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };

    return {current, menuItems, setMenuItems, onClick}
}