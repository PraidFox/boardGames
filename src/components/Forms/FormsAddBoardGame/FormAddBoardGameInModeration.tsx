import {AutoComplete, Button, Form, Input, InputNumber, Select, Space} from 'antd';
import {
    nameBoardGame,
    optionsFieldsStatusCooperativeGame,
} from "../../../tools/storages/fieldOptions";
import {convertOptions, convertOptionsAutoComplete, filterOptionLabel} from "../../../tools/utils/utils";
import {OptionsFieldFormEdit, reducerFieldOptions} from "./reducerFieldOptions";
import {Image} from 'antd';
import {reducerFieldValues, ValesFieldFormEdit} from "./reducerFieldValues";
import {useEffect, useReducer} from "react";
import {GenreApi} from "../../../tools/rest/GenreApi";
import {TypeApi} from "../../../tools/rest/TypeApi";
import {CreateBoardGame, FormBoardGame} from "../../../tools/interfaces/boardGameInterface";
import {BoardGameApi} from "../../../tools/rest/BoardGameApi";

const {TextArea, Search} = Input;
export const FormAddBoardGameInModeration = ({onClose, setNeedUpdate}: {
    onClose: () => void
    setNeedUpdate: () => void
}) => {
    const [form] = Form.useForm();
    const [optionsField, setOptionsField] = useReducer(reducerFieldOptions, {} as OptionsFieldFormEdit)
    const [valuesField, setValuesField] = useReducer(reducerFieldValues, {} as ValesFieldFormEdit)

    useEffect(() => {
        const p0 = GenreApi.getGenre()
        const p1 = TypeApi.getType()

        Promise.all([p0, p1]).then((res) => {
            setOptionsField({
                type: "ADD_ALL_OPTIONS", payload: {
                    name: convertOptionsAutoComplete(nameBoardGame),
                    genre: convertOptions(res[0].data),
                    type: convertOptions(res[1].data),
                    status: optionsFieldsStatusCooperativeGame
                }
            })
        })

    }, []);

    useEffect(() => {
        setValuesField({type: "ADD_ALL_DEFAULT"})
    }, []);

    useEffect(() => {
        form.setFieldsValue({maxPlayers: valuesField.maxPlayersCount})
    }, [form, valuesField.maxPlayersCount]);

    const onFinish = (values: FormBoardGame) => {
        let dataBoardGame: CreateBoardGame = {
            name: values.name,
            description: values.description,
            minPlayersCount: values.minPlayersCount,
            maxPlayersCount: values.maxPlayersCount,
            minPlayerAge: values.minPlayerAge,
            type: {
                id: values.type,
                name: optionsField.type.find(opt => opt.value === values.type)?.label ?? "Отсутствует"
            },
            genre: values.genre.map(id => {
                return {id: id, name: optionsField.type.find(opt => opt.value === id)?.label ?? "Отсутствует"}
            })
        }

        BoardGameApi.addBoardGame(dataBoardGame).then(() => setNeedUpdate()).catch(() => console.log("Не добавлено"))

        onClose()
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const handleSearch = (value: string) => {
        setValuesField({type: "CHANGE_IMG", payload: value})
    };

    // const shouldFieldStatusGame = () => {
    //     if (valuesField.genre) {
    //         return !valuesField.genre.some((opt) => opt == OptionsId.cooperative || opt == OptionsId.detective)
    //     } else {
    //         return true
    //     }
    // }


    return <Form
        name="formEditCart"
        form={form}
        layout={"vertical"}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
    >
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Image
                height={100}
                src={valuesField.img}
            />
        </div>

        <Form.Item label="Картинка для игры" name={"imageGame"} rules={[{type: 'url', warningOnly: true}]}>
            <Search
                placeholder="Введите URL-адрес изображения"
                enterButton="Добавить"
                onSearch={handleSearch}
            />
        </Form.Item>

        <Form.Item
            label={"Наименование игры"}
            name="name"
            rules={[{required: true, message: 'Необходимо заполнить данное поле'}]}
        >
            <AutoComplete
                options={optionsField.name}
                onSelect={(value, option) => setValuesField({type: "CHANGE_NAME_GAME", payload: option})}
                filterOption={filterOptionLabel}
            />
        </Form.Item>


        <Form.Item label="Типы игры" name={"type"}>
            <Select options={optionsField.type} filterOption={filterOptionLabel}/>
        </Form.Item>

        <Form.Item label="Жанр" name={"genre"}>
            <Select mode={"multiple"} allowClear options={optionsField.genre} filterOption={filterOptionLabel}/>
        </Form.Item>


        {/*<Form.Item label="Типы игры" name={"typeGame"}>*/}
        {/*    <Select*/}
        {/*        mode="tags"*/}
        {/*        style={{width: '100%'}}*/}
        {/*        options={optionsField.typeGame}*/}
        {/*        onChange={(value, option) => setValuesField({type: "CHANGE_TYPE_GAME", payload: option})}*/}
        {/*        filterOption={filterOptionLabel}*/}
        {/*    />*/}
        {/*</Form.Item>*/}


        {/* <Form.Item label="Статус прохождения" name={"passageStatus"} hidden={shouldFieldStatusGame()}>*/}
        {/*    <Select*/}
        {/*        style={{width: '100%'}}*/}
        {/*        options={optionsField.statusGame}*/}
        {/*        filterOption={filterOptionLabel}*/}
        {/*    />*/}
        {/*</Form.Item>*/}

        <Form.Item
            label="Описание игры"
            name={"description"}
        >
            <TextArea maxLength={5000}/>
        </Form.Item>

        <div style={{display: "flex", justifyContent: "center"}}>
            <Form.Item label="Мин. игроков" name="minPlayersCount" initialValue={1}>
                <InputNumber min={1} max={100}
                             onChange={count => setValuesField({type: "CHANGE_MIN_PLAYERS", payload: count})}/>
            </Form.Item>

            <Form.Item label="Макс. игроков" name="maxPlayersCount" initialValue={1}>
                <InputNumber min={valuesField.minPlayersCount} max={100}
                             onChange={count => setValuesField({type: "CHANGE_MAX_PLAYERS", payload: count})}/>
            </Form.Item>

            <Form.Item label="От скольки лет" name="minPlayerAge" initialValue={1}>
                <InputNumber min={1} max={100}/>
            </Form.Item>
        </div>

        <Space>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Добавить
                </Button>
            </Form.Item>
            <Form.Item>
                <Button type="default" onClick={onClose}>
                    Отмена
                </Button>
            </Form.Item>
        </Space>

    </Form>
}