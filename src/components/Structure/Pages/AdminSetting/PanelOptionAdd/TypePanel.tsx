import {useAddType, useDeleteType, useGetTypes} from "../../../../../tools/hooks/queries/Type.queries.ts";
import {InfiniteScrollAnt} from "./InfiniteScrollAnt.tsx";
import {Button, Input, Space} from "antd";
import {useState} from "react";

export const TypePanel = () => {
    const {data: types} = useGetTypes()
    const addType = useAddType()
    const deletedType = useDeleteType()

    const [value, setValue] = useState<string>()


    if (!types) return null


    return (<>
        <InfiniteScrollAnt data={types} name={"Типы"} deletedButton={(id: string) => deletedType.mutate(id)}/>
        <br/>
        <Space.Compact style={{width: '100%'}}>
            <Input placeholder="Новая опция" onChange={(e) => setValue(e.target.value)}/>
            <Button type="primary" disabled={!value} onClick={() => addType.mutateAsync(value!)}
                    loading={addType.isPending}>Добавить</Button>
        </Space.Compact>
    </>)
}