import type { SelectProps } from 'antd';
import {Options, OptionsAutoComplete} from "../../../../shared/interface";
export const nameBoardGame:OptionsAutoComplete<{id: number}>[] = [{value: "Ужас Аркхэма. Карточная игра", info: {id: 213}},
    {value:"Ужас Аркхэма. Карточная игра: Забытая эпоха. Кампания", info: {id: 213}},
    {value:"Ужас Аркхэма. Карточная игра: Забытая эпоха. Сыщики",  info: {id: 213}},
    {value:"Ужас Аркхэма. Карточная игра: Нарушенный круг. Возвращение", info: {id: 213}},
]

export const typeBoardGame : Options<{id: number}>[] = [
    {label: "Кооператив", value: "cooperative", info: {id: 213}},
    {label:"Детектив", value: "detective", info: {id: 213}},
    {label:"Дуэль", value: "duel",  info: {id: 213}},
    {label:"Для детей", value: "for children",  info: {id: 213}},
    {label:"Экономическая", value:"economic",  info: {id: 213}},
    {label:"Весёлые", value: "merry",  info: {id: 213}},
    {label:"В дорогу", value: "on the road",  info: {id: 213}}
]

export const optionsFieldsStatusCooperativeGame : { label: string, value: string }[] = [
    {label: "Пройдено", value: "passed"},
    {label: "Заброшено", value: "abandoned"},
    {label: "В процессе", value: "in progress"},
    {label: "Не пройдено", value: "failed"},
]


