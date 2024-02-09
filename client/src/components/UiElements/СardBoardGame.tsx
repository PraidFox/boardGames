import {Card} from "antd";
import {ReactNode} from "react";
import {BoardGameDTO} from "../../tools/interfaces/DTOinterface";


const {Meta} = Card;
export const CardBoardGame = ({data, children}: { data: BoardGameDTO, children: ReactNode[] }) => {
    return (
        <Card
            style={{width: 300}}
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
            actions={children}
        >
            <Meta
                title={data.name}
                description={data.description}
            />
        </Card>
    )
}