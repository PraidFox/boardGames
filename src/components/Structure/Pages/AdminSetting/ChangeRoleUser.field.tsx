import {Button, Select} from "antd";
import {useGetAllUsers, useGetUserRoles, useRecordRoleToUser} from "../../../../tools/hooks/queries/Users.queries.ts";
import {useGetRoles} from "../../../../tools/hooks/queries/Role.queries.ts";
import {useLayoutEffect, useState} from "react";

//TODO попросить бег отдавать роли пользователя сразу
export const ChangeRoleUserField = () => {
    const [userSelected, setUserSelected] = useState<string>()
    const [valueRoleToUser, setValueRoleToUser] = useState<string[] | undefined>()

    const {data: users} = useGetAllUsers()
    const {data: roles} = useGetRoles()
    const {data: userRoles} = useGetUserRoles(userSelected)

    const recortUserRoles = useRecordRoleToUser()

    useLayoutEffect(() => {
        setValueRoleToUser(userRoles)
    }, [userRoles]);

    const changeRoleToUser = (roles: string[]) => {
        setValueRoleToUser(roles)
    }


    if(!users){
        return <span>Что-то пошло не так</span>
    }

    return (
        <>
            <h3>Добавление ролей пользователю:</h3>
            <div style={{display: "flex"}}>
                <Select<string>
                    style={{width: '20%'}}
                    showSearch
                    placeholder="Выбрать пользователя"
                    onChange={option => setUserSelected(option)}
                    //filterOption={filterOption}
                    options={users.map(user => {
                        return {label: user.userName, value: user.userName}
                    })}
                />
                <Select
                    style={{width: '80%'}}
                    mode={"multiple"}
                    placeholder="Выбрать роли"
                    onChange={changeRoleToUser}
                    options={roles?.map(role => {
                        return {label: role.name, value: role.id.toString()}
                    })}
                    value={valueRoleToUser}
                />

                <Button
                        disabled={!valueRoleToUser || !userSelected}
                        onClick={() => recortUserRoles.mutate({ roles: valueRoleToUser ? valueRoleToUser : [], userName: userSelected!,})}
                >Сохранить</Button>
            </div>
        </>
    )
}