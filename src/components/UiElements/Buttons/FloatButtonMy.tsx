import {CommentOutlined, SettingOutlined} from '@ant-design/icons';
import {FloatButton} from 'antd';


export const FloatButtonMy: React.FC = () => (
    <>
        <FloatButton.Group
            trigger="click"
            style={{
                right: "6%",
            }}


            icon={<SettingOutlined/>}

            // icon={}
        >
            <FloatButton tooltip="Я текст"/>
            <FloatButton icon={<CommentOutlined/>}/>
        </FloatButton.Group>
    </>
);

