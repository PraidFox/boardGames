import {BoardGame} from "../../../../shared/interface";
import {Card} from "antd";
import {ReactNode} from "react";

const { Meta } = Card;
export const CardBoardGame = ({data, children}:{data: BoardGame, children: ReactNode[]}) => {
    return (
        <Card
            style={{ width: 300 }}
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
            actions={children}
        >
            <Meta
                title="Card title"
                description="This is the description"
            />
        </Card>
    )
}