import {LoadingPanda} from "../../UiElements/LoadingPanda";
import {useFilterBoardGames} from "../../../tools/hooks/queries/BoardGame.queries.ts";
import {BoardGamesList} from "../../UiElements/BoardGames/BoardGamesList.tsx";
import {FormAddBoardGameInModeration} from "../../Forms/FormsAddBoardGame/FormAddBoardGameInModeration.tsx";
import {DrawerSidePanel} from "../../UiElements/DrawerSidePanel.tsx";
import {Pagination, PaginationProps} from "antd";
import {FilterBoardGamesPanel} from "../../Forms/FormFilter/FilterBoardGamesPanel.tsx";
import {FilterBoardGames} from "../../../tools/interfaces/fieldsForm.Interface.ts";
import {useForm} from "antd/es/form/Form";
import {useWatchFieldFilterGame} from "../../../tools/hooks/useWatchFieldFilterGame.ts";
import {useState} from "react";

export const AllBoardGamesPage = () => {
    const [form] = useForm<FilterBoardGames>();

    //TODO передалать, что бы фильтр сохранился в url и оттуда его брать
    const dataFilter = useWatchFieldFilterGame(form)

    const [valuesPagination, setValuesPagination] = useState<[number, number]>([1, 10])

    const {data: allBoardGames, isLoading} = useFilterBoardGames({
        pageNum: valuesPagination[0],
        itemPerPage: valuesPagination[1],
        ...dataFilter
    })

    const changePagination: PaginationProps['onChange'] = (current, pageSize) => {
        // window.scrollTo(0, 0)
        setValuesPagination([current, pageSize]);
    };

    return (
        <>
            <div style={{display: "flex", alignItems: "center", gap: 20}}><h1>Все игры</h1>
                <DrawerSidePanel>
                    {(onClose) => (<FormAddBoardGameInModeration onClose={onClose}/>)}
                </DrawerSidePanel>
            </div>

            <FilterBoardGamesPanel form={form}/>

            {/*<Spin spinning={isFetching} indicator={<LoadingOutlined style={{fontSize: 48}} spin/>}>*/}
            {isLoading && <LoadingPanda/>}
            {!isLoading && allBoardGames &&
                <BoardGamesList dataBoardGames={allBoardGames.boardGames}/>}
            <br/>
            {allBoardGames &&
                <Pagination
                    onChange={changePagination}
                    current={valuesPagination[0]}
                    align="center"
                    total={allBoardGames.count}
                    pageSizeOptions={[10, 30, 50]}
                    pageSize={valuesPagination[1]}
                />
            }
            {/*</Spin>*/}

        </>
    )

}