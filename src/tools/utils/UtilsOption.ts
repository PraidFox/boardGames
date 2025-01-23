import {OptionDTO} from "../interfaces/DTO/boardGame.dto.ts";
import {OptionSelect} from "../interfaces/option.Interface.ts";


export class UtilsOption {
    static convertToOptions = (data: OptionDTO[]): OptionSelect[] => data.map((item) => ({
        value: item.id,
        label: item.name
    }))
}





