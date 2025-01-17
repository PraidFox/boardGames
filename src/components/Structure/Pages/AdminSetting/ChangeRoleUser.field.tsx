import {Button, Select} from "antd";

export const ChangeRoleUserField = () => {
    return (
        <>
            <h3>Добавление ролей пользователю:</h3>
            <div style={{display: "flex"}}>
                <Select
                    style={{width: '20%'}}
                    showSearch
                    placeholder="Выбрать пользователя"
                    onChange={onChangeUser}
                    filterOption={filterOption}
                    options={users?.map(role => {
                        return {label: role.userName, value: role.userName}
                    })}
                />
                <Select
                    style={{width: '80%'}}
                    mode={"multiple"}
                    showSearch
                    placeholder="Выбрать роли"
                    onChange={onChangeRole}
                    filterOption={filterOption}
                    // options={roles?.map(role => {
                    //     return {label: role.name, value: role.id.toString()}
                    // })}
                    value={valueRoleToUser}
                />

                <Button danger disabled={valueRoleToUser.length === 0 || !valueUser}
                        onClick={handeRecordRole}>Сохранить</Button>
            </div>
        </>
    )
}