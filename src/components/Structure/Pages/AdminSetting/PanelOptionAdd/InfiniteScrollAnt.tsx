import {Button, Divider, List, Skeleton} from "antd";
import {OptionDTO} from "../../../../../tools/interfaces/DTO/boardGame.dto.ts";
import InfiniteScroll from 'react-infinite-scroll-component';
import {useState} from "react";

export const InfiniteScrollAnt = ({data, name, deletedButton}: {
    data: OptionDTO[],
    name: string,
    deletedButton: (id: string) => void
}) => {
    const [indexClick, setIndexClick] = useState<string[]>(["0"])

    const loadMoreData = () => {
        return
    }

    const handleDeletedButton = (id: string) => {
        if(indexClick.some(x => x == id)) {
            deletedButton(id)
            setIndexClick(indexClick.filter(x => x != id))
        } else {
            setIndexClick(r => [...r, id])
        }
    }

    return <>

        <div style={{textAlign: "center"}}><b>{name}</b></div>
        <div
            id="scrollableDivType"
            style={{
                height: 400,
                overflow: 'auto',
                padding: '0 16px',
                border: '1px solid rgba(140, 140, 140, 0.35)',
            }}
        >
            <InfiniteScroll
                dataLength={data.length}
                next={loadMoreData}
                hasMore={data.length < data.length}
                loader={<Skeleton avatar paragraph={{rows: 1}} active/>}
                endMessage={<Divider plain>Больше опций нет 🤐</Divider>}
                scrollableTarget="scrollableDiv"
            >
                <List
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item key={item.id}>
                            <List.Item.Meta
                                title={<div><span>{item.name}</span> <i style={{fontSize: "10px"}}>id: {item.id}</i>
                                </div>}
                            />
                            <div>
                                <Button
                                    onClick={() => handleDeletedButton(item.id)}
                                    style={indexClick.some(x => x == item.id) ? {background: "red", color: "white"} : {}}
                                >Удалить</Button>
                            </div>
                        </List.Item>
                    )}
                />
            </InfiniteScroll>
        </div>
    </>
}