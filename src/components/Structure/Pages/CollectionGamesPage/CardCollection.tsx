import {Card} from "antd";
import {ReactNode} from "react";


export const CardCollection = ({coverElement, actionsElements}: {
    coverElement: ReactNode,
    actionsElements: ReactNode[]
}) => {
    return (
        <Card
            cover={coverElement}
            actions={actionsElements}
            styles={{
                body: {padding: 0}
            }}
        >

        </Card>
    )
}