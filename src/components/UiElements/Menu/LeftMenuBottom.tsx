import {Menu} from "antd";
import React, {useLayoutEffect, useState} from "react";
import {ItemMenu} from "../../../tools/storages/ItemMenu";
import {useInfoUser} from "../../../tools/hooks/hooksContext/useInfoUser";
import {UseMenuDriven} from "../../../tools/interfaces/hooksInterface";
import {useMenuDriven} from "../../../tools/hooks/useMenuDriven";
import {LocalStorageUtils} from "../../../tools/utils/LocalStorageUtils";
import {DiscordIcon, TelegramIcon} from "../../../tools/images/svgStorage";


export const LeftMenuBottom = () => {
    const {menuItems, current, setMenuItems, onClick}: UseMenuDriven = useMenuDriven(ItemMenu.defaultLeftMenu)
    const {id} = useInfoUser()
    const [defaultOpen, setDefaultOpen] = useState<string[]>()

    useLayoutEffect(() => {
        if (id) {
            setMenuItems(r => [])
        } else {
            setMenuItems(r => [ItemMenu.authorizationItems])
        }
    }, [id, setMenuItems]);

    useLayoutEffect(() => {
        const openMenu = LocalStorageUtils.getOpenMenu()["leftMenu"]
        setDefaultOpen(openMenu ? openMenu : [])
    }, []);


    return (<div style={{position: "sticky", top: "82vh"}}>
            <div style={{textAlign: "center"}}><TelegramIcon style={{fontSize: '50px', cursor: "pointer"}}/></div>
            <br/>
            <div style={{textAlign: "center"}}><DiscordIcon style={{fontSize: '50px', cursor: "pointer"}}/></div>
            
            {defaultOpen && <Menu
                theme="dark"
                mode="inline"
                defaultOpenKeys={[...defaultOpen, ...current.split("/").map(x => `/${x}`)]}

                onOpenChange={e => LocalStorageUtils.setOpenMenu(e, "leftMenu")}
                //onOpenChange={e => console.log(e)}
                selectedKeys={current ? [current] : []}
                items={menuItems}
                onClick={onClick}
            />}
        </div>

    )

}