import {useAddRole, useDeleteRole, useGetRoles} from "../../../../../tools/hooks/queries/Role.queries.ts";
import {useState} from "react";
import {InfiniteScrollAnt} from "./InfiniteScrollAnt.tsx";
import {Button, Input, Space} from "antd";

export const RolePanel = () => {
    const {data: roles} = useGetRoles()
    const addRole = useAddRole()
    const deletedRole = useDeleteRole()
    const [value, setValue] = useState<string>()

    if(!roles) return null

    return (<>
        <InfiniteScrollAnt data={roles} name={"Роли"} deletedButton={(id) => deletedRole.mutate(id)}/>
        <br/>
        <Space.Compact style={{width: '100%'}}>
            <Input placeholder="Новая опция" onChange={(e) => setValue(e.target.value)}/>
            <Button type="primary" disabled={!value} onClick={() => addRole.mutateAsync(value!)} loading={addRole.isPending}>Добавить</Button>
        </Space.Compact>
    </>)
}