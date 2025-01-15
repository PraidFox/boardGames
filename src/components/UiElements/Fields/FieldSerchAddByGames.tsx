import {useState} from 'react';

import {Button, Select, Space} from 'antd';
import {useDebounce} from "../../../tools/hooks/useDebounce.ts";
import {useFilterBoardGames} from "../../../tools/hooks/queries/BoardGame.queries.ts";
import {ImagePreview} from "../ImagePreview.tsx";
import {useAddGamesInCollection} from "../../../tools/hooks/queries/UserCollection.queries.ts";

interface BoardGameValue {
    label: string;
    value: string;
    img: string;
}

//Может разъеденить поисковик с кнопокой?
export const FieldSearchAddGames = ({whoseCollections, collectionAlias}: {
    whoseCollections: string,
    collectionAlias: string
}) => {
    const [value, setValue] = useState<BoardGameValue[]>()
    const [valueInput, setValueInput] = useState<string>()
    const debounceValue = useDebounce(valueInput, 500)
    const {data: allBoardGames, isLoading} = useFilterBoardGames({gameName: debounceValue, itemPerPage: 25})
    const addGamesInCollection = useAddGamesInCollection(whoseCollections)


    const handleAdd = async () => {
        if (!value) return
        await addGamesInCollection.mutateAsync({collectionAlias: collectionAlias, gameIds: value?.map(x => x.value)})
        setValue([])
    }

    return (
        <div style={{display: "flex", gap: "1%"}}>
            <Select
                labelInValue
                // onBlur={() => setOptions([])}
                filterOption={false}
                onSearch={(value) => {
                    setValueInput(value)
                }}
                notFoundContent={"Не найдено"}
                mode="multiple"
                value={value}
                placeholder="Найти и добавить игру в коллекцию"
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                style={{width: "100%"}}
                options={allBoardGames?.boardGames.map(game => {
                    return {
                        label: game.name,
                        value: game.id,
                        info: {
                            imgId: game.preview?.id
                        }
                    }
                })}
                loading={isLoading}
                optionRender={(option) => (
                    <Space>
                        <div style={{width: 50, height: 50}}>
                            <ImagePreview
                                fileId={option.data.info.imgId}
                                nameAlt={option.data.value.toString()}
                            />
                        </div>
                        <span>{option.data.label}</span>
                    </Space>
                )}
            />
            <Button type="primary" onClick={handleAdd} disabled={!value || value.length === 0}>
                Добавить игры в коллекцию
            </Button>
        </div>
    );
};

