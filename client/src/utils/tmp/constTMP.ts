
import {Options, OptionsAutoComplete, OptionsDTO} from "../interface/serverInterface";
export const nameBoardGame: OptionsDTO<null>[] = [{label: "Ужас Аркхэма. Карточная игра",id: 213},
    {label:"Ужас Аркхэма. Карточная игра: Забытая эпоха. Кампания", id: 215},
    {label:"Ужас Аркхэма. Карточная игра: Забытая эпоха. Сыщики",  id: 216},
    {label:"Ужас Аркхэма. Карточная игра: Нарушенный круг. Возвращение", id: 217},
]
export const typeBoardGameDTO: OptionsDTO<null>[]  = [
    {label: "Кооператив", id: 213},
    {label:"Детектив", id: 214},
    {label:"Дуэль", id: 215},
    {label:"Для детей", id: 216},
    {label:"Экономическая", id: 217},
    {label:"Весёлые", id: 218},
    {label:"В дорогу", id: 219}
]

export const optionsFieldsStatusCooperativeGame : Options<null>[] = [
    {label: "Пройдено", value: "passed"},
    {label: "Заброшено", value: "abandoned"},
    {label: "В процессе", value: "in progress"},
    {label: "Не пройдено", value: "failed"},
]


