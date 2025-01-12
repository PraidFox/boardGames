import {useCallback, useMemo, useRef, useState} from 'react';

import {GetRef, Select, Space, Spin} from 'antd';
import debounce from "lodash/debounce"
import {BoardGameService} from "../../../tools/rest/services/BoardGame.service.ts";
import {FilterBoardRequest} from "../../../tools/interfaces/message.Interface.ts";

import {NavLink} from "react-router";
import {divide} from "lodash";
import {useOverlays} from "../../../tools/hooks/hooksContext/useOverlays";
import {PathStorage} from "../../../tools/storages/Path.storage.ts";

type BaseSelectRef = GetRef<typeof Select>

interface BoardGameValue {
    label: string;
    value: string;
    img: string;
}

export const FieldSearchByGames = () => {
    const [value, setValue] = useState<string>()
    const [fetching, setFetching] = useState(false);
    const [options, setOptions] = useState<BoardGameValue[]>([]);

    const {isOpen, openOverlay, closeOverlay} = useOverlays()

    const selectRef = useRef<BaseSelectRef>(null);
    const fetchRef = useRef(0);
    const debounceTimeout = 800

    const fetchBoardGames = useCallback(async (boardGameName: string): Promise<BoardGameValue[]> => {
        const filter: FilterBoardRequest = {
            GameName: boardGameName
        };
        return BoardGameService.getFilterBoardGame(filter).then(res => res.data.map(item => ({
            label: item.name,
            value: item.id,
            img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        })));
    }, []);


    const debounceFetcher = useMemo(() => {
        const loadOptions = (value: string) => {
            fetchRef.current += 1;
            const fetchId = fetchRef.current;
            setOptions([]);
            setFetching(true);
            setValue(value)

            fetchBoardGames(value).then((newOptions) => {
                if (fetchId !== fetchRef.current) {
                    // for fetch callback order
                    return;
                }

                setOptions(newOptions);
                setFetching(false);
            });
        };

        return debounce(loadOptions, debounceTimeout);
    }, [fetchBoardGames, debounceTimeout]);

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
                    onBlur={() => setOptions([])}
                    showSearch
                    ref={selectRef}
                    filterOption={false}
                    onSearch={debounceFetcher}
                    notFoundContent={fetching ?
                        <Spin size="small"/> : value ? "Не найдено" : "Начните вводить название игры"}
                    placeholder="Найти настольную игру"
                    onChange={() => {
                        handleOptionClick();
                    }}
                    value={null}
                    style={{width: "100%"}}
                    options={options}
                    optionRender={(option) => (
                        <NavLink
                            key={"link" + option.value}
                            to={`${PathStorage.BOARD_GAME}/${option.value}`}
                            //state={{boardGame}}
                        >
                            <Space>
                                <img src={option.data.img} alt={option.data.img} width={100}></img>
                                <span>{option.data.label}</span>
                            </Space>
                        </NavLink>
                    )}
                    listHeight={divide(window.innerHeight, 2)}
                    onDropdownVisibleChange={isOpen ? closeOverlay : openOverlay}
                />
            </div>
        </div>

    );
};

