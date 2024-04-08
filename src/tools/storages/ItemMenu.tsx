import {BookOutlined, UserOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
import React from "react";
import {ItemType} from "antd/es/menu/hooks/useItems";
import {PathStorage} from "./const";
import {MenuProps} from "antd";

export class ItemMenu {
    static toItemType(path: string, title: string): ItemType {
        return {
            key: path,
            label: <NavLink to={path}>{title}</NavLink>
        }
    }

    static allBoardGames: ItemType = this.toItemType(PathStorage.LEFT_BOARD_GAMES + PathStorage.ALL_BOARD_GAMES, "Все настолки")
    static ratingBoardGames: ItemType = this.toItemType(PathStorage.RATING_BOARD_GAMES, "Рейтинг")
    static myCollections: ItemType = this.toItemType(PathStorage.MY_COLLECTIONS, "Моя коллекция")
    static mySetting: ItemType = this.toItemType(PathStorage.MY_SETTING, "Настройки")
    static myFriends: ItemType = this.toItemType(PathStorage.MY_FRIENDS, "Друзья")

    static articles: ItemType = this.toItemType(PathStorage.ARTICLES, "Статьи")
    static players: ItemType = this.toItemType(PathStorage.PLAYERS, "Игроки")
    static events: ItemType = this.toItemType(PathStorage.EVENTS, "Мероприятия")
    static adminSetting: ItemType = this.toItemType(PathStorage.ADMIN_SETTING, "Войти в админку")


    static userItems: ItemType = {
        key: PathStorage.LEFT_USER,
        icon: <UserOutlined/>,
        label: `Профиль`,
        children: [
            this.myCollections, this.mySetting, this.myFriends
        ]
    }
    static boardGamesItems: ItemType = {
        key: PathStorage.LEFT_BOARD_GAMES,
        icon: <BookOutlined/>,
        label: `Настолки`,
        children: [this.allBoardGames, this.ratingBoardGames]
    }

    static defaultHeaderMenu: MenuProps['items'] = [this.articles, this.players, this.events]
    static defaultLeftMenu: MenuProps['items'] = [this.boardGamesItems]
}





