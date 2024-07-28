import {collectionFullInfo} from "../../../../tools/interfaces/collectionsInterface";
import {useEffect, useRef, useState} from "react";
import {Button, InputRef, Select} from "antd";
import {EditOutlined} from "@ant-design/icons";
import {Input} from 'antd';

const {TextArea} = Input;
export const DescriptionEdit = ({collection}: { collection: collectionFullInfo }) => {
    const [showButtonEdit, setShowButtonEdit] = useState(false);
    const [edit, setEdit] = useState(false)
    const [description, setDescription] = useState<string>()
    const inputRef = useRef<InputRef>(null);


    useEffect(() => {
        if (edit) {
            inputRef.current!.focus({
                cursor: 'end',
            });
        }
    }, [edit]);

    useEffect(() => {
        if (collection?.description) {
            setDescription(collection?.description)
        }
    }, [collection?.description]);

    const saveNewDescription = () => {
        //Отправка на бек
        setEdit(false)
    }


    if (edit) {
        return (
            <TextArea
                defaultValue={description}
                maxLength={1000}
                ref={inputRef}
                autoSize={{minRows: 3, maxRows: 6}}
                onChange={(value) => setDescription(value.target.value)}
                onBlur={saveNewDescription}
            />
        )
    } else {
        return (
            <div
                style={{height: "80%"}}
                onMouseEnter={() => setShowButtonEdit(true)}
                onMouseLeave={() => setShowButtonEdit(false)}
            >
                <p>
                    {/*TODO сделать что бы воспринимал пренос строк и если строк больше чем 15 сворачивать*/}
                    {description}
                    {showButtonEdit &&
                        <Button icon={<EditOutlined/>} size={"small"} onClick={() => setEdit(true)}/>
                    }
                </p>


            </div>
        )
    }

}