import React from 'react';
import {UploadOutlined} from '@ant-design/icons';
import {Button, Upload} from 'antd';

export const UploadImageOne = () => (
    <Upload>
        <Button icon={<UploadOutlined/>}>Изменить обложку</Button>
    </Upload>
);

