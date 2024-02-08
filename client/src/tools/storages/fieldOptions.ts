
import {Options, OptionsDTO} from "../interfaces/serverInterface";
export const nameBoardGame: OptionsDTO<null>[] = [{name: "Ужас Аркхэма. Карточная игра",id: 213},
    {name:"Ужас Аркхэма. Карточная игра: Забытая эпоха. Кампания", id: 215},
    {name:"Ужас Аркхэма. Карточная игра: Забытая эпоха. Сыщики",  id: 216},
    {name:"Ужас Аркхэма. Карточная игра: Нарушенный круг. Возвращение", id: 217},
]
export const optionsFieldsStatusCooperativeGame : Options<null>[] = [
    {label: "Пройдено", value: "passed"},
    {label: "Заброшено", value: "abandoned"},
    {label: "В процессе", value: "in progress"},
    {label: "Не пройдено", value: "failed"},
]


