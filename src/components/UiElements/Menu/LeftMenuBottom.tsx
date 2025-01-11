import {Avatar, Badge, Menu, Space} from "antd";
import {useLayoutEffect, useState} from "react";
import {ItemMenu} from "../../../tools/storages/ItemMenu";
import {useInfoUser} from "../../../tools/hooks/hooksContext/useInfoUser";
import {UseMenuDriven} from "../../../tools/interfaces/hook.Interface.ts";
import {useMenuDriven} from "../../../tools/hooks/useMenuDriven";
import {LocalStorageUtils} from "../../../tools/utils/LocalStorageUtils";
import {DiscordIcon, TelegramIcon} from "../../../tools/images/svgStorage";
import {UserOutlined} from "@ant-design/icons";


export const LeftMenuBottom = ({collapsedSider}: { collapsedSider: boolean }) => {
    const {menuItems, current, setMenuItems, onClick}: UseMenuDriven = useMenuDriven(ItemMenu.defaultLeftMenu)
    const {id} = useInfoUser()
    const [defaultOpen, setDefaultOpen] = useState<string[]>([])

    useLayoutEffect(() => {
        if (id) {
            setMenuItems(r => [])
        } else {
            setMenuItems(r => [])
        }
    }, [id, setMenuItems]);

    useLayoutEffect(() => {
        const openMenu = LocalStorageUtils.getOpenMenu()["leftMenu"]
        setDefaultOpen(r => openMenu ? openMenu : [])
    }, []);

    const getSocialGroup = () => {
        if (collapsedSider) {
            return <>
                <div style={{textAlign: "center"}}><TelegramIcon style={{fontSize: '40px', cursor: "pointer"}}/></div>
                <br/>
                <div style={{textAlign: "center"}}><DiscordIcon style={{fontSize: '40px', cursor: "pointer"}}/></div>
            </>
        } else {
            return <>
                <div style={{display: "flex", gap: "10px", justifyContent: "center"}}>
                    <div style={{textAlign: "center"}}><TelegramIcon style={{fontSize: '40px', cursor: "pointer"}}/>
                    </div>
                    <div style={{textAlign: "center"}}><DiscordIcon style={{fontSize: '40px', cursor: "pointer"}}/>
                    </div>
                </div>
            </>

        }
    }

    return (<div style={{position: "sticky", top: "75vh"}}>
            <div style={{textAlign: "center"}}><Space>
                <Badge count={8}>
                    <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
                </Badge>
                {!collapsedSider && <b style={{color: "white"}}>PraidFox</b>}
            </Space></div>
            <br/>
            <hr/>
            <br/>
            {getSocialGroup()}
            <br/>
            <hr/>
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