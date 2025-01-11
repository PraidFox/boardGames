import {AutoComplete, Button, Form, Input, InputNumber, Select, Space} from 'antd';
import {filterOptionLabel} from "../../../tools/utils/utils";
import {OptionsFieldFormEdit, reducerFieldOptions} from "./reducerFieldOptions";
import {reducerFieldValues, ValesFieldFormEdit} from "./reducerFieldValues";
import {useEffect, useReducer} from "react";
import {GenreService} from "../../../tools/rest/services/Genre.service.ts";
import {TypeService} from "../../../tools/rest/services/Type.service.ts";
import {FormBoardGame} from "../../../tools/interfaces/boardGame.Interface.ts";
import {BoardGameService} from "../../../tools/rest/services/BoardGame.service.ts";
import {UploadImagesMany} from "../../UiElements/Buttons/UploadImagesMany";
import {CreateGameDTO} from "../../../tools/interfaces/DTO/boardGame.dto.ts";

const {TextArea} = Input;
export const FormAddBoardGameInModeration = ({onClose, setNeedUpdate}: {
    onClose: () => void
    setNeedUpdate: () => void
}) => {
    const [form] = Form.useForm();
    const [optionsField, setOptionsField] = useReducer(reducerFieldOptions, {} as OptionsFieldFormEdit)
    const [valuesField, setValuesField] = useReducer(reducerFieldValues, {} as ValesFieldFormEdit)

    useEffect(() => {
        const p0 = GenreService.getGenre()
        const p1 = TypeService.getType()

        // Promise.all([p0, p1]).then((res) => {
        //     setOptionsField({
        //         type: "ADD_ALL_OPTIONS", payload: {
        //             name: convertOptionsAutoComplete(nameBoardGame),
        //             genre: convertOptions(res[0].data),
        //             type: convertOptions(res[1].data),
        //             status: optionsFieldsStatusCooperativeGame
        //         }
        //     })
        // })

    }, []);

    useEffect(() => {
        setValuesField({type: "ADD_ALL_DEFAULT"})
    }, []);

    useEffect(() => {
        form.setFieldsValue({maxPlayers: valuesField.maxPlayersCount})
    }, [form, valuesField.maxPlayersCount]);

    const onFinish = (values: FormBoardGame) => {
        const dataBoardGame: CreateGameDTO = {
            name: values.name,
            description: values.description,
            minPlayersCount: values.minPlayersCount,
            maxPlayersCount: values.maxPlayersCount,
            minPlayerAge: values.minPlayerAge,
            typeId: values.typeId,
            genreIds: values.genreIds,
            previewId: valuesField.previewId,
            fileIds: valuesField.images,
            articul: values.articul,
            barcode: values.barcode,
            linkToPublisher: values.linkToPublisher
        }

        BoardGameService.addBoardGame(dataBoardGame).then(() => setNeedUpdate())

        onClose()
    };
    const onFinishFailed = (errorInfo: any) => {

    };

    // const handleSearch = (value: string) => {
    //     setValuesField({type: "CHANGE_IMG", payload: value})
    // };

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

        Загрузка основной картинки (интерфесно можно много, но загрузится первая, потом переделаю)
        <UploadImagesMany setImagesId={(filesId) => setValuesField({type: "CHANGE_PREVIEW", payload: filesId[0]})}/>
        Загрузщка второстепенных картинок
        <UploadImagesMany setImagesId={(filesId) => setValuesField({type: "CHANGE_IMAGES", payload: filesId})}/>

        <Form.Item label="Ссылка на настолку" name={"linkToPublisher"} rules={[{type: 'url', warningOnly: true}]}>
            <TextArea
                placeholder="Введите URL-адрес изображения"
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

        <Form.Item
            label="Артикул"
            name={"articul"}
        >
            <TextArea maxLength={200}/>
        </Form.Item>

        <Form.Item
            label="Штриховой код"
            name={"barcode"}
        >
            <TextArea maxLength={200}/>
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
                    Отправить на модерацию
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