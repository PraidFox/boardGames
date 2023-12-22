import React, {useState} from 'react';
import {AutoComplete, Button, Form, Input, InputNumber, Select, Space} from 'antd';
import {nameBoardGame, optionsFieldsStatusCooperativeGame, typeBoardGame} from "../utils/tmp/constTMP";

const { TextArea } = Input;
export const FormEditCart = ({handlerCreateBoardGame, onClose}: {
    handlerCreateBoardGame: () => void,
    onClose: () => void
}) => {
    const [[minPlayers, maxPlayers], setCountPlayers] = useState<[number, number]>([1, 1])
    const [form] = Form.useForm();
    const [needFieldEdnGame, setNeedFieldEdnGame] = useState(false)

    const onFinish = (values: any) => {
        console.log('Success:', values);
        onClose()
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const onCancel = () => {
        onClose()
    }

    const handleMinPlayers = (count: number | null) => {
        if (count) {
            if (count >= maxPlayers) {
                setCountPlayers([count, count])
                form.setFieldsValue({maxPlayers: count})
            }
            if (count < minPlayers) {
                setCountPlayers([count, maxPlayers])
            }

        }
    }


    const handleChange = (value: any, options: any) => {
        console.log(options)
        console.log("options", options.some((opt: { id: number; }) => opt.id == 214))
        options.some((opt: { id: number; }) => opt.id == 214) ? setNeedFieldEdnGame(true) : setNeedFieldEdnGame(false)
    };

    const filterOption = (input: string, option?: { label: string; value: string }) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    return <Form
        name="basic"
        // labelCol={{ span: 3 }}
        // wrapperCol={{ span: 15 }}
        // style={{ maxWidth: 600 }}
        // initialValues={{ remember: true }}
        form={form}
        layout={"vertical"}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        // autoComplete={"on"}
    >

        <Form.Item
            label={"Наименование игры"}
            name="nameGame"
            rules={[{required: true, message: 'Необходимо заполнить данное поле'}]}
        >
            <AutoComplete
                options={nameBoardGame}
                onSelect={handleChange}
                filterOption={(inputValue, option) =>
                    option!.value!.toString().toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }
            />
        </Form.Item>

        <Form.Item label="Описание игры" name={"descriptionGame"}>
            <TextArea maxLength={5000} />
        </Form.Item>



        <Form.Item label="Типы игры" name={"TypeGame"}>
            <Select
                mode="tags"
                style={{ width: '100%' }}
                options={typeBoardGame}
                onChange={handleChange}
                filterOption={(inputValue, option) =>
                    option!.label!.toString().toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }
            />
        </Form.Item>

        {needFieldEdnGame ? <Form.Item label="Статус прохождения" name={"passageStatus"}>
            <Select
                style={{ width: '100%' }}
                options={optionsFieldsStatusCooperativeGame}
                filterOption={(inputValue, option) =>
                    option!.label!.toString().toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }
            />
        </Form.Item> : null}



        <Space direction="vertical">
            <Space>
                <Form.Item label="Мин. игроков" name="minPlayers" initialValue={1}>
                    <InputNumber min={1} max={100} onChange={e => handleMinPlayers(e)}/>
                </Form.Item>
                <Form.Item label="Мак. игроков" name="maxPlayers" initialValue={1}>
                    <InputNumber min={minPlayers} max={100}/>
                </Form.Item>
            </Space>

            <Space>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Добавить
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Button type="default" onClick={onCancel}>
                        Отмена
                    </Button>
                </Form.Item>
            </Space>
        </Space>
    </Form>
}