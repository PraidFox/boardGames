import {Button, Form, Row, Space} from "antd";

export const FormButtons = ({nameOk, nameCancel = "Отмена", handleCancel, loading}: {
    nameOk: string,
    nameCancel?: string,
    handleCancel: () => void
    loading: boolean
}) => {
    return <Row justify="end">
        <Space align="center">
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}> {nameOk}
                </Button>
            </Form.Item>
            <Form.Item>
                <Button htmlType="reset" onClick={handleCancel}>
                    {nameCancel}
                </Button>
            </Form.Item>
        </Space>
    </Row>
}