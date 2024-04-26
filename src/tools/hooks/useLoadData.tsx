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


export function useLoadData(rest: any, params?: any) {
    const [data, setData] = useState()
    const [needUpdate, setNeedUpdate] = useState(true)
    const [loading, setLoading] = useState(true)

    useLayoutEffect(() => {
        if (needUpdate) {
            if (params) {
                rest(params).then((res: any) => {
                    setData(res.data)
                    setLoading(false)
                    setNeedUpdate(false)
                })
            } else {
                rest().then((res: any) => {
                    setData(res.data)
                    setLoading(false)
                    setNeedUpdate(false)
                })
            }

        }
    }, [rest, needUpdate, params]);

    return {data, needUpdate, loading, setNeedUpdate}
}


