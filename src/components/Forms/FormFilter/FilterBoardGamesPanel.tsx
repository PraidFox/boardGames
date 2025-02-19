import {Button, Flex, Form, Input, InputNumber, Select, Slider} from "antd";
import {FilterBoardGames} from "../../../tools/interfaces/fieldsForm.Interface.ts";
import {NF_FilterBoardGames} from "../../../tools/storages/FieldName.storage.ts";
import {useGetGenres} from "../../../tools/hooks/queries/Genre.queries.ts";
import {useGetTypes} from "../../../tools/hooks/queries/Type.queries.ts";
import {UtilsOption} from "../../../tools/utils/UtilsOption.ts";
import {FormInstance} from "antd/es/form";
import {CloseCircleOutlined} from '@ant-design/icons';

export const FilterBoardGamesPanel = ({form}: { form: FormInstance<FilterBoardGames> }) => {


    const {data: optionsGenre, isLoading: isLoadingGenre} = useGetGenres()
    const {data: optionsType, isLoading: isLoadingType} = useGetTypes()


    return (
        <Form<FilterBoardGames>
            name="filterBG"
            form={form}
            // initialValues={{remember: true}}
            layout={'inline'}
            variant={'filled'}
        >
            <Form.Item<FilterBoardGames>
                name={NF_FilterBoardGames.NAME_BG}
                style={{width: 200}}
            >
                <Input
                    placeholder="Наименование игры"
                />
            </Form.Item>

            <Form.Item<FilterBoardGames>
                name={NF_FilterBoardGames.TYPE_BG}
                style={{width: 200}}
            >
                <Select
                    placeholder="Тип игры"
                    mode={"multiple"}
                    allowClear
                    options={optionsType ? UtilsOption.convertToOptions(optionsType) : []}
                    optionFilterProp='label'
                    loading={isLoadingType}
                />
            </Form.Item>

            <Form.Item<FilterBoardGames>
                name={NF_FilterBoardGames.GENRE_BG}
                style={{width: 200}}
            >
                <Select
                    placeholder="Жанр игры"
                    mode={"multiple"}
                    allowClear
                    options={optionsGenre ? UtilsOption.convertToOptions(optionsGenre) : []}
                    optionFilterProp='label'
                    loading={isLoadingGenre}
                />
            </Form.Item>

            <Form.Item<FilterBoardGames>
                name={NF_FilterBoardGames.PLAYER_AGE} initialValue={0}
                style={{width: 200}}
            >
                <InputNumber
                    min={0}
                    addonBefore="От"
                    addonAfter="лет"
                    max={666}
                />
            </Form.Item>


            <Flex align={"center"} vertical>
                <label style={{marginBottom: "-15px"}}>Количество игроков </label>
                <Form.Item<FilterBoardGames>
                    name={NF_FilterBoardGames.COUNT_PLAYERS_MIN_MAX}
                    style={{width: 300}}
                    initialValue={[1, 20]}
                >
                    <Slider
                        //marks={{1: 1, 20: 20}}
                        range
                        // defaultValue={[1, 20]}
                        min={1}
                        max={20}
                        style={{width: "100%"}}
                        tooltip={{open: true}}
                    />
                </Form.Item>

            </Flex>

            <div>


                <Button icon={<CloseCircleOutlined/>} danger style={{marginLeft: "10px"}}
                        onClick={() => form.resetFields()}/>
            </div>


        </Form>
    )


}