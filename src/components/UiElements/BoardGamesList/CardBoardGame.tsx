import {Card} from "antd";
import {ReactNode, useEffect, useState} from "react";
import {BoardGamesDTO} from "../../../tools/interfaces/DTOinterface";
import {FileApi} from "../../../tools/rest/FileApi";

const {Meta} = Card;
export const CardBoardGame = ({data, children}: { data: BoardGamesDTO, children: ReactNode[] }) => {
    const [image, setImage] = useState()


    // useEffect(() => {
    //
    //     if (data.preview) {
    //         const id = '3d1189c2-51f5-4af1-98f6-7aecfe9317bb'
    //         FileApi.getImage(id).then(res => {
    //             setImage(res.data)
    //         }).catch(err => console.log(err))
    //     }
    //
    // }, [data.preview]);

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