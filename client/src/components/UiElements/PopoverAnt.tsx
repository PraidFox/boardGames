import {Button, Popover} from "antd";
import React from "react";

export const PopoverAnt = ({component, title, buttonName}: {
    component: React.ReactNode,
    title: string,
    buttonName: string
}) => {

    return <Popover content={component} title={title} trigger="click">
        <Button type="primary">
            {buttonName}
        </Button>
    </Popover>
}