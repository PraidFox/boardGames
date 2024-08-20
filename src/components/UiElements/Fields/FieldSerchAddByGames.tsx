import React, {useCallback, useMemo, useRef, useState} from 'react';

import {Button, Select, Space, Spin} from 'antd';
import debounce from "lodash/debounce"
import {BoardGameApi} from "../../../tools/rest/BoardGameApi";
import {FilterBoardRequest} from "../../../tools/interfaces/otherInterface";
import {BoardGamesDTO} from "../../../tools/interfaces/DTOinterface";

interface BoardGameValue extends BoardGamesDTO {
    label: string;
    value: string;
    img: string;
}

export const FieldSearchAddGames = ({setNeedUpdate}: {
    setNeedUpdate: (needUpdate: boolean) => void
}) => {
    const [value, setValue] = useState<BoardGameValue[]>();
    const debounceTimeout = 800
    const [fetching, setFetching] = useState(false);
    const [options, setOptions] = useState<BoardGameValue[]>([]);
    const fetchRef = useRef(0);

    const fetchBoardGames = useCallback(async (boardGameName: string): Promise<BoardGameValue[]> => {
        const filter: FilterBoardRequest = {
            GameName: boardGameName
        };

        return BoardGameApi.getFilterBoardGame(filter).then(res => res.data.map(item => ({
            label: item.name,
            value: item.id,
            img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            ...item
        })));
    }, []);


    const debounceFetcher = useMemo(() => {
        const loadOptions = (value: string) => {
            fetchRef.current += 1;
            const fetchId = fetchRef.current;
            setOptions([]);
            setFetching(true);

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

    const handleAdd = () => {
        //Отправка на бек и после этого уже то что ниже
        setNeedUpdate(true)
        setValue([])
    }

    return (
        <div style={{display: "flex", gap: "1%"}}>
            <Select
                labelInValue
                onBlur={() => setOptions([])}
                filterOption={false}
                onSearch={debounceFetcher}
                notFoundContent={fetching ?
                    <Spin size="small"/> : value ? "Не найдено" : "Начните вводить название игры"}
                mode="multiple"
                value={value}
                placeholder="Найти и добавить игру в коллекцию"
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                style={{width: "100%"}}
                options={options}
                optionRender={(option) => (
                    <Space>
                        <img src={option.data.img} alt={option.data.img} width={100}></img>
                        <span>{option.data.label}</span>
                    </Space>
                )}
            />
            <Button type="primary" onClick={handleAdd} disabled={value === undefined || value.length === 0}>Добавить
                игры в коллекцию</Button>
        </div>
    );
};

