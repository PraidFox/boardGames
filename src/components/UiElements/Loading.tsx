// @ts-ignore
import pandaImage from "../../tools/images/panda.png"
import {Spin} from 'antd';

export const Loading = () => {

    return (
        <div style={{textAlign: "center"}}>
            <img src={pandaImage} className="pandaImage" alt="" width={"40%"}/>
            <br/>
            <h2>Загружаем данные <Spin/></h2>
        </div>
    )
}