import {DownOutlined, UserOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Avatar, Badge, Dropdown, Space} from 'antd'
import React, {useState} from "react";
import {useInfoUser} from "../../../tools/hooks/hooksContext/useInfoUser";
import {NavLink} from "react-router-dom";
import {PathStorage} from "../../../tools/storages/const";

export const ProfileMenu = () => {
    const {logoutUser, nickname} = useInfoUser()
    const [countNotifications, setCountNotifications] = useState(8)


    // @ts-ignore
    const items: MenuProps['items'] = [
        {
            type: 'group', // Must have
            label: nickname,
            children: [
                {
                    key: '1',
                    label: <span>Уведомления: {countNotifications}</span>,
                },
                {
                    key: '3',
                    label: <NavLink to={PathStorage.MY_SETTING}>Настройки</NavLink>,
                }
            ]
        },

        {
            key: '4',
            danger: true,
            onClick: logoutUser,
            label: <span>Выйти</span>,
        },
    ];

    return (
        <Dropdown menu={{items}} arrow={false} destroyPopupOnHide={false}>
            <Space>
                <Badge count={countNotifications}>
                    {/*<Avatar shape="square" icon={<UserOutlined/>}/>*/}
                    <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
                </Badge>
            </Space>
        </Dropdown>
    )

    // return <Flex gap="small" wrap="wrap">
    //     <Button type="primary" onClick={logoutUser}>
    //         Выйти
    //     </Button>
    // </Flex>
}
