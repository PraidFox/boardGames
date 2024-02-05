import React from 'react';
import { Alert, Space } from 'antd';
import {MessageInfoType} from "../utils/interface/otherInterface";


export const MessageInfo = ({text, type, width = '100%'} : MessageInfoType) => (
    <Space direction="vertical" style={{ width }}>
        <Alert message={text} type={type} />
        <br/>
    </Space>
);

