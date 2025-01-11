import {BoardGameDTO, FileInfoDTO} from "./boardGame.dto.ts";

export interface GameCollectionDTO {
    alias: string,
    name: string,
    description: string,
    confidentialType: number,
    avatarInfoId: FileInfoDTO,
    backgroundInfoId: FileInfoDTO,
    games: BoardGameDTO[],
}

export interface GameCollectionShortDTO {
    alias: string,
    name: string,
    avatarInfo: FileInfoDTO,
    gameCount: number
}

export interface GameCollectionPatchDto {
    name?: string,
    description?: string,
    confidentialType?: string,
    avatarInfoId?: string,
    backgroundInfoId?: string,
}

export interface Collection_DTO {
    name: string,
    alias: string,
    avatarInfo: {
        id: string,
        name: string,
        contentType: string,
        type: number
    },
    confidentialType: number,
    gameCount: number
}
