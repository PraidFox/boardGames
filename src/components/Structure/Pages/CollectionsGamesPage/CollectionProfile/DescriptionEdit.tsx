import {useEffect, useRef, useState} from "react";
import {Button, Input, InputRef} from "antd";
import {EditOutlined} from "@ant-design/icons";
import {useChangeDataCollection} from "../../../../../tools/hooks/queries/UserCollection.queries.ts";

const {TextArea} = Input;
export const DescriptionEdit = ({description, whoseCollections, collectionAlias}: {
    description: string,
    whoseCollections: string,
    collectionAlias: string
}) => {

    const [showButtonEdit, setShowButtonEdit] = useState(false);
    const [edit, setEdit] = useState(false)
    const [descriptionLocal, setDescriptionLocal] = useState<string>(description)
    const inputRef = useRef<InputRef>(null);

    const saveDescription = useChangeDataCollection(whoseCollections)

    useEffect(() => {
        if (edit) {
            inputRef.current!.focus({
                cursor: 'end',
            });
        }
    }, [edit]);



    const changeDescription = async () => {
        await saveDescription.mutateAsync({collectionAlias, patchData: {description: descriptionLocal}})
        setEdit(false)
    }

    if (edit) {
        return (
            <TextArea
                defaultValue={descriptionLocal}
                maxLength={1000}
                ref={inputRef}
                autoSize={{minRows: 3, maxRows: 6}}
                onChange={(value) => setDescriptionLocal(value.target.value)}
                onBlur={changeDescription}
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
                    {descriptionLocal}
                    {showButtonEdit &&
                        <Button icon={<EditOutlined/>} size={"small"} onClick={() => setEdit(true)}/>
                    }
                </p>
            </div>
        )
    }

}