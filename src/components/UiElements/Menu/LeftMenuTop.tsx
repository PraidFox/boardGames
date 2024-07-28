import {Menu} from "antd";
import React, {useLayoutEffect, useState} from "react";
import {ItemMenu} from "../../../tools/storages/ItemMenu";
import {useInfoUser} from "../../../tools/hooks/hooksContext/useInfoUser";
import {UseMenuDriven} from "../../../tools/interfaces/hooksInterface";
import {useMenuDriven} from "../../../tools/hooks/useMenuDriven";
import {LocalStorageUtils} from "../../../tools/utils/LocalStorageUtils";


export const LeftMenuTop = () => {
    const {menuItems, current, setMenuItems, onClick}: UseMenuDriven = useMenuDriven(ItemMenu.defaultLeftMenu)
    const {id} = useInfoUser()
    const [defaultOpen, setDefaultOpen] = useState<string[]>()

    console.log(defaultOpen)

    useLayoutEffect(() => {
        if (id) {
            //setMenuItems(r => r ? [ItemMenu.userItems, ...r, ItemMenu.otherItems, ItemMenu.adminItems] : [ItemMenu.userItems])
            setMenuItems(r => [ItemMenu.boardGamesItems, ItemMenu.userItems, ItemMenu.otherItems, ItemMenu.adminItems])
        } else {
            setMenuItems(r => r?.filter(x => x?.key !== ItemMenu.userItems?.key) || [])
            //setMenuItems(r => [ItemMenu.boardGamesItems, ItemMenu.authorizationItems])
        }
    }, [id, setMenuItems]);

    useLayoutEffect(() => {
        const openMenu = LocalStorageUtils.getOpenMenu()["leftMenu"]
        setDefaultOpen(openMenu ? openMenu : [])
    }, []);


    return (<div style={{position: "sticky", top: 0}}>
            {defaultOpen && <Menu
                theme="dark"
                mode="inline"
                defaultOpenKeys={[...defaultOpen, ...current.split("/").map(x => `/${x}`)]}
                onOpenChange={e => LocalStorageUtils.setOpenMenu(e, "leftMenu")}
                selectedKeys={current ? [current] : []}
                items={menuItems}
                onClick={onClick}
            />}
        </div>

    )

}