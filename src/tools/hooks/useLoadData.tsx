import {useLayoutEffect, useState} from "react";
import {AxiosResponse} from "axios";

interface LoadDataProps<T> {
    data: T | undefined
    needUpdate: boolean
    loading: boolean
    setNeedUpdate: (needUpdate: boolean) => void
    error?: any
}

export function useLoadData<T, P = undefined>(rest: (params?: any) => Promise<AxiosResponse<T>>, params?: P): LoadDataProps<T> {
    const [data, setData] = useState<T>()
    const [needUpdate, setNeedUpdate] = useState(true)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<any>()



    useLayoutEffect(() => {
        if (needUpdate) {
            rest(params).then((res: any) => {
                setData(res.data)
                setLoading(false)
                setNeedUpdate(false)
            }).catch(
                (r: any) => {
                    setError(r.response.data)
                    setLoading(false)
                    setNeedUpdate(false)
                }
            )
        }
    }, [rest, needUpdate, params]);

    return {data, needUpdate, loading, setNeedUpdate, error}
}


