import {Card} from "antd";
import {ReactNode} from "react";
import {BoardGameDTO} from "../../../tools/interfaces/DTOinterface";


const {Meta} = Card;
export const CardBoardGame = ({data, children}: { data: BoardGameDTO, children: ReactNode[] }) => {

    return (
        <Card
            style={{width: 300}}
            cover={
                <img
                    alt="example"
                    src={data.preview ? `http://94.125.48.107:8080/api/File?id=${data.preview?.id}` : "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}
                />
            }
            actions={children}
        >
            <hr/>
            Наш рейтинг: {data.rating === 0 ? "-" : data.rating} /
            Тессера: {data.ratingTessera === 0 ? "-" : data.ratingTessera} /
            Bgg: {data.ratingBgg === 0 ? "-" : data.ratingBgg}
            <hr/>
            
            <Meta
                title={data.name}
                description={<div style={{height: "100px"}}>{data.description}</div>}
            />
        </Card>
    )
}