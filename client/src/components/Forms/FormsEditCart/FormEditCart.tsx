
import {AutoComplete, Button, Form, Input, InputNumber, Select, Space} from 'antd';
import {
    nameBoardGame,
    optionsFieldsStatusCooperativeGame,
    typeBoardGameDTO
} from "../../../utils/tmp/constTMP";
import {convertOptions, convertOptionsAutoComplete, filterOptionLabel} from "../../../utils/utils";
import {OptionsFieldFormEdit, reducerOptionsField} from "./reducerOptionsField";
import {OptionsStorage} from "../../../utils/storages/optionsStorage";
import {Image} from 'antd';
import {reducerValuesField, ValesFieldFormEdit} from "./reducerValuesField";
import {Options, OptionsAutoComplete} from "../../../utils/interface/serverInterface";
import {useEffect, useReducer, useState} from "react";

const {TextArea, Search} = Input;
export const FormEditCart = ({onClose}: {
    onClose: () => void
}) => {
    const [form] = Form.useForm();
    const [optionsField, setOptionsField] = useReducer(reducerOptionsField, {} as OptionsFieldFormEdit)
    const [valuesField, setValuesField] = useReducer(reducerValuesField, {} as ValesFieldFormEdit)


    useEffect(() => {
        setOptionsField({
            type: "ADD_ALL_OPTIONS", payload: {
                nameGame: convertOptionsAutoComplete(nameBoardGame),
                typeGame: convertOptions(typeBoardGameDTO),
                statusGame: optionsFieldsStatusCooperativeGame
            }
        })
    }, []);

    useEffect(() => {
        setValuesField({type: "ADD_ALL_DEFAULT"})
    }, []);

    useEffect(() => {
        form.setFieldsValue({maxPlayers: valuesField.maxPlayers})
    }, [valuesField.maxPlayers]);

    const onFinish = (values: any) => {
        console.log('Success:', values);
        onClose()
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const handleSearch = (value: string) => {
        setValuesField({type: "CHANGE_IMG", payload: value})
    };

    const shouldFieldStatusGame = () => {
        if (valuesField.typeGame) {
            return !valuesField.typeGame.some((opt: Options<null>) => opt.value == OptionsStorage.cooperative)
        } else {
            return true
        }
    }

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

        <Form.Item label="Картинка для игры" name={"imageGame"} rules={[{ type: 'url', warningOnly: true }]}>
            <Search
                placeholder="Введите URL-адрес изображения"
                enterButton="Добавить"
                onSearch={handleSearch}
            />
        </Form.Item>

        <Form.Item
            label={"Наименование игры"}
            name="nameGame"
            rules={[{required: true, message: 'Необходимо заполнить данное поле'}]}
        >
            <AutoComplete
                options={optionsField.nameGame}
                onSelect={(value, option) => setValuesField({type: "CHANGE_NAME_GAME", payload: option})}
                filterOption={filterOptionLabel}
            />
        </Form.Item>

        <Form.Item
            label="Описание игры"
            name={"descriptionGame"}
        >
            <TextArea maxLength={5000}/>
        </Form.Item>

        <Form.Item label="Типы игры" name={"typeGame"}>
            <Select
                mode="tags"
                style={{width: '100%'}}
                options={optionsField.typeGame}
                onChange={(value, option) => setValuesField({type: "CHANGE_TYPE_GAME", payload: option})}
                filterOption={filterOptionLabel}
            />
        </Form.Item>

         <Form.Item label="Статус прохождения" name={"passageStatus"} hidden={shouldFieldStatusGame()}>
            <Select
                style={{width: '100%'}}
                options={optionsField.statusGame}
                filterOption={filterOptionLabel}
            />
        </Form.Item>


        <Space direction="vertical">
            <Space>
                <Form.Item label="Мин. игроков" name="minPlayers" initialValue={1}>
                    <InputNumber min={1} max={100}
                                 onChange={count => setValuesField({type: "CHANGE_MIN_PLAYERS", payload: count})}/>
                </Form.Item>
                <Form.Item label="Макc. игроков" name="maxPlayers" initialValue={1}>
                    <InputNumber min={valuesField.minPlayers} max={100}
                                 onChange={count => setValuesField({type: "CHANGE_MAX_PLAYERS", payload: count})}/>
                </Form.Item>
            </Space>

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
        </Space>
    </Form>
}