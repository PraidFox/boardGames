import {Button, Input, InputRef} from "antd";
import {EditOutlined} from "@ant-design/icons";
import {useEffect, useRef, useState} from "react";

export const TitleEdit = ({name, changeTitle}: { name: string, changeTitle: (title: string) => void }) => {
    const [showButtonEditTitle, setShowButtonEditTitle] = useState(false);
    const [edit, setEdit] = useState(false)
    const [title, setTitle] = useState<string>(name)
    const inputRef = useRef<InputRef>(null);

    useEffect(() => {
        if (edit) {
            inputRef.current!.focus({
                cursor: 'end',
            });
        }
    }, [edit]);

    useEffect(() => {
        setTitle(name)
    }, [name]);


    const saveNewTitle = () => {
        changeTitle(title)
        setEdit(false)
    }


    if (edit) {
        return (<div><Input
            placeholder={title}
            ref={inputRef}
            defaultValue={title}
            onChange={(value) => setTitle(value.target.value)}
            onBlur={saveNewTitle}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    saveNewTitle()
                }
            }}
        /></div>)
    } else {
        return (
            <div style={{height: "20%", display: "flex", gap: "1%", alignItems: "center"}}
                 onMouseEnter={() => setShowButtonEditTitle(true)}
                 onMouseLeave={() => setShowButtonEditTitle(false)}

            >
                <h1>{title?.toUpperCase()}</h1>
                {showButtonEditTitle &&
                    <Button icon={<EditOutlined/>} size={"small"} onClick={() => setEdit(true)}/>}
            </div>)
    }
}