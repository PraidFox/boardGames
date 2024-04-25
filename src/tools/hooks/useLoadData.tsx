import {useLayoutEffect, useState} from "react";
import {AxiosResponse} from "axios";

export function useLoadData<T>(rest: () => Promise<AxiosResponse<T>>) {
    const [data, setData] = useState<T>()
    const [needUpdate, setNeedUpdate] = useState(true)
    const [loading, setLoading] = useState(true)


    useLayoutEffect(() => {
        if (needUpdate) {
            rest().then(res => {
                setData(res.data)
                setLoading(false)
                setNeedUpdate(false)
            })
        }
    }, [rest, needUpdate]);

    return {data, needUpdate, loading, setNeedUpdate}
}