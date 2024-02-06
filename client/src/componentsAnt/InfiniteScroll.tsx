import {Divider, List, Skeleton} from "antd";
import {OptionDTO} from "../utils/interface/DTOinterface";
import InfiniteScroll from 'react-infinite-scroll-component';
export const InfiniteScrollComponent = ({data, name} : {data: OptionDTO[], name: string}) => {

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
                                title={item.name}
                            />
                            <div>Content</div>
                        </List.Item>
                    )}
                />
            </InfiniteScroll>
        </div>
    </>
}