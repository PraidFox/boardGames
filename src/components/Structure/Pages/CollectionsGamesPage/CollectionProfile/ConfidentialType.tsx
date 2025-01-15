import {Select} from "antd";
import {useChangeDataCollection} from "../../../../../tools/hooks/queries/UserCollection.queries.ts";

export const ConfidentialType = ({confidentialType, whoseCollections, collectionAlias}: {
    confidentialType: number,
    whoseCollections: string,
    collectionAlias: string
}) => {

    const saveConfidentialType = useChangeDataCollection(whoseCollections)

    return (<Select
        defaultValue={confidentialType}
        style={{width: 250}}
        onChange={value => saveConfidentialType.mutateAsync({collectionAlias, patchData: {confidentialType: value}})}
    />)
}