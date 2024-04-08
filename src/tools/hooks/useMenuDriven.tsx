import {useLayoutEffect, useState} from "react";
import {MenuProps} from "antd";
import {useLocation} from "react-router-dom";
import {UseMenuDriven} from "../interfaces/hooksInterface";

export const useMenuDriven = (defaultMenu?: MenuProps['items']): UseMenuDriven => {
    const [menuItems, setMenuItems] = useState<MenuProps["items"]>(defaultMenu)
    const [current, setCurrent] = useState<string>();

    let location = useLocation();
    
    useLayoutEffect(() => {
        setCurrent(location.pathname)
    }, [location.pathname]);

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };

    return {current, menuItems, setMenuItems, onClick}
}