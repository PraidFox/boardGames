import {Card} from "antd";
import {ReactNode} from "react";
import {BoardGamesDTO} from "../../../tools/interfaces/DTOinterface";


const {Meta} = Card;
export const CardBoardGame = ({data, children}: { data: BoardGamesDTO, children: ReactNode[] }) => {

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

            <Meta
                title={data.name}
                description={<div style={{height: "100px"}}>{data.description}</div>}
            />
        </Card>
    )
}