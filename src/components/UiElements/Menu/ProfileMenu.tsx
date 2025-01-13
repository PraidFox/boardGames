import {UserOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Avatar, Badge, Dropdown, Space} from 'antd'
import {useState} from "react";
import {NavLink} from "react-router";
import {PathStorage} from "../../../tools/storages/Path.storage.ts";
import {useGetMe} from "../../../tools/hooks/queries/Users.queries.ts";
import {useLogout} from "../../../tools/hooks/queries/Auth.queries.ts";


export const ProfileMenu = () => {
    const {data: userInfo} = useGetMe()
    const {mutate: logoutUser} = useLogout()

    const [countNotifications, setCountNotifications] = useState(8)


    const items: MenuProps['items'] = [
        {
            type: 'group', // Must have
            label: userInfo.userName,
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
            onClick: () => logoutUser(),
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
