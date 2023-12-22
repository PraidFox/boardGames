import type { SelectProps } from 'antd';
export const nameBoardGame = [{value: "Ужас Аркхэма. Карточная игра", key: 0, id: 0},
    {value:"Ужас Аркхэма. Карточная игра: Забытая эпоха. Кампания", key: 1, id: 1},
    {value:"Ужас Аркхэма. Карточная игра: Забытая эпоха. Сыщики",  key: 2, id: 2},
    {value:"Ужас Аркхэма. Карточная игра: Нарушенный круг. Возвращение", key: 3, id: 3},
    {value:"Ужас Аркхэма. Карточная игра: Нарушенный круг. Сыщики", key: 4, id: 4},
    {value:"Ужас Аркхэма. Карточная игра: Забытая эпоха. Кампания", key: 5, id: 5},
    {value:"Ужас Аркхэма. Карточная игра: Забытая эпоха. Сыщики", key: 6, id: 6},
    {value:"Ужас Аркхэма. Карточная игра: Нарушенный круг. Возвращение", key: 7, id: 7}
]

export const typeBoardGame : SelectProps['options'] = [{label: "Кооператив", value: "cooperative",id: 214},
    {label:"Детектив", value: "detective", id: 213},
    {label:"Дуэль", value: "duel", id: 215},
    {label:"Для детей", value: "for children", id: 216},
    {label:"Экономическая", value:"economic", id: 218},
    {label:"Весёлые", value: "merry", id: 213219},
    {label:"В дорогу", value: "on the road", id: 213}
]

export const optionsFieldsStatusCooperativeGame = [
    {label: "Пройдено", value: "passed",id: 214},
    {label: "Заброшено", value: "abandoned",id: 215},
    {label: "В процессе", value: "in progress",id: 216},
    {label: "Не пройдено", value: "failed",id: 217},

]


