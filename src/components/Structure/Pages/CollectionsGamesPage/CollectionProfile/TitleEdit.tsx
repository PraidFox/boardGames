import {Button, Input, InputRef} from "antd";
import {EditOutlined} from "@ant-design/icons";
import {useEffect, useRef, useState} from "react";
import {useChangeDataCollection} from "../../../../../tools/hooks/queries/UserCollection.queries.ts";

export const TitleEdit = ({name, whoseCollections, collectionAlias}: {
    name: string,
    whoseCollections: string,
    collectionAlias: string
}) => {
    const [showButtonEditTitle, setShowButtonEditTitle] = useState(false);
    const [edit, setEdit] = useState(false)
    const [title, setTitle] = useState<string>(name)
    const inputRef = useRef<InputRef>(null);

    const saveTitle = useChangeDataCollection(whoseCollections)

    useEffect(() => {
        if (edit) {
            inputRef.current!.focus({
                cursor: 'end',
            });
        }
    }, [edit]);

    const changeTitle = async () => {
        await saveTitle.mutateAsync({collectionAlias, patchData: {name: title}})
        setEdit(false)
    }

    if (edit) {
        return (<Input
            placeholder={title}
            ref={inputRef}
            defaultValue={title}
            onChange={(value) => setTitle(value.target.value)}
            onBlur={changeTitle}
            onKeyDown={(e) => {
                console.log("e", e)
                if (e.key === "Enter") {
                    changeTitle()
                }
            }}
        />)
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