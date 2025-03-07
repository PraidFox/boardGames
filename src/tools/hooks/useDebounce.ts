import {useEffect, useState} from "react";

/**
 * @deprecated
 * Использовать useDebounceFN
 * */
export const useDebounce = (value: string | undefined, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(
        () => {
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);

            return () => {
                clearTimeout(handler);
            };
        },
        [value, delay] // Only re-call effect if value or delay changes
    );

    return debouncedValue;
}