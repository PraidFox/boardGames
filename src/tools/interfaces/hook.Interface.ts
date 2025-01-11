import {MenuProps} from "antd";
import {Dispatch, SetStateAction} from "react";

export interface UseMenuDriven {
    current: string
    menuItems: MenuProps['items']
    setMenuItems: Dispatch<SetStateAction<MenuProps['items']>>
    onClick: MenuProps['onClick']
}