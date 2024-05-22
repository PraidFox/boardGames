import {BookOutlined, UserOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
import React from "react";
import {PathStorage} from "./const";
import {MenuProps} from "antd";


type MenuItem = Required<MenuProps>['items'][number];

export class ItemMenu {
    static toItemType(path: string, title: string): MenuItem {
        return {
            key: path,
            label: <NavLink to={path}>{title}</NavLink>
        }
    }

    static allBoardGames: MenuItem = this.toItemType(PathStorage.LEFT_BOARD_GAMES + PathStorage.ALL_BOARD_GAMES, "Все настолки")
    static ratingBoardGames: MenuItem = this.toItemType(PathStorage.RATING_BOARD_GAMES, "Рейтинг")
    static myCollections: MenuItem = this.toItemType(PathStorage.MY_COLLECTIONS, "Моя коллекция")
    static mySetting: MenuItem = this.toItemType(PathStorage.MY_SETTING, "Настройки")
    static myFriends: MenuItem = this.toItemType(PathStorage.MY_FRIENDS, "Друзья")

    static articles: MenuItem = this.toItemType(PathStorage.ARTICLES, "Статьи")
    static players: MenuItem = this.toItemType(PathStorage.PLAYERS, "Игроки")
    static events: MenuItem = this.toItemType(PathStorage.EVENTS, "Мероприятия")
    static adminSetting: MenuItem = this.toItemType(PathStorage.ADMIN_SETTING, "Войти в админку")


    static userItems: MenuItem = {
        key: PathStorage.LEFT_USER,
        icon: <UserOutlined/>,
        label: `Профиль`,
        children: [
            this.myCollections, this.mySetting, this.myFriends
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





