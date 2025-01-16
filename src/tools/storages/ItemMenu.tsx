import {BookOutlined, CalendarOutlined, UserOutlined, WarningOutlined} from "@ant-design/icons";
import {NavLink} from "react-router";

import {MenuProps} from "antd";
import {FormLogin} from "../../components/Forms/FormsAuthLogin/FormLogin/FormLogin";
import {PopoverForm} from "../../components/Modals/PopoverForm";
import {TabsFormAuthLogin} from "../../components/Forms/FormsAuthLogin/TabsFormAuthLogin";
import {ModalForm} from "../../components/Modals/ModalForm";
import {PathStorage} from "./Path.storage.ts";
import {ReactNode} from "react";


type MenuItem = Required<MenuProps>['items'][number];


export class ItemMenu {


    /**Статичные пути*/
    static allBoardGames: MenuItem = this.toItemType(PathStorage.BOARD_GAMES, "Все настолки")
    static ratingBoardGames: MenuItem = this.toItemType(PathStorage.RATING_BOARD_GAMES, "Рейтинг")
    static mySetting: MenuItem = this.toItemType(PathStorage.MY_SETTING, "Настройки")
    static articles: MenuItem = this.toItemType(PathStorage.ARTICLES, "Статьи")
    static players: MenuItem = this.toItemType(PathStorage.USERS, "Игроки")
    static events: MenuItem = this.toItemType(PathStorage.EVENTS, "Мероприятия")
    static adminSetting: MenuItem = this.toItemType(PathStorage.ADMIN_SETTING, "Войти в админку")

    static login: MenuItem = this.toItemType("login", <PopoverForm>
        {(onClose: () => void) => <FormLogin nameForm={"popoverAuth"} onClose={onClose}/>}
    </PopoverForm>)
    static authorization: MenuItem = this.toItemType("authorization", <ModalForm>
        {(onClose: () => void) =>
            <TabsFormAuthLogin onClose={onClose}/>}
    </ModalForm>)
    static authorizationItems: MenuItem = {
        key: "authItems",
        icon: <UserOutlined/>,
        label: `Авторизация`,
        children: [
            this.login, this.authorization
        ]
    }
    static otherItems: MenuItem = {
        key: "otherItems",
        icon: <CalendarOutlined/>,
        label: `Прочее`,
        children: [
            this.articles, this.players, this.events
        ]
    }
    static adminItems: MenuItem = {
        key: "adminItems",
        icon: <WarningOutlined/>,
        label: `Для админов`,
        children: [
            this.adminSetting
        ]
    }
    static boardGamesItems: MenuItem = {
        key: "boardGamesItems",
        icon: <BookOutlined/>,
        label: `Настолки`,
        children: [this.allBoardGames, this.ratingBoardGames]
    }

    static menuForNoAuthUser: MenuProps['items'] = [this.boardGamesItems, this.authorizationItems]

    /**Динамические пути*/
    static getMyCollections(userName: string): MenuItem {
        return this.toItemType(`${PathStorage.USERS}/${PathStorage.USER}/${userName}/${PathStorage.COLLECTIONS_USER}/${PathStorage.MY_GAMES}`, "Мои коллекции")
    }

    static getMyNotifications(countNotification: number): MenuItem {
        return this.toItemType(`${PathStorage.NOTIFICATION}`, `Уведомления: ${countNotification}`)
    }

    static getMyFriends(userName: string): MenuItem {
        return this.toItemType( `${PathStorage.USERS}/${PathStorage.USER}/${userName}/${PathStorage.FRIENDS}`, "Друзья")
    }

    static userItems(userName: string, countNotification: number): MenuItem {
        return {
            key: PathStorage.USER,
            icon: <UserOutlined/>,
            label: `Профиль`,
            children: [
                this.getMyCollections(userName), this.mySetting, this.getMyFriends(userName), this.getMyNotifications(countNotification)
            ]
        }
    }

    static toItemType(path: string, arg: string | ReactNode): MenuItem {
        return {
            key: path,
            label: typeof arg === 'string' ? <NavLink to={path}>{arg}</NavLink> : arg,
            style: {height: '100%'},
        }
    }

}





