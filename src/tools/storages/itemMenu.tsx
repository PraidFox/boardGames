import {BookOutlined, UserOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
import React from "react";
import {ItemType} from "antd/es/menu/hooks/useItems";

export const boardGame: ItemType = {
    key: `boardGames`,
    icon: <BookOutlined/>,
    label: `Настолки`,
    children: [
        {
            key: "allBoardGames",
            label: <NavLink to="/allBoardGames">Все настолки</NavLink>,
        },
        {
            key: "rating",
            label: <NavLink to="/rating">Рейтинг</NavLink>,
        },
        {
            key: "newBoardGames",
            label: `Новинки`,
        }
    ]
}

export const user: ItemType = {
    key: `user`,
    icon: <UserOutlined/>,
    label: `Профиль`,
    children: [
        {
            key: "myCollections",
            label: <NavLink to="/myCollections">Моя коллекция</NavLink>,
        },
        {
            key: "myFriends",
            label: `Друзья`,
        },
        {
            key: "setting",
            label: `Настройки`,
        }
    ]
}


