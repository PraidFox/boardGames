import {useLayoutEffect, useState} from "react";
import {MenuProps} from "antd";
import {useLocation} from "react-router";
import {UseMenuDriven} from "../interfaces/hook.Interface.ts";

export const useMenuDriven = (defaultMenu?: MenuProps['items']): UseMenuDriven => {
    const location = useLocation();

    const [menuItems, setMenuItems] = useState<MenuProps["items"]>(defaultMenu)
    const [current, setCurrent] = useState<string>(location.pathname);

    useLayoutEffect(() => {
        setCurrent(location.pathname)
    }, [location.pathname]);

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };

    return {current, menuItems, setMenuItems, onClick}
}