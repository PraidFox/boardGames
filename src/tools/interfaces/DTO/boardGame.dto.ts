export interface BoardGameDTO {
    alias: string,
    description: string,
    files: FileInfoDTO[],
    genres: { id: number, name: string }[],
    id: string,
    labels: string[]
    //linkToPublisher
    maxPlayersCount: number,
    minPlayersCount: number,
    minPlayerAge: number,
    name: string,
    preview: FileInfoDTO,
    rating: number,
    ratingBgg: number,
    ratingTessera: number,
    type: { id: number, name: string },
    userRating: number
}

export type CreateGameDTO = {
    name: string,
    description: string,
    linkToPublisher: string,
    minPlayersCount: number,
    maxPlayersCount: number,
    minPlayerAge: number,
    typeId: number,
    genreIds: number[],
    barcode: string,
    articul: string,
    previewId: string,
    fileIds: string[]
}

export type FilterGameDTO = {
    "id": 0,
    "name": "string",
    "alias": "string",
    "description": "string",
    "minPlayersCount": 0,
    "maxPlayersCount": 0,
    "minPlayerAge": 0,
    "rating": 0,
    "ratingTessera": 0,
    "ratingBgg": 0,
    "type": {
        "id": 0,
        "name": "string"
    },
    "genres": [
        {
            "id": 0,
            "name": "string"
        }
    ],
    "preview": {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "string",
        "contentType": "string",
        "type": 1
    },
    "files": [
        {
            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "name": "string",
            "contentType": "string",
            "type": 1
        }
    ]
}
}


export interface FileInfoDTO {
    id: string,
    name: string,
    contentType: string,
    type: any
}

export interface OptionDTO {
    id: string,
    name: string
}

export interface GenreDTO {
    id: string,
    name: string
}

export interface TypeDTO {
    id: string,
    name: string
}
