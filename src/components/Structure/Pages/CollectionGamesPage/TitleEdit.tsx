import {Button, Input, InputRef} from "antd";
import {EditOutlined} from "@ant-design/icons";
import {useEffect, useRef, useState} from "react";
import {collectionFullInfo} from "../../../../tools/interfaces/collectionsInterface";

export const TitleEdit = ({collection}: { collection: collectionFullInfo }) => {
    const [showButtonEditTitle, setShowButtonEditTitle] = useState(false);
    const [edit, setEdit] = useState(false)
    const [title, setTitle] = useState<string>()
    const inputRef = useRef<InputRef>(null);

    useEffect(() => {
        if (edit) {
            inputRef.current!.focus({
                cursor: 'start',
            });
        }
    }, [edit]);

    useEffect(() => {
        setTitle(collection?.title)
    }, [collection?.title]);


    const saveNewTitle = () => {
        //Отправка на бек
        setEdit(false)
    }


    if (edit) {
        return (<div><Input
            placeholder={title}
            ref={inputRef}
            onChange={(value) => setTitle(value.target.value)}
            onBlur={saveNewTitle}
        /></div>)
    } else {

        return (<div style={{height: "20%", display: "flex", gap: "1%", alignItems: "center"}}
                     onMouseEnter={() => setShowButtonEditTitle(true)}
                     onMouseLeave={() => setShowButtonEditTitle(false)}
        >
            <h1>{title?.toUpperCase()}</h1>
            {showButtonEditTitle &&
                <Button icon={<EditOutlined/>} size={"small"} onClick={() => setEdit(true)}/>}
        </div>)
    }
}