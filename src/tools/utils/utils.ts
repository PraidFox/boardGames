import {Options} from "../interfaces/server.Interface.ts";

export const filterOptionLabel = (inputValue: string, option: Options<any> | undefined) => {
    if (option) {
        return option.label.toString().toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    } else {
        return inputValue.toString().toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
}





