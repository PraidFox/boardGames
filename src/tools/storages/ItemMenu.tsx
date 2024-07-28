import {BookOutlined, UserOutlined, WarningOutlined, CalendarOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
import React from "react";
import {PathStorage} from "./const";
import {MenuProps} from "antd";
import {FormLogin} from "../../components/Forms/FormsAuthLogin/FormLogin/FormLogin";
import {PopoverForm} from "../../components/Modals/PopoverForm";
import {TabsFormAuthLogin} from "../../components/Forms/FormsAuthLogin/TabsFormAuthLogin";
import {ModalForm} from "../../components/Modals/ModalForm";


type MenuItem = Required<MenuProps>['items'][number];


export class ItemMenu {
    static toItemType(path: string, arg: string | React.ReactNode): MenuItem {
        return {
            key: path,
            label: typeof arg === 'string' ? <NavLink to={path}>{arg}</NavLink> : arg,
            style: {height: '100%'},
        }
    }


    static getCountNotifications = (): number => {
        return 8
    }


    static allBoardGames: MenuItem = this.toItemType(PathStorage.LEFT_BOARD_GAMES + PathStorage.ALL_BOARD_GAMES, "Все настолки")
    static ratingBoardGames: MenuItem = this.toItemType(PathStorage.RATING_BOARD_GAMES, "Рейтинг")
    static myCollections: MenuItem = this.toItemType(PathStorage.MY_COLLECTIONS, "Моя коллекция")
    static mySetting: MenuItem = this.toItemType(PathStorage.MY_SETTING, "Настройки")
    static myFriends: MenuItem = this.toItemType(PathStorage.MY_FRIENDS, "Друзья")
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

    static notification = this.toItemType(PathStorage.NOTIFICATION, `Уведомления: ${this.getCountNotifications()}`)


    static userItems: MenuItem = {
        key: PathStorage.LEFT_USER,
        icon: <UserOutlined/>,
        label: `Профиль`,
        children: [
            this.myCollections, this.mySetting, this.myFriends, this.notification
        ]
    }

    static authorizationItems: MenuItem = {
        key: "authOrProfileItems",
        icon: <UserOutlined/>,
        label: `Авторизация`,
        children: [
            this.login, this.authorization
        ]
    }


    static otherItems: MenuItem = {
        key: PathStorage.LEFT_OTHER,
        icon: <CalendarOutlined/>,
        label: `Прочее`,
        children: [
            this.articles, this.players, this.events
        ]
    }

    static adminItems: MenuItem = {
        key: PathStorage.LEFT_ADMIN,
        icon: <WarningOutlined/>,
        label: `Для админов`,
        children: [
            this.adminSetting
        ]
    }

    static boardGamesItems: MenuItem = {
        key: PathStorage.LEFT_BOARD_GAMES,
        icon: <BookOutlined/>,
        label: `Настолки`,
        children: [this.allBoardGames, this.ratingBoardGames]
    }


    static defaultHeaderMenu: MenuProps['items'] = [this.articles, this.players, this.events]
    static defaultLeftMenu: MenuProps['items'] = [this.boardGamesItems]
}





