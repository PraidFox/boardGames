import {Menu} from "antd";
import React, {useLayoutEffect, useState} from "react";
import {ItemMenu} from "../../tools/storages/ItemMenu";
import {useInfoUser} from "../../tools/hooks/hooksContext/useInfoUser";
import {UseMenuDriven} from "../../tools/interfaces/hooksInterface";
import {useMenuDriven} from "../../tools/hooks/useMenuDriven";
import {LocalStorageUtils} from "../../tools/utils/LocalStorageUtils";


export const LeftMenu = () => {
    const {menuItems, current, setMenuItems, onClick}: UseMenuDriven = useMenuDriven(ItemMenu.defaultLeftMenu)
    const {loggedIn} = useInfoUser()
    const [defaultOpen, setDefaultOpen] = useState<string[]>()


    useLayoutEffect(() => {
        if (loggedIn) {
            setMenuItems(r => r ? [ItemMenu.userItems, ...r] : [ItemMenu.userItems])
        } else {
            setMenuItems(r => r?.filter(x => x?.key !== ItemMenu.userItems?.key))
        }
    }, [loggedIn, setMenuItems]);

    useLayoutEffect(() => {
        const openMenu = LocalStorageUtils.getOpenMenu()["leftMenu"]
        setDefaultOpen(openMenu ? openMenu : [])
    }, []);

    console.log("current", current)

    return (<>
            {defaultOpen && <Menu
                theme="dark"
                mode="inline"
                defaultOpenKeys={defaultOpen}
                onOpenChange={e => LocalStorageUtils.setOpenMenu(e, "leftMenu")}
                selectedKeys={current ? [current] : []}
                items={menuItems}
                onClick={onClick}
            />}
        </>

    )

}