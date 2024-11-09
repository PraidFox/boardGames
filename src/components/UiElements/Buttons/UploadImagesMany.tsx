import React, {useEffect, useState} from 'react';
import {PlusOutlined} from '@ant-design/icons';
import {Image, Upload} from 'antd';
import type {GetProp, UploadFile, UploadProps} from 'antd';
import {FileApi} from "../../../tools/rest/FileApi";

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

export const UploadImagesMany = ({setImagesId}: {
    setImagesId: (filesId: string[]) => void
}) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    useEffect(() => {
        setImagesId(fileList.map((file) => file.uid))
    }, [fileList, setImagesId]);

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as FileType);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
    };

    const handleChange: UploadProps['onChange'] = ({fileList: newFileList}) => {
        setFileList(newFileList);
    }

    return (
        <>
            <Upload
                customRequest={(options) => {
                    const formData = new FormData();
                    formData.append('file', options.file);
                    FileApi.uploadFile(formData).then((r) => {
                        setFileList(files => files.map(file => ({...file, status: 'done', uid: r.data.id})));
                    });
                }}

                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                onRemove={e => console.log(e)}
            >
                {fileList.length >= 8 ? null :
                    <button style={{border: 0, background: 'none'}} type="button">
                        <PlusOutlined/>
                        <div style={{marginTop: 8}}>Добавить изображение</div>
                    </button>
                }
            </Upload>

            {previewImage && (
                <Image
                    wrapperStyle={{display: 'none'}}
                    preview={{
                        visible: previewOpen,
                        onVisibleChange: (visible) => setPreviewOpen(visible),
                        afterOpenChange: (visible) => !visible && setPreviewImage(''),
                    }}
                    src={previewImage}
                />
            )}
        </>
    );
};

