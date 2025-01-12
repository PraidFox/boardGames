import {FileInfoDTO, ManyBoardGameDTO} from "./boardGame.dto.ts";

export interface CurrentGameCollectionDTO {
    name: string,
    alias: string,
    avatarInfoId: FileInfoDTO,
    confidentialType: number,

    description: string,
    backgroundInfoId: FileInfoDTO,
    games: ManyBoardGameDTO,
}


interface GameCollectionDTO extends Omit<CurrentGameCollectionDTO, 'description' | 'backgroundInfoId' | 'games'> {
    gameCount: number
}

export type ManyGameCollectionDTO = GameCollectionDTO[]
export type GameCollectionPatchDto = Partial<CurrentGameCollectionDTO>

