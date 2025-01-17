import {useAddGenre, useDeleteGenre, useGetGenres} from "../../../../../tools/hooks/queries/Genre.queries.ts";
import {useState} from "react";
import {InfiniteScrollAnt} from "./InfiniteScrollAnt.tsx";
import {Button, Input, Space} from "antd";

export const GenrePanel = () => {
    const {data: genres} = useGetGenres()
    const addGenre = useAddGenre()
    const deletedGenre = useDeleteGenre()
    const [value, setValue] = useState<string>()


    if(!genres) return null

    return (<>
        <InfiniteScrollAnt data={genres} name={"Жанры"} deletedButton={(id) => deletedGenre.mutate(id)}/>
        <br/>
        <Space.Compact style={{width: '100%'}}>
            <Input placeholder="Новая опция" onChange={(e) => setValue(e.target.value)}/>
            <Button type="primary" disabled={!value} onClick={() => addGenre.mutateAsync(value!)} loading={addGenre.isPending}>Добавить</Button>
        </Space.Compact>
    </>)
}