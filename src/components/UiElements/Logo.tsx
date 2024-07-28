import {NavLink} from "react-router-dom";
import React from "react";
import {GitlabOutlined} from '@ant-design/icons';

export type logoType = "full" | "mini"

export const Logo = ({type = "full"}: { type?: logoType }) => {
    return (<div style={{textAlign: "center", padding: 10}}>
        <NavLink to={"/"} style={{color: 'white'}}>{type == "full" ? <h2>НаСтолИгры </h2> :
            <GitlabOutlined style={{fontSize: 30}}/>}</NavLink>
    </div>)
}