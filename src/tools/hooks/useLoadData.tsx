import {useLayoutEffect, useState} from "react";
import {AxiosResponse} from "axios";

// export function useLoadData<T, P = undefined>(rest: (params?: P) => Promise<AxiosResponse<T>>, params?: P) {
//     const [data, setData] = useState<T>()
//     const [needUpdate, setNeedUpdate] = useState(true)
//     const [loading, setLoading] = useState(true)
//
//
//     useLayoutEffect(() => {
//         if (needUpdate) {
//
//             if (params) {
//                 rest(params).then(res => {
//                     setData(res.data)
//                     setLoading(false)
//                     setNeedUpdate(false)
//                 })
//             } else {
//                 rest().then(res => {
//                     setData(res.data)
//                     setLoading(false)
//                     setNeedUpdate(false)
//                 })
//             }
//
//         }
//     }, [rest, needUpdate]);
//
//     return {data, needUpdate, loading, setNeedUpdate}
// }

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
            console.log("params", params)
            rest(params).then((res: any) => {
                setData(res.data)
                setLoading(false)
                setNeedUpdate(false)
            }).catch(
                (r: any) => {
                    console.log("r", r.response)
                    setError(r.response.data)
                    setLoading(false)
                    setNeedUpdate(false)
                }
            )
        }
    }, [rest, needUpdate, params]);

    return {data, needUpdate, loading, setNeedUpdate, error}
}


