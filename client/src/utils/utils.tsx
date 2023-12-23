import {Options} from "../../../shared/interface";

export const filterOptionLabel = (inputValue: string, option: Options<{id: number}> | undefined) => {
    if(option){
        return option.label.toString().toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    } else {
        return inputValue.toString().toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
}
