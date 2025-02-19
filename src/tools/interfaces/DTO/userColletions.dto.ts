import {BoardGameMinInfoDto, FileInfoDTO} from "./boardGame.dto.ts";

export interface CurrentGameCollectionDTO {
    alias: string,
    avatarInfoId?: FileInfoDTO,
    backgroundInfoId: FileInfoDTO,
    confidentialType: number,
    description: string,
    games: BoardGameMinInfoDto[],
    name: string,
    updateDate: string
}


export interface GameCollectionDTO extends Omit<CurrentGameCollectionDTO, 'description' | 'backgroundInfoId' | 'games'> {
    gameCount: number
}

export type ManyGameCollectionDTO = GameCollectionDTO[]
export type GameCollectionPatchDto = Partial<CurrentGameCollectionDTO>

