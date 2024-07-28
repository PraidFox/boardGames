export interface collection {
    name: string,
    id: number,
    title: string
}

export interface collectionFullInfo extends collection {
    img: string,
    collectionId: number,
    description: string,
    dataUpdate: string,
    byUserName: string,
    likes: number
}