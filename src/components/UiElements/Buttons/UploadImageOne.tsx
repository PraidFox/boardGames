import React from 'react';
import {UploadOutlined} from '@ant-design/icons';
import {Button, message, Upload, UploadProps} from 'antd';
import {FileApi} from "../../../tools/rest/FileApi";

const props: UploadProps = {
    customRequest(options) {
        const formData = new FormData();
        formData.append("file", options.file);
        FileApi.uploadFile(formData).then(r => console.log("r", r.data.id))
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

export const UploadImageOne = () => (


    <Upload {...props}>
        <Button icon={<UploadOutlined/>}>Изменить обложку</Button>
    </Upload>
);

