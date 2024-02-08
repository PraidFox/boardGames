import {Divider, List, Skeleton} from "antd";
import {OptionDTO} from "../../tools/interfaces/DTOinterface";
import InfiniteScroll from 'react-infinite-scroll-component';
import {ReactNode} from "react";
export const InfiniteScrollComponent = ({data, name, content} : {data: OptionDTO[], name: string, content: (id: number, fieldName: string) => ReactNode}) => {

    const loadMoreData = () => {
        return
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
                                title={<div><span>{item.name}</span> <i style={{fontSize: "10px"}}>id: {item.id}</i></div>}
                            />
                            <div>{content(item.id, name)}</div>
                        </List.Item>
                    )}
                />
            </InfiniteScroll>
        </div>
    </>
}