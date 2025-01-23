import {useRef, useState} from 'react';

import {GetRef, Select, Space} from 'antd';

import {NavLink} from "react-router";
import {useOverlays} from "../../../tools/hooks/hooksContext/useOverlays";
import {PathStorage} from "../../../tools/storages/Path.storage.ts";
import {useFilterBoardGames} from "../../../tools/hooks/queries/BoardGame.queries.ts";
import {ImagePreview} from "../ImagePreview.tsx";
import {useDebounce} from "../../../tools/hooks/useDebounce.ts";

type BaseSelectRef = GetRef<typeof Select>


export const FieldSearchByGames = () => {
    const [value, setValue] = useState<string | undefined>()
    const debounceValue = useDebounce(value, 500)

    const {isOpen, openOverlay, closeOverlay} = useOverlays()
    const selectRef = useRef<BaseSelectRef>(null);

    const {data: allBoardGames, isLoading} = useFilterBoardGames({gameName: debounceValue, itemPerPage: 25})

    const handleOptionClick = () => {
        closeOverlay()
        if (selectRef.current) {
            selectRef.current.blur();
        }
    };

    return (

        <div style={{width: "100%", display: "flex", justifyContent: "center", padding: 20, zIndex: "101"}}>
            <div style={{width: "70%"}}>
                <Select
                    showSearch
                    ref={selectRef}
                    filterOption={false}
                    loading={isLoading}
                    notFoundContent={"Не найдено"}
                    placeholder="Найти настольную игру"
                    onChange={() => {
                        handleOptionClick();
                        setValue(undefined)
                    }}
                    onSearch={(value) => {
                        setValue(value)
                    }}
                    value={value}
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

                    optionRender={(option) => (
                        <NavLink
                            key={"link" + option.value}
                            to={`/${PathStorage.BOARD_GAMES}/${PathStorage.BOARD_GAME}/${option.value}`}
                            //state={{boardGame}}
                        >
                            <Space>

                                    <ImagePreview
                                        fileId={option.data.info.imgId}
                                        nameAlt={option.data.value.toString()}
                                        width={50}
                                        height={50}
                                    />

                                <span>{option.data.label}</span>
                            </Space>
                        </NavLink>
                    )}
                    listHeight={600}
                    onDropdownVisibleChange={isOpen ? closeOverlay : openOverlay}
                />
            </div>
        </div>

    );
};

